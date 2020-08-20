// 整合Observer，Compile和Watcher三者，通过Observer来监听自己的model的数据变化，
// 通过Compile来解析编译模板指令（vue中是用来解析 {{}}），最终利用watcher搭起observer和Compile之间的通信桥梁，
// 达到数据变化 —>视图更新；视图交互变化（input）—>数据model变更双向绑定效果。


// observer实现
// observer用来实现对每个vue中的data中定义的属性循环用Object.defineProperty()实现数据劫持，以便利用其中的setter和getter，
// 然后通知订阅者，订阅者会触发它的update方法，对视图进行更新。
function defineReactive (obj, key, val) {
  var dep = new Dep();
  Object.defineProperty(obj, key, {
  	enumerable: true, // 描述属性是否配置，以及可否删除
  	configurable: true, // 描述属性是否会出现在for in 或者 Object.keys()的遍历中
	  get: function() {
      //添加订阅者watcher到主题对象Dep
      if(Dep.target) {
        // JS的浏览器单线程特性，保证这个全局变量在同一时间内，只会有同一个监听器使用
        dep.addSub(Dep.target);
      }
      return val;
	  },
	  set: function (newVal) {
      if(newVal === val) return;
      val = newVal;
      console.log(val);
      // 作为发布者发出通知
      dep.notify();//通知后dep会循环调用各自的update方法更新视图
	  }
  })
}
function observe(obj, vm) {
  Object.keys(obj).forEach(function(key) {
    defineReactive(vm, key, obj[key]);
  })
}


// compile的目的就是解析各种指令称真正的html
function Compile(node, vm) {
  if(node) {
    this.$frag = this.nodeToFragment(node, vm);
    return this.$frag;
  }
}
Compile.prototype = {
  nodeToFragment: function(node, vm) {
    var self = this;
    var frag = document.createDocumentFragment();
    var child;
    while(child = node.firstChild) {
      console.log([child])
      self.compileElement(child, vm);
      frag.append(child); // 将所有子节点添加到fragment中
    }
    return frag;
  },
  compileElement: function(node, vm) {
    var reg = /\{\{(.*)\}\}/;
    //节点类型为元素(input元素这里)
    if(node.nodeType === 1) {
      var attr = node.attributes;
      // 解析属性
      for(var i = 0; i < attr.length; i++ ) {
        if(attr[i].nodeName == 'v-model') {//遍历属性节点找到v-model的属性
          var name = attr[i].nodeValue; // 获取v-model绑定的属性名
          node.addEventListener('input', function(e) {
            // 给相应的data属性赋值，进而触发该属性的set方法
            vm[name]= e.target.value;
          });
          new Watcher(vm, node, name, 'value');//创建新的watcher，会触发函数向对应属性的dep数组中添加订阅者，
        }
      };
    }
    //节点类型为text
    if(node.nodeType === 3) {
      if(reg.test(node.nodeValue)) {
        var name = RegExp.$1; // 获取匹配到的字符串
        name = name.trim();
        new Watcher(vm, node, name, 'nodeValue');
      }
    }
  }
}


// watcher实现
function Watcher(vm, node, name, type) {
  Dep.target = this;
  this.name = name;
  this.node = node;
  this.vm = vm;
  this.type = type;
  this.update();
  Dep.target = null;
}

Watcher.prototype = {
  update: function() {
    this.get();
    this.node[this.type] = this.value; // 订阅者执行相应操作
  },
  // 获取data的属性值
  get: function() {
    console.log(1)
    this.value = this.vm[this.name]; //触发相应属性的get
  }
}


// 实现Dep来为每个属性添加订阅者
function Dep() {
  this.subs = [];
}
Dep.prototype = {
  addSub: function(sub) {
    this.subs.push(sub);
  },
  notify: function() {
    this.subs.forEach(function(sub) {
    	sub.update();
    })
  }
}
