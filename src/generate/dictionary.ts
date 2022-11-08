export const dictionary = new Map()

export function initDictionary(row: Record<string, any>) {
	for (const key in row) {
		dictionary.set(key, row[key])
	}
}


