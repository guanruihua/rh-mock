import { Mock as RMock } from '../src'
import { logGroup, once } from 'rh-js-methods'
// import {  } from 'rh-test'

const logs = once(logGroup)

logGroup(
  'address',
  RMock('@region'),
  RMock('@province'),
  RMock('@city'),
  RMock('@district'),
  RMock('@address'),
  RMock('@address(RR PP CC DD)'),
)
logGroup(
  'address',
  RMock('@region'),
  RMock('@province'),
  RMock('@city'),
  RMock('@district'),
  RMock('@address'),
  RMock('@address(RR PP CC DD)'),
)
logGroup(
  'address',
  RMock('@region'),
  RMock('@province'),
  RMock('@city'),
  RMock('@district'),
  RMock('@address'),
  RMock('@address(RR PP CC DD)'),
)
logGroup(
  'address',
  RMock('@region'),
  RMock('@province'),
  RMock('@city'),
  RMock('@district'),
  RMock('@address'),
  RMock('@address(RR PP CC DD)'),
)
// console.log(RMock('@num|1,2'))
// console.log(RMock('@num(10,20)'))
// console.log(RMock('@num(-10,20)'))
// console.log(RMock('@num(-10,20)'))
// console.log(RMock('@num(-10,0)'))
// console.log(RMock('@uuid(xxyxxxyyy)'))
// console.log(RMock('@string(3,4)'))
// console.log(RMock('@uuid(xxx)'))
// console.log(RMock({ t: '@title(3,4)' }))
// console.log(RMock('@image64'))
// console.log(RMock('@image64(皮哥牛逼)'))
// console.log(RMock('@image64(晓峰也牛逼,400x400,30)'))
// console.log(RMock('@image(晓峰也牛逼,400x400,30)'))
// console.log(RMock('@image64(淋神牛逼,100,100)'))
// console.log(RMock('@image(文字,200x200,123,456,png)'))
0&&logs(
  'Time',
  RMock('@timeStamp'),
  RMock('@nowTimeStamp'),
  RMock('@now'),
  RMock('@now(YYYY-MM-DD HH:mm:ss)'),
  RMock('@date'),
  RMock('@date(YYYY-MM-DD)'),
  RMock('@date(YYYY-MM-DD HH:mm:ss)'),
  RMock('@time'),
  RMock('@time(HH:mm:ss)'),
  RMock('@time(YYYY-MM-DD HH:mm:ss)'),
)


// console.log(RMock('@num|1.1,2.3'))
// console.log(RMock('@num|1.1,2.3'))

0 && console.log(RMock({
  "value|2-4": {
    name: "@name"
  }
}));



0 && logGroup(
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
  logGroup(
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
  logGroup(
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
0 && logGroup(
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
