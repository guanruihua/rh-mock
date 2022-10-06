import * as Random from '../random';
import { Template, BaseSupportObject } from '../type';
export declare function generateObject(template: BaseSupportObject): BaseSupportObject;
declare function RandomList(min: number, max: number): (template: Template) => any[];
declare function Mock(template: Template): any;
export { Random, RandomList, Mock };
export default Mock;
