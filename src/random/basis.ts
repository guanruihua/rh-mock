
// 返回一个随机布尔值
export function boolean(): boolean {
	return Math.random() >= 0.5;
}

// id
export function id():string {
	return Math.random().toString().slice(2)	
}