import { rArray, rNumber, rUtil } from 'rh-js-methods'
import Constant from './constant'
import Util from './util'
import Random from './random'
import { tTemplate } from './type'
const { RE_KEY,  RE_Object_KEY, RE_Object_str_KEY } = Constant

function generateString(template: string): tTemplate {
  if (template.indexOf('@') > -1) {
    const [, controlIndex, ...params] = template.split(/@|\(|\)|,/) || []
    return Random[controlIndex](...params)
  }
  return template
}

// function selectNumVal(min: number, max: number, val: string) {
//   let type: string = Util.type(val) || 'string'
//   let list: any[] = []
//   if (type === 'string') {
//     return
//   }
// }

function generateObject(template: { [key: string]: any }): tTemplate {
  let result: { [ttkey: string]: any } = {}

  for (let key in template) {
    // 'type | [数字]' 特殊处理
    if (RE_KEY.test(key)) {
      let [name, min, max]: any = key.split(/\||\-/)
      //  多选一
      if (min === '1' && max === undefined) {
        result[name] = rArray.arraySelectOne(template[key])
      }
      // 指定数量
      if (!rUtil.isEmpty(min) && min !== '1' && max === undefined) {
        let tmp_list: any[] = []
        let count: number = Number(min)
        while (count--) tmp_list.push(generate(template[key]))
        result[name] = tmp_list
      }
      // 随机数
      if (!rUtil.isEmpty(min) && !rUtil.isEmpty(max) && rUtil.type(template[key]) === 'Number') {
        min = Number(min)
        max = Number(max)
        result[name] = rNumber.random(min, max)
      }
      // 按照 generate 生成
      if (!rUtil.isEmpty(min) && !rUtil.isEmpty(max) && rUtil.type(template[key]) === 'Number') {
        // let valType: string = Util.type(template[key])
        min = Number(min)
        max = Number(max)
        let tmp_list: any = []
        let tmp_max: number = max
        while (tmp_max--) tmp_list.push(generate(template[key]))
        // let val: tTemplate = rArray.arraySelectItems(tmp_list, min, max)
        let val: any = rArray.arraySelectItems(tmp_list, min, max)
        result[name] = val || ''
      }
    } else if (RE_Object_KEY.test(key)) {
      let tmpVal: any = template[key]
      let [name, ...tkeys] = key.split(/&&|&|,/)
      // let tmpResult: any[] = []
      let len: number = 0

      if (/\(\d+\)/.test(tkeys[0])) {
        let [, num, tkey]: any = tkeys[0].split(/\(|\)/)
        tkeys[0] = tkey
        len = Number(num)
      }

      if (/(\d+\-\d+)/.test(tkeys[0])) {
        let [min, max, , tkey]: any = tkeys[0].split(/\-|\(|\)/)
        tkeys[0] = tkey
        len = rNumber.random(Number(min), Number(max))
      }

      if (len > 0) {
        result[name] = []
        while (len--) {
          let result_tmp: any = {}
          tkeys.forEach((item: string): void => {
            result_tmp[item] = generate(tmpVal)
          })
          result[name].push(result_tmp)
        }
      } else {
        result[name] = {}
        tkeys.forEach((item: string): void => {
          result[name][item] = generate(tmpVal)
        })
      }
      if (RE_Object_str_KEY.test(key)) result[name] = JSON.stringify(result[name])
    } else {
      result[key] = generate(template[key])
    }
  }

  return result
}

function generate(template: any): any {
  let type: string = Util.type(template)
  switch (type) {
    case 'object':
      return generateObject(template)
    case 'string':
      return generateString(template)
    case 'array':
      return template.map((item: tTemplate): tTemplate => generate(item))
    case 'function':
      return template()
    default:
      return template
  }
}

const Handler: { [key: string]: any } = {
  // mock 入口, 主要负责
  generate,
}

export default Handler
