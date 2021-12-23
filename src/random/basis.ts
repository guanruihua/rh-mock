import { _array, _number } from 'rh-js-methods'
import Constant from '../constant';

const { CHARS } = Constant

export function char(): string {
	return _array.arraySelectOne(CHARS.split(''))
}

export function string(): string {
	let result: string = char();
	let len: number = _number.random(1, 20, false);
	while (len--) result += char();
	return result;
}


// 返回一个随机布尔值
export function boolean(): boolean {
	return Math.random() >= 0.5;
}

// id
export function id(): string {
	return Math.random().toString().slice(2)
}

/**
 * @param {string} value uuid 的格式 default:'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx' 
 * @returns {string} uuid
 * @description 生成随机uid
 */

export function uuid(value: string): string {
	let val: string = value || 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx';
	let d: number = new Date().getTime();   // 随机种子
	return val.replace(/[xy]/g, function (c: string): string {
		let r: number = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
	});
}