# 描述

- 随机数据生成
- 拓展运算符 `&`, `&&`
- 只做数据生成, 减低耦合, 没有请求拦截

## 使用

```shell
npm install rh-mock
```

```js
import { Mock } from 'rh-mock'

Mock({"name|3":"@name"})
=>  { name: [ 'Christopher', 'Daniel', 'Richard' ] }
```

## 范围

- `name|2-222`

```js
Mock({"name|3-5":"@name"})
=> { name: [ 'Jeffrey', 'Jose', 'Gary', 'William' ] }
```

## 指定数量

> `name|12`

```js
Mock({"name|3":"@name"})
=>  { name: [ 'Christopher', 'Daniel', 'Richard' ] }
```

## `&`

- 多个字段使用同一个生成规则

### 给多个字段使用同一个生成规则

> `{'name&key1,key2,key3':'@name'}`

```js
{name: { key1: 'Mark', key2: 'Jason', key3: 'Thomas' }`}
```

### 生成多组

- `{'name&(2)key1,key2,key3': "@name"}`

```js
{
  name: [
    { key1: 'Mark', key2: 'Donald', key3: 'Michael' },
    { key1: 'George', key2: 'Jose', key3: 'Edward' },
  ]
}
```

### 指定数量组

- `{'name&(2-5)key1,key2,key3': "@name"}`

```js
{
  name: [
    { key1: 'Jason', key2: 'Kenneth', key3: 'Scott' },
    { key1: 'Mark', key2: 'Donald', key3: 'Michael' },
    { key1: 'George', key2: 'Jose', key3: 'Edward' },
  ]
}
```

## `&&`

- 转为字符串

### 转化字符串

- `{'name&&key1,key2,key3':'@name'}`

```js
{
  name: '{"key1":"Joseph","key2":"Michael","key3":"Jose"}'
}
```

### 指定数量组

- `{'name&&(2)key1,key2,key3': "@name"}`

```js
{
  name: '[{"key1":"Anthony","key2":"Eric","key3":"Edward"},{"key1":"Thomas","key2":"Eric","key3":"Edward"}]'
}
```

### 生成多组

- `{'name&&(2-5)key1,key2,key3': "@name"}`

```js
{ name: '{"key1":"James","key2":"Jeffrey","key3":"William"}' }
```

## 操作符

### 基础数据类型

|     操作符     |        描述        |     结果     |
| :------------: | :----------------: | :----------: |
|    `@char`     |        字符        |     `A`      |
|   `@boolean`   |       布尔值       |    `true`    |
|   `@string`    |       字符串       | `wg0DGEE1s[` |
| `@string(3,5)` | 指定范围长度字符串 |    `wg0D`    |
|     `@num`     |        数字        |     520      |
|  `@num(5,10)`  |    指定范围数字    |      5       |
|    `@float`    |       浮点型       |    13.14     |

### 名称

|  操作符   |     描述     |      结果 |
| :-------: | :----------: | --------: |
|  `@name`  |    英文名    | `Ruihuag` |
| `@cname`  |    中文名    |  `关瑞毕` |
| `@first`  | 英文名称的名 |  `Sandra` |
|  `@last`  | 英文名称的姓 |    `Jose` |
| `@cfirst` |    中文姓    |      `关` |
| `@clast`  |    中文名    |    `瑞毕` |

### 文本

> 待开发 自然段

|     操作符     |  描述  |                            结果                            |
| :------------: | :----: | :--------------------------------------------------------: |
|    `@title`    |  标题  |                         `土好保观`                         |
| `@title(3,30)` |  标题  | `传年圆美石所技道只式器知老引明说外海专性油复队运构科文重` |
|    `@cword`    | 中文字 |                            `厂`                            |

### 居住地址

| 操作                      | 描述           | 结果                                                  |
| :------------------------ | :------------- | :---------------------------------------------------- |
| `region`                  | 地区           | 西北                                                  |
| `province`                | 省             | 广东省                                                |
| `city`                    | 城市           | 韶关市                                                |
| `district`                | 区域           | 洮北区                                                |
| `address`                 | 地址           | 安徽省宣城市宣州区1d8街道6e路69号99栋36单元78号       |
| `address(RR PP CC DD AA)` | 地址(指定格式) | 东北 山西省 吕梁市 汾阳市 1c街道e路83号17栋92单元61号 |

 补充:

- `RR`: 地区  
- `PP`: 省
- `CC`: 城市
- `DD`: 地区
- `AA`: 地址

### 其他地址

| 操作        | 描述    | 结果                                    |
| :---------- | :------ | :-------------------------------------- |
| `@ip`       | ip      | 242.86.47.174                           |
| `@ip()`     | ip      | 136.205.48.82                           |
| `@ip6()`    | ipv6    | e60b:3d50:be5c:ea37:3005:8a35:846e:1aeb |
| `@domain`   | web地址 | opubztw.xxq                             |
| `@domain()` | web地址 | npint.tjx                               |
| `@email`    | 邮箱    | cxydhhsfxqzki@nipik.ftnyl               |
| `@email()`  | 邮箱    | cxydhhsfxqzki@nipik.ftnyl               |

### 颜色

- 待开发
- color, hex, rgb, rgba, hsl

### 图片

#### `@image([text[,size[,background[,foreground[,format]]]]])`

- 图片链接
- `text = ''`: 文字
- `size = '200x200'` :图片大小
- `background = '000'`: 背景图片
- `foreground = 'fff'`: 文字颜色
- `format: '' | 'png' | 'gif' | 'jpg' = ''` : 图片格式

#### 时间

|操作符|描述|结果|
|:----|:----|:----|
|`@now`| 现在 | `2022-06-08 16:58:16`
|`@now(YYYY-MM-DD HH:mm:ss)`| 现在 | `2022-06-08 16:58:16`
|`@date`| 随机日期 | `2021-09-27`
|`@date(YYYY-MM-DD)`| 随机日期 | `2022-03-28`
|`@date(YYYY-MM-DD HH:mm:ss)`| 随机日期 | `2020-03-24 22:58:16`
|`@time`| 随机时间 | `22:58:16`
|`@time(HH:mm:ss)`| 随机时间 | `04:58:16`
|`@time(YYYY-MM-DD HH:mm:ss)`| 随机时间 | `2020-06-27 22:58:16`
|`@timeStamp`| 随机时间戳 | `1604703768135`
|`@nowTimeStamp`| 当前时间时间戳 | `1604703768135`

### 特殊

|                    操作符                     | 描述  |                  结果                  |
| :-------------------------------------------: | :---: | :------------------------------------: |
|                     `@id`                     |  id   |           `3191230364936506`           |
|                    `@uuid`                    | uuid  | `326be748-57bd-c2d0-84f4-99bb488a4292` |
| `@uuid(xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx)` | uuid  | `326be748-57bd-c2d0-84f4-99bb488a4292` |

## 更新日志

- 1.2.0 添加时间的生成
- 1.1.0 添加图片的生成
- 1.0.0 正式版 方法名改成 Mock, 只做数据生成
- 0.1.5 修复dist.json文件缺失问题
- 升级内部使用工具包 "rh-js-methods": "^0.0.13" => "1.0.3"
