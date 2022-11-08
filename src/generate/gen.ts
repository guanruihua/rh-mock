import { Template } from '../type'
import * as Random from '../random'

export const dictionary = new Map()

export function initDictionary(row: Record<string, any>) {
	for (const key in row) {
		dictionary.set(key, row[key])
	}
}

export function generateString(template: string): Template {

	if (template[0] !== '@') return template

	// eslint-disable-line no-useless-escape
	const [, controlIndex, ...params]: string[] = template.split(/@|\(|\)|,/) || []

	return Random[controlIndex](...params)

}


