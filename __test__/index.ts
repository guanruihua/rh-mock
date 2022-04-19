// import RMock from '../dist/index'
import RMock from '../src/index'
import { rUtil } from 'rh-js-methods'


// console.log(RH)

1 && rUtil.logGroup(
  'address',
  RMock.mock('@region'),
  RMock.mock('@region(3)'),
  RMock.mock('@province'),
  RMock.mock('@city'),
  RMock.mock('@county'),
  RMock.mock('@address'),
)

0 && rUtil.logGroup(
  'address',
  // RMock.mock('@ip'),
  // RMock.mock('@ip()'),
  // RMock.mock('@ip6()'),
  RMock.mock('@url()'),
  // RMock.mock('@domain'),
  // RMock.mock('@domain()'),
  // RMock.mock('@email()'),

)

0 &&
  rUtil.logGroup(
    'test',
    // RMock.mock({ 'nameX|2': { a: 'a', 'b': 'b', c: 'c' } }), '\n',
    // RMock.mock({ 'nameX|1': ['a', 'b', 'c'] }), '\n',// 多选一
    // RMock.mock({ 'nameX': '@name', 'nameX2': '@name' }), '\n',
    // RMock.mock({ 'nameOne|1-100': 10 }), '\n',
    // RMock.mock({ 'nameOne|1': ['a', 'b', 'c', 'd'] }), '\n',
    // RMock.mock({ 'nameOne|2': ['a', '@name', 'c', 'd'] }), '\n',
    // RMock.mock({ 'nameX|2-4': '@name' }), '\n',
    // RMock.mock({ 'nameX|0-2': '@name' }), '\n',
    // RMock.mock({ 'nameX|2-4': '@name' }), '\n',
    0 && RMock.mock({
      'list|2-4': {
        a: '@name',
        uid: '@uuid',
        id: '@id',
        function() {
          return '123'
        },
      },
      // 'li1&c,d,e': "@name",
      // 'li12&(11)c,d,e': "@name",
      // 'li12123123&&(1)c,d,e': "@name",
      // 'li11&&c,d,e': "@name",
      // 'li2&&(11)c,d,e': "@name",
      // 'li22&&(11-20)c,d,e': "@name",
      'name&&(2)key1,key2,key3': '@name',
      // 'list&a,b,c': {
      // 	'a': '@name', uid: '@uuid', id: '@id', function() {
      // 		return '123'
      // 	}
      // }
    }),
    '\n'
    // RMock.mock('@name'),
  )
0 &&
  rUtil.logGroup(
    'test',
    // RMock.mock({"name&&a":"@name"}),
    // RMock.mock({ 'name|3': '@name' }),
    RMock.mock({ 'name|3-5': '@name' }), // 有问题
    RMock.mock({ 'num|1-9': 1 }),
    RMock.mock({ 'num|12': 1 }),
    // RMock.mock('@char'),
    RMock.mock('@name'),
    // RMock.mock('@cname'),
    // RMock.mock('@string'),
    // RMock.mock('@title'),
    // RMock.mock('@title(1,30)')
  )
0 && rUtil.logGroup(
  'test-item',
  RMock.mock('@name'),
  RMock.mock('@cname'),
  RMock.mock('@first'),
  RMock.mock('@last'),
  RMock.mock('@cfirst'),
  RMock.mock('@clast'),
  RMock.mock('@name'),
  RMock.mock('@char'),
  RMock.mock('@string'),
  RMock.mock('@title'),
  RMock.mock('@title(1,30)'),
  RMock.mock('@id'),
  RMock.mock('@uuid'),
  RMock.mock('@boolean'),
  RMock.mock('@cword')
)
