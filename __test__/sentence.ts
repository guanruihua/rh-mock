import { Mock } from '../src'
import { logGroup } from 'rh-js-methods'

logGroup('sentence',
	Mock('@sentence'),
	Mock('@sent(2)'),
	Mock('@sentence(2)'),
	Mock('@sentence(3)'),
	Mock('@sentence(4)'),
)