import { dictionary } from '../generate/dictionary'

export interface KeyType extends Record<string, any> {
	name: string
	rule?: string
	min?: number
	max?: number
	dmin?: number
	dmax?: number
	count?: number
	/**
	 * 单数字: +number
	 */
	random?: boolean
	multKey?: string[]
	handler?: any
	_this: any
}


function getRule(rule: string): Record<string, any> {

	let count = undefined
	let random = false
	const [min, max, dmin, dmax] = rule.split(/-|\./)

	if (max === undefined && Number(min) > 0) {
		count = min
	}

	if (min && min.indexOf('+') === 0) {
		random = true
	}

	const toNumber = (val: number | string) => {
		const result = Number(val)
		if (isNaN(result)) {
			return undefined;
		}
		return result
	}

	return {
		random,
		min: toNumber(min),
		max: toNumber(max),
		dmin: toNumber(dmin),
		dmax: toNumber(dmax),
		count: toNumber(count)
	}
}

export function getKeyType(key: string): KeyType {
	const keyType = {
		name: '',
		rule: undefined,
		min: undefined,
		max: undefined,
		dmin: undefined,
		dmax: undefined,
		count: undefined,
		random: false,
		multKey: undefined,
		handler: undefined,
		_this: undefined,
	}

	const types: string[] = key.split('|')

	if (!types || types.length < 1) return;
	if (types[0]) keyType.name = types[0]
	if (types[1]) {
		keyType.rule = types[1]
		Object.assign(keyType, getRule(types[1]))
	}
	if (types[2]) keyType.multKey = types[2].split(',')
	if (types[3]) keyType.handler = dictionary.get(types[3])

	return keyType
}
