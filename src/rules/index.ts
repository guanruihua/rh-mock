import { type, random, select, selects, concat, ceil } from "rh-js-methods"
import { Template } from "../type"
import { Mock as _Mock } from '../generate'
import { getKeyType } from './getKeyType'

/**
 * 'name|min-max':string
 * 'name|+1': string
 * 'name|min-max.dmin-dmax':number
 * 'name|1':boolean
 * 'name|count':object
 * 'name|min-max':object
 * 'name|1': array
 * 'name|+1': array 舍弃
 * 'name|min-max': array
 * 'name|count': array
 * 
 * 'name': function
 * 
 * 'name&(key1,key2,key3)':'@name'
 * 改成
 * 'name||key1,key2,key3':'@name'
 * 'name&&(2-5)key1,key2,key3': "@name"
 * 改成
 * 'name|2-5|key1,key2,key3|JsonString': "@name"
 */
export function MockRule(collect: Record<string, any>, key: string, template: Template): void {

	const keyType = getKeyType(key)
	const { rule = '', name, min, max, multKey = [], count, handler, dmin, dmax } = keyType
	const valueType = type(template)

	const Mock = _Mock.bind(collect)
	
	if (key.indexOf('|') < 0) {
		collect[key] = Mock(template)
		return
	}

	// 通过 指定key 生成 对象
	if (multKey.length > 0) {
		collect[name] = {}
		multKey.forEach(item => {
			MockRule(collect[name], item + '|' + rule, template)
		})
		if (handler) collect[name] = handler(collect[name])
		return
	}

	// 对 boolean 进行特殊处理
	if (valueType === 'Boolean') {
		collect[name] = random(min, max || (min * 3) || 3) % 2 === 0
		if (handler) collect[name] = handler(collect[name])
		return
	}

	// 使用 +number 格式
	if (keyType.random) {
		if (Array.isArray(template)) {
			if (min === 1) {
				collect[name] = select(Mock(template))
			}
			if (min > 1) {
				collect[name] = selects(Mock(template), min, min)
			}

		} else if (valueType === 'Number') {
			collect[name] = random(template as number, template as number ** (min + 1))
		} else {
			collect[name] = Mock(template)
		}

		if (handler) collect[name] = handler(collect[name])
		return
	}


	// 只设置min, 没有设置max
	if (count && count > 0) {
		if (Array.isArray(template)) {
			if (count === 1) {
				collect[name] = select(Mock(template))
			}
			if (count > 1) {
				collect[name] = selects(Mock(template), count, count)
			}
		} else if (valueType === 'Object') {
			const tmpKeys = Object.keys(template) || []
			let len = tmpKeys.length
			while (len > count) {
				const index = select(tmpKeys)
				if (index) {
					delete template[index];
					len--;
				}
			}
			collect[name] = template
		} else {
			collect[name] = new Array(count).fill('').map(() => Mock(template)).join('')
		}

	}

	// 同时设置min 和 max
	if (max !== undefined && min !== undefined) {
		if (Array.isArray(template)) {
			collect[name] = selects(concat(...new Array(ceil(max / template.length)).fill(undefined).map(() => Mock(template))), min, max)
		} else if (valueType === 'Number') {
			collect[name] = random(min, max)
			if (dmin !== undefined) {
				collect[name] = Number(collect[name] + '.' + random(dmin, dmax || dmin * 3 || 3))
			}
		} else if (valueType === 'String') {
			collect[name] = new Array(random(min, max)).fill('').map(() => Mock(template)).join('')
		} else {
			collect[name] = new Array(random(min, max)).fill('').map(() => Mock(template))
		}
		if (handler) collect[name] = handler(collect[name])
		return
	}

	if (handler) collect[name] = handler(collect[name])
	return

}