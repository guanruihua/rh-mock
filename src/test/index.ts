import _mock from '../index'

// console.log('test');



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
	_mock.mock({ 'list|10-20': { 'a': '@name', uid: '@uuid', id: '@id' } }), '\n',
	// _mock.mock('@name'),
);