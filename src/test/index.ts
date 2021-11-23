import _mock from '../index'

console.log(
	// _mock.mock({ 'nameX|2': { a: 'a', 'b': 'b', c: 'c' } }), '\n',
	// _mock.mock({ 'nameX|1': ['a', 'b', 'c'] }), '\n',// 多选一
	// _mock.mock({ 'nameX': '@name', 'nameX2': '@name' }), '\n',
	// _mock.mock({ 'nameOne|1-100': 10 }), '\n',
	// _mock.mock({ 'nameOne|1': ['a', 'b', 'c', 'd'] }), '\n',
	// _mock.mock({ 'nameOne|2': ['a', '@name', 'c', 'd'] }), '\n',
	// _mock.mock({ 'nameX|2-4': '@name' }), '\n',
	// _mock.mock({ 'nameX|0-2': '@name' }), '\n',
	// _mock.mock({ 'nameX|2-4': '@name' }), '\n',
	_mock.mock({
		'list|2-4': {
			'a': '@name', uid: '@uuid', id: '@id', function() {
				return '123'
			}
		},
		// 'li1&c,d,e': "@name",
		// 'li12&(11)c,d,e': "@name",
		// 'li12123123&&(1)c,d,e': "@name",
		// 'li11&&c,d,e': "@name",
		// 'li2&&(11)c,d,e': "@name",
		// 'li22&&(11-20)c,d,e': "@name",
		'name&&(2)key1,key2,key3': "@name",
		// 'list&a,b,c': {
		// 	'a': '@name', uid: '@uuid', id: '@id', function() {
		// 		return '123'
		// 	}
		// }
	}), '\n',
	// _mock.mock('@name'),
);