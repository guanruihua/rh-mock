import { random } from "rh-js-methods"
import { RuleType } from "./getRuleType"

export function dminAndDmaxRule(collect: Record<string, any>, ruleType: RuleType) {

	const { valueType, name, min, max, dmin, dmax } = ruleType

	const integerPart = random(min, max || min)
	const decimalPartLen = random(dmin, dmax || dmin)
	const decimalPart = random(
		(10 ** decimalPartLen) - (10 ** (decimalPartLen - 1)),
		10 ** decimalPartLen - 1
	)
	if (valueType !== 'Number') return;

	collect[name] = parseFloat(`${integerPart}.${decimalPart}`)

	return
}
