import { Template } from 'type';
import generate from './handler'

export function Mock(template: Template): Template {
	return generate(template);
}