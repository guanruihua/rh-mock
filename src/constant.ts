const Constant = {
	GUID: 1,
	RE_KEY: /(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,
	RE_Object_KEY: /(.+)&(.+,)?/,
	RE_Object_str_KEY: /(.+)&&(.+,)?/,
	RE_RANGE: /([\+\-]?\d+)-?([\+\-]?\d+)?/,
	RE_PLACEHOLDER: /\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g,
}

export default Constant;