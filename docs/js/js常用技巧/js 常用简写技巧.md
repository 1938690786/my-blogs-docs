---
nav:
title: js 常用简写技巧
---

# js 常用简写技巧

## 逻辑或操作符`||`，如果||前面的值是 `0 '' false null undefined NaN` 其中的任意一种，则直接返回`||`后面的值

```javascript
function(obj){
  var a = obj || {}
}
// 等价于 =>>
function(obj){
  var a;
  if(
    obj === 0 ||
    obj === "" ||
    obj === false ||
    obj === null ||
    obj === undefined ||
    isNaN(obj)
  ){
     a = {}
   } else {
     a = obj;
  }
}
```

## 空值合并操作符`??`如果没有定义左侧返回右侧。如果是，则返回左侧

```javascript
function(obj){
  var a = obj ?? {}
}
// 等价于 =>>
function(obj){
  var a;
  if(
    obj === null ||
    obj === undefined
  ){
     a = {}
   } else {
     a = obj;
  }
}
```

输入框非空的判断（有时候不想把 0 当成 false 可以用此方法。比如分数 0 也是个值，这种情况就不能认为是 false）

```javascript
if (value !== null && value !== undefined && value !== "") {
}
// 等价于 ==>
if ((value ?? "") !== "") {
}
```

## `includes` 的正确使用姿势

在上面逻辑或操作符||代码段里有一个 if 判断比较长，这时候就可以用 includes 去简化代码

```javascript
if (
  obj === 0 ||
  obj === "" ||
  obj === false ||
  obj === null ||
  obj === undefined
) {
  // ...
}

// 使用includes简化
if ([0, "", false, null, undefined].includes(obj)) {
  // ...
}
```

## 防止崩溃的可选链(?.)

`可选链操作符?. `如果访问未定义的属性，则会产生错误。这就是可选链的用武之地。 在未定义属性时使用可选链运算符，undefined 将返回而不是错误。这可以防止你的代码崩溃。

```javascript
const student = {
  name: "lwl",
  address: {
    state: "New York",
  },
};

// 一层一层判断
console.log(student && student.address && student.address.ZIPCode); // 输出：undefined
// 使用可选链操作符
console.log(student?.address?.ZIPCode); // 输出：undefined
```

## 逻辑空赋值(??=)

逻辑空赋值`??=` 逻辑空赋值运算符`(x ??= y)`仅在 x 是 nullish (null 或 undefined) 时对其赋值

```javascript
const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration);
// expected output: 50

a.speed ??= 25;
console.log(a.speed);
// expected output: 25
```

## 快速生成 1-10 的数组

```javascript
// 方法一
const arr1 = [...new Array(10).keys()];
// 方法二
const arr2 = Array.from(Array(10), (v, k) => k);
```

## 快速生成 10 个 0 的数组

```javascript
const arr = new Array(10).fill(0);
```

## 快速生成 10 个[]的数组（二维数组）

注意： 二维数组不能直接写成 new Array(10).fill([])（也就是 fill 方法不能传引用类型的值，[]换成 new Array()也不行）,因为 fill 里传入引用类型值会导致每一个数组都指向同一个地址，改变一个数据的时候其他数据也会随之改变，详见 mdn 官方说明

```javascript
// 错误写法
const arr = new Array(10).fill([]); // 注意这是错误写法，不要这么写
// 正确写法
const arr = new Array(10).fill().map(() => new Array());
```

## Set 集合实践：数组去重、交集、并集、差集

```javascript
// 1.数组去重
let arr1 = [1, 3, 2, 1, 4, 2, 1];
let result1 = [...new Set(arr1)];
console.log(result1); // [1, 3, 2, 4]

// 2.交集
let arr2 = [4, 3, 4, 7];
let result2 = [...new Set(arr1)].filter((v) => new Set(arr2).has(v));
console.log(result2); // [3, 4]

// 3.并集
let result3 = [...new Set([...arr1, ...arr2])];
console.log(result3); // [1, 3, 2, 4, 7]

// 4.差集
let result4 = [...new Set(arr1)].filter((v) => !new Set(arr2).has(v));
console.log(result4); // [1, 2]
```
