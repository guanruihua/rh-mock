export declare type BaseSupportType = string | number | boolean | undefined | null | never | unknown;
export declare type BaseSupportArray = (BaseSupportType | BaseSupportObject)[];
export declare type BaseSupportObject = {
    [key: string]: BaseSupportType | BaseSupportArray | BaseSupportObject;
};
export declare type tRule = {
    key: string;
    min?: number;
    max?: number;
    count?: number;
    range?: any[];
};
export declare type Template = BaseSupportType | BaseSupportArray | BaseSupportObject;
export declare type tContext = {
    type: string;
    template: Template;
    name: string;
    rule?: tRule;
    context?: tContext;
};
export interface iHandler {
    generate: (template: Template) => Template;
    generateChooseOne: (template: Template) => Template;
    generateString: (template: string) => Template;
    generateObject: (template: {
        [key: string]: any;
    }) => Template;
}
export declare type nullToVoidFn = () => void;
export declare type nullToStringFn = () => string;
export declare type nullToNumberFn = () => number;
export declare type stringToString = (value: string) => string;
export declare type anyToNumberFn = (value: any) => number;
export declare type anyToStringFn = (value: any) => string;
