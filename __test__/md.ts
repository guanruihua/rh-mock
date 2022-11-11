import { Mock } from '../src'
import { logGroup } from 'rh-js-methods'


0 && logGroup('name',
	Mock('@name')
)


1 && logGroup('name|number',
	Mock({ 'name': '@name' }),
	Mock({ 'name|1': 1 }),
	Mock({ 'name|1': '@name' }),
	Mock({
		'name|1': {
			a: '@name'
		}
	}),
	Mock({ 'name|3': '@name' }),
	Mock({ 'name|3': 1 }),
)

0 && logGroup('name|+number',
	Mock({ 'name|+1': '@name' }),
	Mock({ 'name|+1': 1 }),
	Mock({ 'name|+3': '@name' }),
	Mock({ 'name|+3': 1 }),
)