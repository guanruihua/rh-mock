// import { stringToString } from './type'
import { Template } from 'type';
import Handler from './handler'
import Random from './random'
import Util from './util'

const _mock = {
	mock: function (template: Template): Template {
		return Handler.generate(template);
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