import { Template } from '../type';
export interface RuleType extends Record<string, any> {
    name: string;
    valueType: string;
    rule?: string;
    min?: number;
    max?: number;
    dmin?: number;
    dmax?: number;
    count?: number;
    random?: boolean;
    multKey?: string[];
    handler?: any;
    _this: any;
}
export declare function getRuleType(key: string, template: Template): RuleType;
