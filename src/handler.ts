import { _array, _util, RH } from 'rh-js-methods';
import Constant from "./constant"
import Util from "./util"
import Random from "./random"
import { tTemplate } from './type'
const { GUID, RE_KEY, RE_PLACEHOLDER, RE_RANGE } = Constant

function generateString(template: string): tTemplate {
	if (template.indexOf('@') > -1) {
		return Random[template.replace('@', '')]();
	}
	return template;
}

function selectNumVal(min: number, max: number, val: string) {
	let type: string = Util.type(val) || 'string'
	let list: any[] = [];
	if (type === 'string') {
		return
	}
}

function generateObject(template: { [key: string]: any }): tTemplate {
	let result: { [ttkey: string]: any } = {}

	for (let key in template) {
		// 'type | [数字]' 特殊处理
		if (RE_KEY.test(key)) {

			let [name, min, max]: any = key.split(/\||\-/)
			//  多选一 
			if (min === '1' && max === undefined) {
				result[name] = _array.arraySelectOne(template[key]);
			}
			// 指定数量
			if (!_util.isEmpty(min) && min !== '1' && max === undefined) {
				let tmp_list: any[] = []
				let count: number = Number(min);
				while (count--) tmp_list.push(generate(template[key]))
				result[name] = tmp_list;
			}
			// 随机数
			if (!_util.isEmpty(min) && !_util.isEmpty(max) && RH.isNumber(template[key])) {
				min = Number(min)
				max = Number(max)
				result[name] = RH.randomNumByRange(min, max);
			}
			// 按照 generate 生成
			if (!_util.isEmpty(min) && !_util.isEmpty(max) && !RH.isNumber(template[key])) {
				let valType: string = Util.type(template[key])
				min = Number(min)
				max = Number(max)
				let tmp_list: any = [];
				let tmp_max: number = max;
				while (tmp_max--) tmp_list.push(generate(template[key]));
				let val: tTemplate = _array.arraySelectItemsByRange(
					tmp_list,
					min, max
				);
				result[name] = val || '';
			}
		} else {
			result[key] = generate(template[key]);
		}
	}
	return result;
}


function generate(template: any): any {
	let type: string = Util.type(template);
	switch (type) {
		case 'object': return generateObject(template);
		case 'string': return generateString(template);
		case 'array': return template.map((item: tTemplate): tTemplate => generate(item) );
		default: return template;
	}
}

const Handler: { [key: string]: any } = {
	// mock 入口, 主要负责
	generate,
}

export default Handler