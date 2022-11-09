import { logGroup } from 'rh-js-methods'

const reg = /(.*)[|(&)(&&)]([+-]\d*)?-?([+-]?\d*)?\.?([+-]?\d*)?-?([+-]?\d*)\((.*)\)?/;

// logGroup('reg-test',
// 	reg.exec('name|1-100'),
// 	reg.exec('name|+1'),
// 	reg.exec('name|1'),
// 	reg.exec('name|3'),
// 	reg.exec('name|1-100.1-10'),
// )

// logGroup('reg-test-&',
// 	reg.exec('name&1-100'),
// 	reg.exec('name&+1'),
// 	reg.exec('name&1'),
// 	reg.exec('name&3'),
// 	reg.exec('name&1-100.1-10'),

// 	reg.exec('name&1-100(key1,key2,key3)'),
// 	reg.exec('name&+1(key1,key2,key3)'),
// 	reg.exec('name&1(key1,key2,key3)'),
// 	reg.exec('name&3(key1,key2,key3)'),
// 	reg.exec('name&1-100.1-10(key1,key2,key3)'),
// )

const reg3 = /(.*)&&([+-]\d*)?([+-]?\d*)?.?(\d*)?(-?\d*)?(\((.*)\))?/;

logGroup('reg-test-&&',
	reg3.exec('name&&1-100(key1,key2,key3)'),
	reg3.exec('name&&+1(key1,key2,key3)'),
	reg3.exec('name&&1(key1,key2,key3)'),
	reg3.exec('name&&3(key1,key2,key3)'),
	reg3.exec('name&&(key1,key2,key3)'),
	reg3.exec('name&&1-100.1-10(key1,key2,key3)'),
	// /(.*)&&([+-]\d*)?([+-]?\d*)?[\.]?(\d*)?(-?\d*)?/.exec('name&&1-100.1-10(key1,key2,key3)')
)