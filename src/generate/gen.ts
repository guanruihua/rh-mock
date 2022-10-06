import { Template } from '../type'
import * as Random from '../random'

export function generateString(template: string): Template {

	if (template[0] !== '@') return template

	// eslint-disable-line no-useless-escape
	const [, controlIndex, ...params]: string[] = template.split(/@|\(|\)|,/) || []

	return Random[controlIndex](...params)

}


