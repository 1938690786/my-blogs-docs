---
nav:
title: 配置
order: 2
---

## 配置 ESLint

主要有两个配置 ESLint 的方法

- 1.配置注释 - 在文件中使用js注释直接嵌入配置信息

- 2.配置文件 - 使用javascript、json或yaml文件指定整个目录及其所有子目录的配置信息。可以是.eslintrc.*文件，也可以是package.json文件中的eslintConfig字段

下面列出了一些 ESLint 中可配置的选项：

`环境` - 你的脚本被设计为在哪些环境下运行。每个环境都会附带一组预设的全局变量。

`全局变量` - 脚本在执行过程中需要用到的额外全局变量。

`规则` - 启用了哪些规则，它们又是什么级别错误水平

`插件` - 第三方插件为 ESLint 定义了额外的规则、环境、配置等。

所有这些选项使得你可以对 ESLint 处理代码的模式进行精准控制。

