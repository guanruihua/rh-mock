import { rNumber } from 'rh-js-methods'

function letters(start:number, end:number):string {
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
	if(x<3){
		x=7
	}
	if(y<2){
		y=3
	}
	return letters(3,x)+'.'+letters(2,y)
}


export function email(): string {
	return `${letters(6,13)}@${letters(2,6)}.${letters(2,5)}`
}