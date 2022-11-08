import { type } from 'rh-js-methods'
import { Template } from '../type'

export function MockFunction(template: Template) {
	if (typeof template === 'function' && type(template) === 'Function')
		return (template as (...args: any[]) => any).bind(this)(template)
	return ''
}