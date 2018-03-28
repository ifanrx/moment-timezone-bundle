# moment-timezone-bundle

`moment-timezone-bundle` 库用于在 `webpack` 打包时替换原版 `moment` 库

## 构建
> npm run build

构建完成会在 `lib/` 目录下生成2个版本，两者区别在于是否打包了原版 `moment` 库中 `locale/*` 下的国际化翻译，默认使用 `without-locale.js`

## 使用方式
在 webpack.config.js 中增加 alias 配置，注意不能删除 moment 后的 `$`，因为有些库（antd 的 DatePicker）会引用 `moment/locale/zh_CN.js`

```js
resolve: {
    alias: {
      moment$: 'moment-timezone-bundle',
    },
  }
```

