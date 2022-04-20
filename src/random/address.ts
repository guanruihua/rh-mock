import { rArray, rNumber } from 'rh-js-methods'
import Constant from '../constant'
import { DICT_FIXED, REGION } from '../dictionary'

const randomNum = (max = 99) => rNumber.random(1, max, false)

function letters(start: number, end: number): string {
	const codeFn = () => String.fromCharCode(rNumber.random(97, 122, false))
	let len = rNumber.random(start, end, false)
	let result = ''
	while (len--) {
		result += codeFn()
	}
	return result
}

function showAddress(obj: any, depth: number = 3, ignoreDepth: number = 0): string {
	let result = '';
	if (!depth) {
		return result;
	}

	if (obj.name && depth && depth < ignoreDepth) {
		result = ' ' + obj.name
	}

	if (obj.children) {
		result += ' ' + showAddress(rArray.arraySelectOne(obj.children), --depth, ignoreDepth) || ''
	}

	if (typeof obj === 'string') {
		return obj
	}

	return result
}


export function region(flag: string = '1'): string {
	if (flag === '1' || flag === '2') return rArray.arraySelectOne(REGION) || ''
	if (flag === '3') {
		return showAddress(rArray.arraySelectOne(REGION) || {})
	}
	return rArray.arraySelectOne(REGION) || ''
}

// 1: 本身; 2: 当前地址以及父级; 3: 当前地址以及子级; RRPPCCccaa: 地址格式
export function province(flag: string = '1'): string {
	if (flag === '1') return rArray.arraySelectOne(DICT_FIXED)?.name || ''
	if (flag === '2') return showAddress(rArray.arraySelectOne(DICT_FIXED) || {}, 1, 4)
	if (flag === '3') return showAddress(rArray.arraySelectOne(DICT_FIXED) || {}, 3, 4)
	return ''
}

export function city(flag: string = '1'): string {
	if (flag === '1') return showAddress(rArray.arraySelectOne(DICT_FIXED) || {}, 2, 2)
	if (flag === '2') return showAddress(rArray.arraySelectOne(DICT_FIXED) || {}, 2, 4)
	if (flag === '3') return showAddress(rArray.arraySelectOne(DICT_FIXED) || {}, 2, 3)
	return ''
}

export function county(flag: string = '1'): string {
	return rArray.arraySelectOne(DICT_FIXED)?.name || ''
}

// XX街道XX路XX号XX栋XX单元XX号
export function address(flag: string = '1'): string {
	return `${randomNum(512).toString(16)}街道${randomNum(512).toString(16)}路${randomNum()}号${randomNum()}栋${randomNum()}单元${randomNum()}号`
}



export function ip(): string {
	const ipItemFn = () => rNumber.random(1, 254, false)
	return `${ipItemFn()}.${ipItemFn()}.${ipItemFn()}.${ipItemFn()}`
}


export function domain(x: number = 7, y: number = 3): string {
	if (x < 3) {
		x = 7
	}
	if (y < 2) {
		y = 3
	}
	return letters(3, x) + '.' + letters(2, y)
}


export function ip6(): string {
	const ipItemFn = () => rNumber.random(1, 65535, false).toString(16)
	let result = `${ipItemFn()}`
	let i = 7;
	while (i--) {
		result += `:${ipItemFn()}`
	}
	return result
}

export function email(): string {
	return `${letters(6, 13)}@${letters(2, 6)}.${letters(2, 5)}`
}

export function url(protocols: string = 'http'): string {
	if (!protocols) {
		protocols = 'http'
	}
	const itemUrl = () => rArray.arraySelectItems(Constant.VARCHARS.split(''), 3, 12).join('')
	return `${protocols}://${itemUrl()}.${itemUrl()}/${itemUrl()}`
}