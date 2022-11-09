import { type, random, select } from "rh-js-methods"
import { Template } from "../type"
import { Mock } from '../generate'
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
	const { name, min, max, multKey = [], count, handler } = keyType
	const valueType = type(template)

	// console.log({ keyType, valueType })

	if (key.indexOf('|') < 0) {
		collect[key] = Mock(template)
		return
	}



	if (multKey.length > 0) {
		collect[name] = {}
		multKey.forEach(item => {
			MockRule(collect[name], item, template)
		})
		if (handler) collect[name] = handler(collect[name])
		return
	}

	if (keyType.random) {

		if (valueType === 'Number' && typeof template === 'number') {
			collect[name] = random(template, template ** (min + 1))
		} else {
			collect[name] = Mock(template)
		}

		if (handler) collect[name] = handler(collect[name])
		return
	}


	if (count && count > 0) {
		if (valueType === 'Object' && typeof template === 'object') {
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
			collect[name] = new Array(count).fill(Mock(template)).join('')
		}
		if (handler) collect[name] = handler(collect[name])
		return
	}




	// if (multKey.length === 0 && handler) {
	// 	collect[name] = handler(collect[name])
	// }

	collect[name] = template
	return
}