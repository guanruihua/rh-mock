import { rArray, rNumber } from 'rh-js-methods'
import Constant from '../constant'

function letters(start: number, end: number): string {
	const codeFn = () => String.fromCharCode(rNumber.random(97, 122, false))
	let len = rNumber.random(start, end, false)
	let result = ''
	while (len--) {
		result += codeFn()
	}
	return result
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