## js的原型和原型链
[js的原型和原型链](https://www.jianshu.com/p/be7c95714586)
```
每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，
每一个对象都会从原型"继承"属性。每个原型都有一个 constructor 属性指向关联的构造函数 实例原型指向构造函数。
声明一个函数时，浏览器会自动创建一个对象，而且每个函数都会有一个属性 prototype 指向了这个对象，对象就叫做原型对象。
每个对象都会在内部生成一个proto 属性，当我们访问一个对象属性时，如果这个对象不存在就回去proto 指向的对象里面找，一层一层找下去，这就是javascript原型链
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
```

## js构造函数
[js构造函数](https://www.cnblogs.com/honkerzh/p/10270624.html)
```
通过 new 函数名 来实例化对象的函数叫构造函数。任何的函数都可以作为构造函数存在。
构造函数的主要 功能为 初始化对象
```


## js中call()、 apply()、 bind()
[call()、 apply()、 bind()：都是用来重定义this這个对象的，调用一个对象的一个方法，用另一个对象替换当前对象。三个第一个参数都是this的指向对象；至于第二个，apply所有参数都是在一个数组，call和bind则不是](https://blog.csdn.net/weixin_42321292/article/details/82352997)
```
B.apply(A, arguments);即A对象应用B对象的方法
B.call(A, args1,args2);即A对象调用B对象的方法
B.bind(A, args1,args2)();即A对象调用B对象的方法，bind除了返回是函数以外，它的参数和call一样。
```

## null和undefined
null： Null类型，代表“空值”，代表一个空对象指针，使用typeof运算得到 “object”。undefined：Undefined类型，变量被声明了，但没有赋值时，就等于undefined。
null转为数值时为0;undefined转为数值时为NaN。
```
console.log(null==undefined)//true
console.log(null===undefined)//false
```

## js继承
[js继承：原型链继承、构造函数继承、实例继承、es6继承](https://zhuanlan.zhihu.com/p/37735247)
1. 原型链继承
```
function Woman(){
}
Woman.prototype= new People();
Woman.prototype.name = 'haixia';
let womanObj = new Woman();
```
2. 构造函数继承(call, apply, bind)
```
function Woman(name){
 //继承了People
  People.call(this); //People.call(this，'wangxiaoxia');
  this.name = name || 'renbo'
}
let womanObj = new Woman();
```
3. class类继承(es6继承是使用关键字先创建父类的实例对象this，最后在子类class中修改this)
```
class People{
  constructor(name='wang',age='27'){
    this.name = name;
    this.age = age;
  }
  eat(){
    console.log(`${this.name} ${this.age} eat food`)
  }
}
//继承父类
class Woman extends People{
   constructor(name = 'ren',age = '27'){
     //继承父类属性
     super(name, age);
   }
    eat(){
     //继承父类方法
      super.eat()
    }
}
let wonmanObj=new Woman('xiaoxiami');
wonmanObj.eat();
```

## margin塌陷合并
```
兄弟元素：实际取的是margin较大的。解决办法：只给一个元素加margin。
父子元素：子元素margin时，当父元素没有设置内边距或边框,以及触发BFC时,如果子元素的值大于父元素时，它会带着父元素一起偏移。
					解决：BFC解决（将父元素设置成块级格式化上下文）：overflow：hidden;(触发BFC：float，absolute/fixed，inline-block，overflow：除了visible以外的值)
```

## position
```
position: relative;相对定位：不会使元素脱离文档流，相对于自身原本位置进行偏移
position: absolute;绝对定位：使元素完全脱离文档流，相对于最近一个有定位的父元素偏移
position: fixed;固定定位：相对于浏览器窗口进行定位
```

## js数据类型
```
js常用的基本数据类型包括undefined、null、number、boolean、string、Symbol。Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。
引用数据类型：对象(Object)、数组(Array)、函数(Function)。
获取js数据类型：
typeof（只有原始数据类型）
Object.prototype.toString.call(str)
myArray.constructor.toString().indexOf("Array")
arr instanceof Array // 用来判断 A 是否为 B 的实例，返回true或false
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

## 事件代理（事件委托）
事件委托是指将事件绑定到目标元素的父元素上，利用冒泡机制触发该事件

## 同源策略
协议，域名，端口相同，同源策略是一种安全协议。

## get、post区别
> 1. get传参方式是通过地址栏URL传递，psot将参数存放在HTTP的包体内
> 2. get传递数据是通过URL进行传递，有长度限制

## 跨域解决
> 1. jsonp：动态插入script标签，通过script标签引入一个js文件，这个js文件载入成功后会执行我们在url参数中指定的函数，并且会把我们需要的json数据作为参数传入。
> 2. vue跨域解决：proxyTable：target为后端请求地址，pathRewrite重写地址。

## 创建ajax过程
> 创建XMLHttpRequest对象、创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息、
> 设置响应HTTP请求状态变化的函数、发送HTTP请求、获取异步调用返回的数据、页面数据渲染。

## 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么
> 浏览器地址栏输入url；浏览器会先查看缓存，存在的话直接显示；不存在的话，会先DNS解析获取IP，然后向服务器发起TCP连接，进行tcp三次握手；握手成功后，浏览器向服务器
> 发送http请求；服务器返回数据；页面接收数据，进行页面数据渲染。
```
三次握手：浏览器向服务器发送想要连接这个请求（我想认识你）;服务器返回同意连接的信号（可以啊）；浏览器接收到信号后，发送确认信号。
```

## 前端安全性
> 1. 使用token
> 2. 前端信息加密

## 性能优化
> 1. 图片懒加载
> 2. 图标使用雪碧图
> 3. 样式表放在页面顶部，js文件放在底部。尽量减少table（table会等其内容加载完才会显示）
> 4. 减少dom操作，减少http请求。

## sessionStorage、localStorage、cookie
> 1. sessionStorage用于存储的数据只在当前会话中存在，会话结束数据销毁；
> 2. localStorage持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的；
> 3. cookie可设置过期时间，有大小限制

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
遍历A节点的父节点下的所有子节点：document.getElementById("a").parentNode.children
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
3. window.onload与$(document).ready()区别
```
$(document).ready()：是在 html 所有标签(DOM)都加载之后，就会去执行，可执行多次；
window.onload：等到所有内容，包括外部图片之类的文件加载完后，才会执行，只可一次，第二次会覆盖第一次
```
4. jquery选择器
```
id 选择器、class 选择器、元素选择器、层次选择器
```
5. attr 和 prop 的区别
```
对于 HTML 元素本身就带有的固有属性，在处理时，使用 prop 方法.
对于 HTML 元素我们自己自定义的 DOM 属性，在处理时，使用 attr 方法
```
6. jquery添加元素
```
append() - 在被选元素的结尾插入内容
prepend() - 在被选元素的开头插入内容
after() - 在被选元素之后插入内容
before() - 在被选元素之前插入内容
```
7. jquery删除元素
```
$("#div1").remove();删除被选元素（及其子元素）
$("p").remove(".italic");删除被选元素（及其子元素），除了class为italic的
$("#div1").empty();删除被选元素的子元素
```
8. jquery遍历
```
1. 祖先
parent() 方法返回被选元素的直接父元素。
parents() 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)
$("span").parents("ul");返回所有 <span> 元素的所有祖先，并且它是 <ul> 元素

2. 后代
$("div").children();方法返回被选元素的所有直接子元素。
$("div").children("p.1") 返回类名为 "1" 的所有 <p> 元素，并且它们是 <div> 的直接子元素
$("div").find("span") 返回属于 <div> 后代的所有 <span> 元素
$("div").find("*") 返回 <div> 的所有后代

3. 同胞
siblings() 方法返回被选元素的所有同胞元素
next() 、prev()方法返回被选元素的下（上）一个同胞元素
nextAll()、prevAll() 方法返回被选元素的所有跟随（前面）的同胞元素
nextUntil()、prevUntil() 返回介于两个给定参数之间的所有跟随的同胞元素

4. 遍历
first()、last()、eq()、filter()、not()
```
9. $ 符号是 jQuery 的简写
```
var jq = $.noConflict() // 可用jq代替$
```

## es6语法
[es6语法](http://caibaojian.com/es6/string.html)

## es6扩展运算符超引用...
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
* 数据监听器Observer，对每个vue中的data中定义的属性循环用Object.defineProperty()实现数据劫持
* 通过Compile来解析编译模板指令（vue中是用来解析 {{}}）
* Watcher，作为连接Observer和Compile的桥梁，达到数据变化 —>视图更新；视图交互变化（input）—>数据model变更双向绑定效果
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
8. vue路由
```
hash模式：依靠的是onhashchange()事件去监听location.hash的改变。
比如这个 URL：http://www.aaa.com/#/hello，hash 的值为 #/hello。
它的特点在于：hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
```
```
history模式：相对hash而言，不会显示#号，但是需要服务器端配置
```
9. $route和$router的区别
```
$route是路由信息对象，包括path、params、query、meta、name等路由信息参数，可以通过$route来获取当前路由的各种参数
$router是路由实例对象，包含的是方法以及配置属性
```
10. assets和static/public的区别
```
在assets目录下的静态资源会被webpack解析成资源模块依赖，在项目打包的时候会随着项目一起打包，
而在static/public目录下的静态资源不会被解析
```
11. vue-router有哪些组件
```
router-link、router-view、keep-alive
```
12. 路由传参
```
name+params：this.$route.params.id
path+query：this.$route.query.id
router-link :to="{ name: 'news', params: { userId: 1111}}"
在path中添加/:id来对应$router.push中path携带的参数：this.$route.params.id
{
  path: '/particulars/:id',
  name: 'particulars',
  component: particulars
}
this.$router.push({
  path: `/particulars/${id}`,
})
```
13. active-class
```
active-class 属于vue-router的样式方法，当routerlink标签被点击时将会应用这个样式
```
14. vue动态路由
```
使用动态路径参数，在path中添加/:id
{
  path: /user/:id
  component: User
}
这会是访问 user 目录下的所有文件，当匹配到 /user 下的任意路由时，参数值会被设置到 this.$route.params 下。
了解：
后端配置路由：beforeEach、addRoutes、缓存实现：beforeEach进行路由拦截，先判断缓存中是否有路由，如果有就正常路由跳转；
如果没有，就调接口获取路由，然后通过addRoutes动态添加路由并放入缓存中，之后进行路由跳转。
```
15. vue-router导航钩子
```
全局导航钩子：beforeEach(to、from、next)、afterEach(to、from)
单个路由独享的：beforeEnter(to、from、next)
组件内的导航钩子：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave：都有to, from, next三个参数
```
16. 路由懒加载的三种方式
```
一、vue异步组件技术 ==== 异步加载：这种情况下一个组件生成一个js文件
component: resolve => require(['@/components/home'],resolve)
二、使用import：每个组件打包成一个js文件
const Home = () => import('@/components/home')
{
  path: '/about',
  component: About
}
三、webpack提供的require.ensure() ：了解即可
component: r => require.ensure([], () => r(require('@/components/home')), 'demo')
```

## css3动画
> @keyframes 规则和animation
1. animation：规定动画属性，比如定义动画的名称和时长。
2. @keyframes：用于创建动画

## css
1. 盒模型：由里向外content,padding,border,margin。分为两种：
> 1. IE盒子模型：width表示content+padding+border这三个部分的宽度
> 2. 标准盒子模型（W3C盒子模型）：width指content部分的宽度
> ```
> box-sizing: content-box; 是W3C盒子模型
> box-sizing: border-box; 是IE盒子模型
> ```

2. 清除浮动
> 1. 在最后一个浮动标签后，新加一个标签，给其设置clear：both
> 2. 父元素添加overflow:hidden
> 3. 添加伪元素（不是伪类）
> ```
> .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
>		content: "";
>		display: block;
>		height: 0;
>		clear:both;
>		visibility: hidden;
>	}
>  .clearfix{
>	    *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
>  }
> ```

3. css3新特性
圆角（border-radius），阴影（box-shadow），对文字加特效（text-shadow、），
线性渐变（gradient），旋转（transform）

4. h5新特性
新增标签header,nav,footer等；音频、视频API(audio,video)；画布canvas；localStorage、sessionStorage ；

## 常见兼容性问题
1. 浏览器默认的margin和padding不同。解决：*{margin:0;padding:0;}
2. ios键盘唤起，键盘收起以后页面不归位
```
document.body.addEventListener('focusout', () => { // 去除ios弹出输入框页面上移
　window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
})
```
3. 移动端自适应：引用淘宝的适配方案flexible；rem布局（rem原理：计算是相对于根元素字体大小，其本质是等比缩放，一般是基于宽度）

## 微信公众号获取openid
```
1、先获取code，通过自定义的路径（路径包括appid和重定向地址）获取。先跳转自定义路径，之后页面自动到重定向到新的地址，这个地址url后跟着code。
2、根据code获取openId：调腾讯接口，把appid、appsecret、code三个参数传过去。
```