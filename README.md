## js的原型和原型链
[js的原型和原型链](https://www.jianshu.com/p/be7c95714586)

## js构造函数
[js构造函数](https://www.cnblogs.com/honkerzh/p/10270624.html)

## js中call()、 apply()、 bind()
[call()、 apply()、 bind()：都是用来重定义this這个对象的，调用一个对象的一个方法，用另一个对象替换当前对象](https://blog.csdn.net/weixin_42321292/article/details/82352997)

## js继承
[js继承：原型链继承、构造函数继承、实例继承、es6继承](https://zhuanlan.zhihu.com/p/37735247)

## js数据类型
```
js常用的基本数据类型包括undefined、null、number、boolean、string、Symbol。Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。
引用数据类型：对象(Object)、数组(Array)、函数(Function)。
```

## js类型转换
> 转数字
```
parseInt()：parseInt('10abc') 值为10
Number()：Number('10abc') 值为NaN
```
> 转字符串
```
1、toString不能转null，undefined
2、String
```

## js闭包
1. 闭包函数是指有权访问另一个函数作用域中的变量的函数
```
function fun1() {
	var sum=0;
	function fun2() {
		sum++;
		return sum
	}
	return fun2
}
var s=fun1();
console.log(s());
```

## js递归
1. 函数在其定义或说明中有直接或间接调用自身的一种方法；通俗点就是自身调用自己。
```
利用递归实现1到100以内的求和：
var sums = 0;
function sum(n) {
	if (n > 0) {
		sums = sums + n
	}
}
for (var i=0; i<=100; i++) {
	sum(i)
}
console.log(sums)
```

## js常用方法
1. slice()：方法从已有的数组中返回选定的元素；提取字符串的某个部分，并以新的字符串返回被提取的部分。不会改变原始数组。
2. splice(start,num,item1,item2…..)：添加或删除数组中的元素。会改变原始数组。
3. substr(start,length)：可在字符串中抽取从 start 下标开始的指定数目的字符。原字符串不变。注：字符串中空格不占位置。
4. substring(begin,end)：返回字符串的子字符串，原字符串不变。
5. pop()：删除并返回数组的最后一个元素。
6. push()：将参数添加到数组的最后，返回新数组的长度。
7. shift()：删除并返回数组的第一个参数。
8. unshift()：向数组的开头添加一个或更多的元素，返回新数组的长度。
9. join()：将数组切割成字符串，原字符串不变。
10. split()：把字符分割成数组，原字符串不变。

## js dom操作
1. 节点查找
```
document.getElementById ：根据ID查找元素
document.getElementsByClassName ：根据类名查找元素，多个类名用空格分隔
document.getElementsByTagName ：根据标签查找元素
document.getElementsByName ：根据元素的name属性查找
document.querySelector ：返回文档中匹配指定 CSS 选择器的一个元素，返回单个Node
document.querySelectorAll ：返回一个 NodeList
```
2. createElement创建节点
```
var elem = document.createElement("div");  
elem.id = 'haorooms';  
elem.style = 'color: red';  
elem.innerHTML = '我是新创建的节点';  
document.body.appendChild(elem);  
```
3. createTextNode创建文本节点
```
var node = document.createTextNode("我是文本节点");  
document.body.appendChild(node); 
```
4. cloneNode 克隆一个节点：node.cloneNode(true/false) ，它接收一个bool参数，用来表示是否复制子元素。
```
var from = document.getElementById("test");  
var clone = from.cloneNode(true);  
clone.id = "test2";  
document.body.appendChild(clone);
```
5. 节点修改
```
appendChild
insertBefore：node.insertBefore(newnode,existingnode) // 在node节点的子节点前插入一个新的子节点
removeChild：删除指定的子节点并返回子节点
replaceChild
```
6. 节点关系
```
父关系：parentNode 
子关系：children、childNodes、firstChild、lastChild 
```
7. 元素属性型API
```
setAttribute 给元素设置属性：element.setAttribute("type", "button"); 
getAttribute 返回属性值： element.getAttribute("id")；
removeAttribute
hasAttribute：是否有属性
dataset：获取html data-开头的属性：el.dataset.user
```
8. 样式相关API
```
1、直接修改元素的样式：elem.style.color = 'red';
2、classList获取样式class：
		（1）div.classList.remove("foo");   div.classList.remove("foo", "bar", "baz");
		（2）div.classList.add("foo");   div.classList.add("foo", "bar", "baz");
		（3）div.classList.toggle("foo"); // 有则删除class，没有则添加
		（4）div.classList.contains("foo"); 是否有class
		（5）div.classList.replace("foo", "bar");
3、element.style 读取的只是元素的内联样式，即写在元素的 style 属性上的样式
4、getComputedStyle 读取的样式是最终样式，包括了内联样式、嵌入样式和外部样式。
5、使用 getComputedStyle 读取样式，通过 element.style 修改样式。
6、getComputedStyle用法： let my_div = document.getElementById("myDiv");
	  let style = window.getComputedStyle(my_div, null);
```

## jquery
1. 属性
```
获取：$("a").attr("onclick");
删除：$("a").removeAttr("onclick");
设置属性：$("a").attr("onclick","test();");
```
2. class
```
$(selector).addClass(class);
$(selector).removeClass(class);
$(selector).toggleClass(class);
$(selector).removeAttr(class);
```

## es6语法
[es6语法](http://caibaojian.com/es6/string.html)

## es6扩展运算符...
> 返回的是每一项：var args = [0, 1, 2]  ，  ...args为0， 1， 2， [...args]为[0, 1, 2]

## es6 promise
异步编程的一种解决方案，它有三种状态(进行中，已完成，已失败)。可用then()指定resolved和reject状态的回调函数。可以采用链式写法

## es6 新的数据结构Set
1. 它类似于数组，但是成员的值都是唯一的，没有重复的值。
2. 数组去重：[...new Set(array)]
3. Array.from方法可以将Set结构转为数组：Array.from(new Set([1, 2, 3, 4, 5]));
4. Set实例的方法分为两大类：第一类是操作方法（用于操作数据）
* add(value)：添加某个值，返回Set结构本身。
* delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
* has(value)：返回一个布尔值，表示该值是否为Set的成员。
* clear()：清除所有成员，没有返回值。
5. 第二类是遍历方法：
* keys()：返回键名的遍历器
* values()：返回键值的遍历器
* entries()：返回键值对的遍历器
* forEach()：使用回调函数遍历每个成员
6. 使用Set可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）
```
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}
// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```

## es6 新的数据结构Map
1. Object传统上只能用字符串当作键，Map不是。

## es6 async
1. async函数返回一个Promise对象。
```
async function f() {
  return 'hello world';
}
f().then(v => console.log(v))
// "hello world"
```

## es6 Class(构造函数)
1. constructor：默认返回实例对象（即this），完全可以指定返回另外一个对象。Class不存在变量提升。
2. Class的继承：通过extends关键字继承。子类没有自己的this对象，子类通过调用super方法，继承父类的this对象。

## es6 模块（module）体系
1. 模块功能主要由两个命令构成：export和import。
```
// ES6模块
import { stat, exists, readFile } from 'fs';
```

2. 需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
```
// 下面两个报错，因为没有提供对外的接口。第一种写法直接输出1，第二种写法通过变量m，还是直接输出1。1只是一个值，不是接口。
export 1;
var m = 1;
export m;
```
正确的写法：
```
// 写法一
export var m = 1;
// 写法二
var m = 1;
export {m};
// 写法三
var n = 1;
export {n as m};
```

## es6 let const
1. let 取代 var，var命令存在变量提升效用，let命令没有，只在let命令所在的代码块内有效。
2. const声明一个只读的常量。一旦声明，常量的值就不能改变。

## vue
1. MVVM是Model-View-ViewModel的简写，模型-视图-视图模型。【模型】指的是后端传递的数据。【视图】指的是所看到的页面。【视图模型】mvvm模式的核心，它有两个方向：一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。这两个方向都实现的，我们称之为数据的双向绑定。
2. vue的双向绑定是由数据劫持结合发布者－订阅者模式实现的。通过Object.defineProperty()来劫持对象属性的setter和getter，在数据变动的时候发布消息给订阅者，触发相应的监听回调。
* 数据监听器Observer，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者
* 指令解析器Compile，对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数
* Watcher，作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应回调函数，从而更新视图
3. vue优势：Vue很灵活，他们的库可以和各种包搭配。用于状态管理的 Vuex、用于应用程序 URL 管理的 Vue Router、Vue 服务器端渲染、组件化开发、数据双向绑定。
4. Vue.nextTick(callback)：当数据发生变化，更新后执行回调。
5. Vue.$nextTick(callback)：当dom发生变化，更新后执行的回调。
6. vue 自定义指令
```
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```
```
// 局部指令
directives:{
	focus:{
		inserted: function (el) {
			el.focus()
		}      
	}
}
```
7. vue组件通信
```
1、props和$emit()
父组件向子组件传值：props；
子组件向父组件传值：$emit()
.
2、$emit和$on
var Event = new Vue(); // 创建一个空的vue实例
Event.$emit(事件名, 数据); // 组件发送数据
Event.$on(事件名, data => {}); // 组件接受数据
.
3、vuex
state存储数据；getter获取数据；mutation同步修改数据(commit())；action异步修改数据(dispatch())
.
4、$refs、$parent、$children
父组件访问子组件方法或数据：this.$refs.child
```

## css3动画
> @keyframes 规则和animation
1. animation：规定动画属性，比如定义动画的名称和时长。
2. @keyframes：用于创建动画