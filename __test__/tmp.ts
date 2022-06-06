/* eslint-disable*/
// import { createCanvas } from 'canvas'

// const IMAGE_MAX_WIDTH = 3000
// const IMAGE_MAX_HEIGTH = 3000

// export function image64(
// 	text: string = '',
// 	size: string = '100x100',
// 	foreground = '000'
// ) {
// 	const [width = '100', height = '100'] = size.split(/x|X/)
// 	const _width: number = Math.min(parseInt(width), IMAGE_MAX_WIDTH) || 200
// 	const _height: number = Math.min(parseInt(height), IMAGE_MAX_HEIGTH) || 200

// 	const canvas = createCanvas(_width, _height)
// 	const ctx = canvas.getContext('2d')

// 	ctx.fillStyle = `#${foreground}`
// 	ctx.font = `${_width / 10}px Sans`

// 	const _text = text || `${_width} x ${_height}`
// 	const _text_w = ctx.measureText(_text).width
// 	ctx.fillText(_text, (_width - _text_w) / 2, _height / 2)

// 	return canvas.toDataURL()
// }
// ###### `@image64([text[,width[,height[,textColor]]]])`

// - base64图片
// - `text: string = ''` : 文字
// - `size: string = '100x100'`: 图片大小
// - `foreground = '000`: 文字颜色

// // 生成长度为len的数字id
// export function useNumberId(len: number): string {
//   const temp_id: string = Math.random().toString().slice(2)
//   len -= temp_id.length
//   if (len < 0) {
//     return temp_id.slice(-len)
//   }
//   return `${temp_id + useNumberId(len)}`
// }


// /**
//  * @title id
//  * @description id
//  * @param length [1<=length, default 10]
//  * @returns id
//  */
// export function id(length?: number): string {
//   return useNumberId(clamp(defaultValue(length, 10), 1))
// }

// /**
//  * @title uuid
//  * @description uuid
//  * @param {string} template uuid 的格式 default:'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'
//  * @returns {string} uuid
//  * @description 生成随机uid
//  */
// export function uuid(template: string): string {
//   const val: string = template || 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'
//   let d: number = new Date().getTime() // 随机种子
//   return val.replace(/[xy]/g, function (c: string): string {
//     const r: number = (d + Math.random() * 16) % 16 | 0
//     d = Math.floor(d / 16)
//     return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
//   })
// }

// /**
//  * @title uniqueId
//  * @description id
//  * @param prefix id 前缀
//  */
// export function uniqueId(length: number = 10, prefix: string =''): string {
//   if (arguments.length > 0) {
//     if (type(arguments[0]) === 'String') {
//       prefix = arguments[0]
//       length = 10
//     }
//     console.log({ arguments })
//   }
//   return `${prefix + id(length)}`
// }


/**
 * @title initMultArray
 * @description 生成多维数组
 * @param unit 初始化单元
 * @param dimension 多维指定 用&符号隔开
 * @returns 多维数组
 */
export function initMultArray(unit: any, dimension?: string): any[] {
  if (!dimension) return [unit]
  if (!unit) unit = undefined

  const dimArr: number[] = dimension
    .split('&')
    .map((item: string): number => Number(item) || 1)

  if (dimArr.length < 2) {
    return Array(dimArr[0]).fill(unit)
  }

  let depth: number = dimArr.length
  let arrItem: any[] = Array(dimArr[--depth]).fill(unit)
  do {
    const tmp_arrItem: any[] = JSON.parse(JSON.stringify(arrItem)) || []
    arrItem = Array(dimArr[--depth]).fill(tmp_arrItem)
  } while (depth)

  return arrItem
}
