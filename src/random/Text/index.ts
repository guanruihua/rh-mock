import { _number, _array } from 'rh-js-methods'
import Constant from '../../constant';

const { CHINESE } = Constant;

export function cword() {
	return _array.arraySelectOne(CHINESE.split(''))
}

export function title(min: string = '0', max: string = '1'): string {
	let result: string = '';
	let len: number = _number.random(Number(min), Number(max), false);
	while (len--) result += cword();
	return result;
}