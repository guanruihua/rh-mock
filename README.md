# 描述

> 参考 mock 库
> 拓展 一些 自己常用 而 mock 没有的使用方法
> 拓展运算符 `&`, `&&`
> 本仓库主要是学习使用

## 功能

### {'name&key1,key2,key3':'@name'}

```js
{name: { key1: 'Mark', key2: 'Jason', key3: 'Thomas' }`}
```

### {'name&(2)key1,key2,key3': "@name"}

```js
{
  name: [
    { key1: 'Mark', key2: 'Donald', key3: 'Michael' },
    { key1: 'George', key2: 'Jose', key3: 'Edward' },
  ]
}
```

### {'name&(2-5)key1,key2,key3': "@name"}

```js
{
  name: [{ key1: 'Jason', key2: 'Kenneth', key3: 'Scott' }]
}
```

### {'name&&key1,key2,key3':'@name'}

```js
{
  name: '{"key1":"Joseph","key2":"Michael","key3":"Jose"}'
}
```

### {'name&&(2)key1,key2,key3': "@name"}

```js
{
  name: '[{"key1":"Anthony","key2":"Eric","key3":"Edward"},{"key1":"Thomas","key2":"Eric","key3":"Edward"}]'
}
```

### {'name&&(2-5)key1,key2,key3': "@name"}

```js
{ name: '{"key1":"James","key2":"Jeffrey","key3":"William"}' }
```
