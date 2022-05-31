// import RMock from '../dist/index'
import { Mock as RMock } from '../src/index'
import { rUtil } from 'rh-js-methods'


// console.log(RH)

console.log(RMock({
  "value|2-4":{
    name: "@name"
  }
}));

0 && rUtil.logGroup(
  'address',
  RMock('@region'),
  RMock('@province'),
  RMock('@city'),
  RMock('@district'),
  RMock('@address'),
  RMock('@address(RR PP CC DD AA)'),
)

0 && rUtil.logGroup(
  'address',
  // RMock('@ip'),
  // RMock('@ip()'),
  // RMock('@ip6()'),
  RMock('@url()'),
  // RMock('@domain'),
  // RMock('@domain()'),
  // RMock('@email()'),

)

0 &&
  rUtil.logGroup(
    'test',
    // RMock({ 'nameX|2': { a: 'a', 'b': 'b', c: 'c' } }), '\n',
    // RMock({ 'nameX|1': ['a', 'b', 'c'] }), '\n',// 多选一
    // RMock({ 'nameX': '@name', 'nameX2': '@name' }), '\n',
    // RMock({ 'nameOne|1-100': 10 }), '\n',
    // RMock({ 'nameOne|1': ['a', 'b', 'c', 'd'] }), '\n',
    // RMock({ 'nameOne|2': ['a', '@name', 'c', 'd'] }), '\n',
    // RMock({ 'nameX|2-4': '@name' }), '\n',
    // RMock({ 'nameX|0-2': '@name' }), '\n',
    // RMock({ 'nameX|2-4': '@name' }), '\n',
    0 && RMock({
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
    // RMock('@name'),
  )
0 &&
  rUtil.logGroup(
    'test',
    // RMock({"name&&a":"@name"}),
    // RMock({ 'name|3': '@name' }),
    RMock({ 'name|3-5': '@name' }), // 有问题
    RMock({ 'num|1-9': 1 }),
    RMock({ 'num|12': 1 }),
    // RMock('@char'),
    RMock('@name'),
    // RMock('@cname'),
    // RMock('@string'),
    // RMock('@title'),
    // RMock('@title(1,30)')
  )
0 && rUtil.logGroup(
  'test-item',
  RMock('@name'),
  RMock('@cname'),
  RMock('@first'),
  RMock('@last'),
  RMock('@cfirst'),
  RMock('@clast'),
  RMock('@name'),
  RMock('@char'),
  RMock('@string'),
  RMock('@title'),
  RMock('@title(1,30)'),
  RMock('@id'),
  RMock('@uuid'),
  RMock('@boolean'),
  RMock('@cword')
)
