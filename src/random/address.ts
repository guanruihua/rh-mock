
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


function selectRegion(_id: string) {
	// eslint-disable-next-line
	const _index = Number((Number(_id.slice(0, 2)) / 10).toFixed()) - 1
	if (isNaN(_index) || _index < 0 || _index > REGION.length) {
		return region()
	}
	return REGION[_index] || region()
}


export function region(): string {
	return address('RR')
}
// eslint-disable-next-line
export function province(flag: string = '1'): string {
	return address('PP')
}

// eslint-disable-next-line
export function city(flag: string = '1'): string {
	return address('CC')
}

// eslint-disable-next-line
export function district(flag: string = '1'): string {
	return address('DD')
}

// PPCCDDAA: 地址格式
// XX街道XX路XX号XX栋XX单元XX号
// eslint-disable-next-line
export function address(tmp: string = 'PPCCDDAA'): string {
	if(!isNaN(Number(tmp))){
		tmp = 'RRPPCCDDAA'
	}
	const _province = rArray.arraySelectOne(DICT_FIXED)
	const _region = selectRegion(_province.id)
	const _city = rArray.arraySelectOne(_province.children || [])
	const _district = rArray.arraySelectOne(_city.children || [])
	const _address = `${randomNum(512).toString(16)}街道${randomNum(512).toString(16)}路${randomNum()}号${randomNum()}栋${randomNum()}单元${randomNum()}号`

	tmp = tmp
		.replace('RR', _region)
		.replace('PP', _province.name).replace('CC', _city.name)
		.replace('DD', _district.name).replace('AA', _address)

	return tmp
}



export function ip(): string {
	const ipItemFn = () => rNumber.random(1, 254, false)
	return `${ipItemFn()}.${ipItemFn()}.${ipItemFn()}.${ipItemFn()}`
}


// eslint-disable-next-line
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

export function url(protocols = 'http'): string {
	if (!protocols) {
		protocols = 'http'
	}
	const itemUrl = () => rArray.arraySelectItems(Constant.VARCHARS.split(''), 3, 12).join('')
	return `${protocols}://${itemUrl()}.${itemUrl()}/${itemUrl()}`
}