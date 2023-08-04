---
nav:
title: 入门篇
order: 1
---

快捷生成html文件：html:5

## 一、安装 
    yarn add webpack webpack-cli --dev

## 二、根目录创建webpack.config.js文件 

    // 使用nodejs的模块化方法
    module.exports = { mode: 'development', entry: '入口文件' }

## 三、安装对应loader处理不同文件

### 1、处理css文件

    // 安装 
    yarn add style-loader css-loader --dev

在config文件下的module中配置

    module: {
        rules: [
            {
                test: /\.css$/i
                use: ['style-loader', 'css-loader']
            }
        ]
    }

### 2、处理图片 webpack原生支持，只用配置就好

同处理css文件的方法在config下的module新增

    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i
        type: 'asset/resource'
    }
### 3、处理html文件

    // 安装 
    yarn add html-webpack-plugin --dev

    // 导入
    const HtmlWebpackPlugin = requires('html-webpack-plugin')

使用：在module同级下的plugins添加,如下

    plugins: [new HtmlWebpackPlugin()]

### 4、使用了新的js特性，需转移成es5代码格式

    // 安装
    yarn add --dev babel-loader @babel/core @babel/preset-env

同1、2在rulus添加规则

    {
        test: /\.js$/i
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
    }

如果要查看打包后的代码可以在配置项的根元素下配置devtools: 'inline-source-map' 生成source文件，方便查看

### 5、压缩代码

    // 安装
    yarn add --dev terser-webpack-plugin

    // 导入
    const TerserPlugin = require('terser-webpack-plugin')

使用：在配置文件根元素下配置

    optimezation: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    }

6、启动开发服务器

    // 安装
    // yarn add --dev webpack-dev-server

使用：在配置文件根元素下新增devServer配置项

    devServer: {
        static: './dist' // 指定启动路径
    }
在package.json中新增scripts

    'start': 'webpack serve --open'

7、配置导入别名

在配置文件根元素下配置

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }

8、文件分析

    // 安装
    yarn add webpack-bundle-analyzer --dev

    // 导入
    const BundleAanalyzerPlugin = require('webpack-bundle-analyzer').BundleAanalyzerPlugin

在pligins中添加

    new BundleAanalyzerPlugin()

打包完成后会自动打开浏览器展示分析内容