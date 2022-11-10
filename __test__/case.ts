import { Mock } from '../src'

// cases

export const cases = (index: string) => Mock({
	'key1': '@name',
	[`key2${index}`]: 1,
	[`key3${index}`]: '@name',
	[`key4${index}`]: true,
	[`key5${index}`]: false,
	[`key6${index}`]: 'str ',
	[`key800${index}`]: ['@name'],
	[`key801${index}`]: [true],
	[`key802${index}`]: [false, undefined, null, NaN],
	[`key810${index}`]: ['@name', 'b', 'c', 'd', true],
	[`key820${index}`]: [1],
	[`key900${index}`]: {
		a: '@name',
		b: 'b',
		c: 'c',
		d: 'd',
		e: 'e',
	},
	[`key1000${index}`]: function () {
		return `fn: key1: ${this.key1} `
	},
})