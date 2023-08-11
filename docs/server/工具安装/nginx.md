---
nav:
title: nginx安装
order: 3
---

## 使用yum安装

1、添加CentOS 7 Nginx yum资源库

```bash
rpm -Uvh  http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
```

2、安装nginx

```bash
yum -y install nginx
```

3、添加开机自启动

```bash
systemctl enable nginx
```

4、启动

```bash
nginx
```

5、重启

```bash
nginx -s reload
```

6、关闭

```bash
nginx -s stop
```

## 问题

1、nginx: [error] invalid PID number ““ in “/var/run/nginx.pid“

ps -aux | [grep](https://so.csdn.net/so/search?q=grep&spm=1001.2101.3001.7020) nginx （master的id）

echo 进程号 > /var/run/nginx.pid

2、主机无法访问nginx（虚拟机）

修改网络未桥接模式