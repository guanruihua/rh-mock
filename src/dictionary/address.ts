import DICT from './dict'

export const REGION = ['东北', '华北', '华东', '华中', '华南', '西南', '西北','港澳台','海外']
/**
 * 华北: 11-15
 * 东北: 21-23
 * 华东: 31-37
 * 华中: 41-43
 * 华南: 44-46
 * 西南: 50-54
 * 西北: 61-65
 * 港澳台: 71-82
 * 海外: 99
 */

function tree(list: any[]) {
	let mapped = {}
	for (let i = 0, item; i < list.length; i++) {
		item = list[i]
		if (!item || !item.id) continue
		mapped[item.id] = item
	}

	let result: any[] = []
	for (let ii = 0, item; ii < list.length; ii++) {
		item = list[ii]

		if (!item) continue
		if (item.pid == undefined && item.parentId == undefined) {
			result.push(item)
			continue
		}
		let parent = mapped[item.pid] || mapped[item.parentId]
		if (!parent) continue
		if (!parent.children) parent.children = []
		parent.children.push(item)
	}
	return result
}

export const DICT_FIXED = (function () {
	let fixed: {
		id: string,
		pid: string | undefined,
		name: string
	}[] = []
	for (let id in DICT) {
		let pid = id.slice(2, 6) === '0000'
			? undefined : id.slice(4, 6) == '00'
				? (id.slice(0, 2) + '0000') :
				id.slice(0, 4) + '00'
		// if (pid === undefined && DICT[id]) {
			// PROVINCE.push(DICT[id])
			
			// console.log(DICT[id], id)
		// }
		// if (DICT[id] && id.slice(2, 6) !== '0000' && id.slice(4, 6) === '00') {
		// 	CITY.push(DICT[id])
		// }
		// if (DICT[id] && id.slice(2, 6) !== '0000' && id.slice(4, 6) !== '00') {
		// 	COUNTY.push(DICT[id])
		// }
		fixed.push({
			id: id,
			pid: pid,
			name: DICT[id]
		})
	}
	return tree(fixed)
})();
