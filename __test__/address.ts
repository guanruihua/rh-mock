import { Mock as RMock } from '../src'
import { logGroup } from 'rh-js-methods'

logGroup(
  'address',
  // RMock('@ip'),
  // RMock('@ip()'),
  // RMock('@ip6()'),
  RMock('@url()'),
  // RMock('@domain'),
  // RMock('@domain()'),
  // RMock('@email()'),

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
logGroup(
  'address',
  RMock('@region'),
  RMock('@province'),
  RMock('@city'),
  RMock('@district'),
  RMock('@address'),
  RMock('@address(RR PP CC DD)'),
)