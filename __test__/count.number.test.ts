import { logGroup } from 'rh-js-methods'
import { cases } from './case'

// countRule

[
	// 0,
	1,
	2,
	// 3,
	// 4
].forEach(item => {
	logGroup(`key|${item}`, cases(`|${item}`))
})