import { rNumber, rArray } from 'rh-js-methods'
import Constant from '../../constant';

const { CHINESE } = Constant;

export function cword() {
	return rArray.arraySelectOne(CHINESE.split(''))
}

export function title(min: string = '3', max: string = '5'): string {
	let result: string = '';
	let len: number = rNumber.random(Number(min), Number(max), false);
	while (len--) result += cword();
	return result;
}