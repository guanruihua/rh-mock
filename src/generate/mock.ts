import * as Random from '../random'
import { generateString, dictionary, initDictionary } from './gen'
import { isEmpty, random, select, selects, type } from 'rh-js-methods'
import { Template, BaseSupportObject, BaseSupportArray } from '../type'
import Constant from '../constant'

const { RE_KEY, RE_Object_KEY, RE_Object_str_KEY } = Constant

export function generateObject(template: BaseSupportObject): BaseSupportObject {
	const result: BaseSupportObject = {}

	for (const key in template) {
		// 'type | [数字]' 特殊处理
		if (RE_KEY.test(key)) {
			// eslint-disable-next-line no-useless-escape
			const [name, min, max]: (string | undefined)[] = key.split(/\||\-/)
			//  多选一
			if (min === '1' && max === undefined) {
				result[name] = select(template[key] as BaseSupportArray)
			}
			// 指定数量
			if (!isEmpty(min) && min !== '1' && max === undefined) {
				const tmp_list: any[] = []
				let count = Number(min)
				while (count--) { tmp_list.push(Mock(template[key])) }
				result[name] = tmp_list
			}
			// 随机数
			if (!isEmpty(min) && !isEmpty(max) && type(template[key]) === 'Number') {
				result[name] = random(Number(min), Number(max))
			}
			// 按照 generate 生成
			if (!isEmpty(min) && !isEmpty(max)) {
				const tmp_list: any = []
				let tmp_max = Number(max)
				while (tmp_max--) { tmp_list.push(Mock(template[key])) }
				const val: Template = selects(tmp_list, Number(min), Number(max))
				result[name] = val || ''
			}
		} else if (RE_Object_KEY.test(key)) {
			const tmpVal: any = template[key]
			const [name, ...tkeys] = key.split(/&&|&|,/)
			let len = 0

			if (/\(\d+\)/.test(tkeys[0])) {
				const [, num, tkey]: any = tkeys[0].split(/\(|\)/)
				tkeys[0] = tkey
				len = Number(num)
			}

			// eslint-disable-next-line no-useless-escape
			if (/(\d+\-\d+)/.test(tkeys[0])) {
				// eslint-disable-next-line no-useless-escape
				const [min, max, , tkey]: any = tkeys[0].split(/\-|\(|\)/)
				tkeys[0] = tkey
				len = random(Number(min), Number(max))
			}

			if (len > 0) {

				result[name] = []
				while (len--) {
					const result_tmp: BaseSupportObject = {}
					tkeys.forEach((item: string): void => {
						result_tmp[item] = Mock(tmpVal)
					})

						; (result[name] as BaseSupportArray).push(result_tmp)
				}
			} else {
				result[name] = {}
				tkeys.forEach((item: string): void => {
					(result[name] as BaseSupportObject)[item] = Mock(tmpVal)
				})
			}
			if (RE_Object_str_KEY.test(key)) { result[name] = JSON.stringify(result[name]) }
		} else {
			result[key] = Mock(template[key])
		}
	}

	return result
}

function RandomList(min: number, max: number) {
	const __random__ = random(min, max, 0)
	return function (template: Template) {
		const list = []
		for (let i = 0; i < __random__; i++) {
			list.push(Mock(template))
		}
		return list
	}
}

function Mock(template: Template): any {

	try {
		switch (type(template)) {
			case 'Object':
				return generateObject(template as BaseSupportObject)
			case 'String':
				// eslint-disable-next-line no-case-declarations
				const [, controlIndex, ...params]: string[] = (template as string).split(/@|\(|\)|,/) || []
				if (dictionary.has(controlIndex)) {
					if (type(dictionary.get(controlIndex)) === 'Function') {
						return dictionary.get(controlIndex).bind(this)(...params)
					}
					return dictionary.get(controlIndex)
				}
				return generateString(template as string)
			case 'Array':
				return (template as Template[]).map((item: Template): Template => Mock(item))
			case 'Function':
				return (template as (...args: any[]) => any)(template)
			default:
				return template
		}
	} catch (error) {
		return template
	}
}


export { Random, RandomList, Mock, initDictionary, dictionary }

export default Mock
