import { Template } from 'type';
declare const _mock: {
    mock: (template: Template) => Template;
    Handler: {
        [key: string]: any;
    };
    Random: typeof import("./random/name") & typeof import("./random/basis") & typeof import("./random/text") & typeof import("./random/address");
    Util: {
        [key: string]: any;
    };
    _mocked: {};
};
export default _mock;
