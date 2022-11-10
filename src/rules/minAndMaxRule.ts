import { random, selects, concat, ceil } from "rh-js-methods"
import { Template } from "../type"
import { Mock as _Mock } from '../generate'
import { RuleType } from "./getRuleType"

export function minAndMaxRule(collect: Record<string, any>, ruleType: RuleType, template: Template) {
	const { valueType, name, min, max, handler, dmin, dmax } = ruleType

	const Mock = _Mock.bind(collect)

	if (Array.isArray(template)) {
		collect[name] = selects(concat(...new Array(ceil(max / template.length)).fill(undefined).map(() => Mock(template))), min, max)
	} else if (valueType === 'Number') {
		collect[name] = random(min, max)
		if (dmin !== undefined) {
			collect[name] = Number(collect[name] + '.' + random(dmin, dmax || dmin * 3 || 3))
		}
	} else if (valueType === 'String') {
		collect[name] = new Array(random(min, max)).fill('').map(() => Mock(template)).join('')
	} else {
		collect[name] = new Array(random(min, max)).fill('').map(() => Mock(template))
	}
	if (handler) collect[name] = handler(collect[name])
	return
}
