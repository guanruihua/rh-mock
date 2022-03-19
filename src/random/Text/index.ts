import { rNumber, rArray } from 'rh-js-methods'
import Constant from '../../constant';

const { CHINESE } = Constant;

export function cword() {
	return rArray.arraySelectOne(CHINESE.split(''))
}

export function title(min = '3', max = '5'): string {
	let result = '';
	let len: number = rNumber.random(Number(min), Number(max), false);
	while (len--) {
		result += cword();
	}
	return result;
}