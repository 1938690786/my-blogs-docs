---
nav:
title: Git安装
order: 2
---

## 1、安装

    yum install git

## 2、设置git账户

    git config --global user.name "xxxx"    //xxx为你的用户名
    git config --global user.email xxxx@xx.com     //xxx为你的邮箱

### 查看你的参数信息

    git config --list

## 3、生成秘钥

    $ ssh-keygen -t rsa -C xxxx@xx.com    //xxx为你的邮箱

## 4、查看秘钥

    cat ~/.ssh/id_rsa.pub