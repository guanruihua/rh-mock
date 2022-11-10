import { logGroup } from 'rh-js-methods'
import { cases } from './case'

// countRule

[
	'0-1',
	// '1-1',
	// '2-1',
	// '3-1',
	// '4-1'
].forEach(item => {
	logGroup(`key|${item}`, cases(`|${item}`))
})