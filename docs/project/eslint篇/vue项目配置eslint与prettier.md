---
nav:
title: vue项目配置eslint与prettier
order: 7
---

# vue 项目配置 eslint 与 prettier

## 基本概念

eslint 是一个代码检查工具，帮助发现并修复 javascript 代码中的问题。问题指`运行时漏洞`、`未使用最佳实践`、`风格问题`等

prettier 是一个代码风格工具，Prettier 可以在整个代码库中执行一致的代码风格

## 如何搭配使用?

eslint 可以检测代码中问题，prettier 可以检测代码风格，要搭配简单一句话就是要将 prettier 检测到的代码风格问题给到 eslint 去指出

## 安装使用

1、既然是配置 eslint 和 prettier，第一步就是安装这两个插件

```shell
yarn add eslint prettier -D
```

- eslint 配置
  创建 .eslintrc.\* 配置文件
  例如：.eslintrc.js

```javascript
module.exports = {
  extends: [],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
```

- prettier 配置 例如：.prettierrc

```javascript
{
  "tabWidth": 4,
  "trailingComma": "none",
  "endOfLine": "auto",
  "semi": true,
  "printWidth": 120,
  "singleQuote": false
}
```

2、当前开发环境是 vue，那就需要将安装相应的插件，官方推荐插件 eslint-plugin-vue

yarn add eslint-plugin-vue -D

配置.eslintrc.js 中 parser 字段 vue-eslint-parser 是 eslint-plugin-vue 的依赖包不用安装

- parser: "vue-eslint-parser"

这样配置就已经完成了，但是还是有一些基础配置要添加，如下

```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "vue/multi-word-component-names": 0,
  },
};
```
