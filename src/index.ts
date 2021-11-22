import { stringToString } from './type'
import Handler from './handler'
import Random from './random'
import Util from './util'

const _mock = Object.assign(
	{
		mock: function (template: any,
			// rtype, template
		): any {

			// _mock.mock(template)
			if (arguments.length === 1) return Handler.generate(template);

			// _mock.mock(rurl, template)
			// if (arguments.length === 2) {
			// 	template = rtype;
			// 	rtype = undefined;
			// }

			// 拦截 XHR ( 后续再制作 )
			// if (XHR) window.XMLHttpRequest = XHR
			// _mock._mocked[rurl + (rtype || '')] = {
			// 	rurl: rurl,
			// 	rtype: rtype,
			// 	template: template
			// }

			return _mock;
		},
		Handler,
		Random,
		Util,
		// XHR,
		// RE,
		// toJSONSchema,
		// valid, //valid(template, data) 验证真实数据 是否与数据模板匹配
		// heredoc: Util.heredoc,
		// setup: function (settings) {
		// 	return XHR.setup(settings)
		// },
		_mocked: {}
	}
)

/*
		* _mock.mock( template )
		* _mock.mock( function() )
		* _mock.mock( rurl, template )
		* _mock.mock( rurl, function(options) )
		* _mock.mock( rurl, rtype, template )
		* _mock.mock( rurl, rtype, function(options) )
	 
		数据模板 => 模拟数据
*/


export default _mock;