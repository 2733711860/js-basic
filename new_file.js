// 九九乘法表
var str = '';
for (var i=1; i<=9; i++) {
	for (var j=1; j<=i; j++) {
		str += i + '*' + j + '=' + i*j + '\t'
	}
	str = str + '\n';
}
console.log('九九乘法表')
console.log(str)
console.log('------------------------------------------------------------------------------------------------')




// 输出1900年至2100年中的所有闰年
var years = [];
for (var i=1900; i<=2100; i++) {
	if ((parseInt(i%4) == 0) && ((parseInt(i%100) !=0) || (parseInt(i%400 == 0)))) {
		years.push(i)
	}
}
console.log('输出1900年至2100年中的所有闰年')
console.log(years)
console.log('------------------------------------------------------------------------------------------------')




// 输出10到500之间的所有素数
var nums = [];
for (var i=10; i<=500; i ++) {
	var isSS = true;
	for (var j=2; j<=i-1; j++) {
		if (i%j == 0) { // 能整除，不是素数
			isSS = false;
			break;
		}
	}
	if (isSS) {
		nums.push(i)
	}
}
console.log('输出10到500之间的所有素数')
console.log(nums)
console.log('------------------------------------------------------------------------------------------------')




// 冒泡排序
function Bubble(arr){
  var len = arr.length;
  for (var i = 0; i < len; i++) {
		for (var j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j+1]) {
				var temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
  }
  return arr;
}
var arrs = Bubble([12,32,12,33,13,1,2,5,4,8,22])
console.log('冒泡排序')
console.log(arrs)
console.log('------------------------------------------------------------------------------------------------')




// 数组去重
let array1 = [12, 23, 11, 12, 23];
let newSet  = new Set(array1);
console.log('数组去重')
console.log([...newSet])
console.log('------------------------------------------------------------------------------------------------')




// 计算字符串中每个字符出现个数
let str1 = 'aaabbbbbsbbdbsabbsbdf';
let reds = [...str1].reduce((res, c) => {
  res[c] ? res[c]++ : res[c] = 1;
  return res
}, {})
console.log('计算字符串中每个字符出现个数')
console.log(reds)
console.log('------------------------------------------------------------------------------------------------')




// 翻转字符串
let str2 = 'qwewad1234';
let arr2 = [...str2];
arr2 = arr2.reverse(arr2)
let str3 = arr2.join()
console.log('字符串翻转')
console.log(str3)
console.log('------------------------------------------------------------------------------------------------')




// 10的阶乘
function factorialize(num) {
	if(num < 0) return -1;
	if(num == 0 || num == 1) return 1;
	if(num > 1){
		return num*factorialize(num-1);
	}
}
console.log('10的阶乘')
console.log(factorialize(10))
console.log('------------------------------------------------------------------------------------------------')




// number数组中的最大值最小值
function getMaxProfit (arr) {
	let maxNum = arr[0];
	let minNum = arr[0];
	arr.forEach(item => {
		if (item > maxNum) {
			maxNum = item
		}
		if (item < minNum) {
			minNum = item
		}
	})
	return maxNum + '-' + minNum
}
console.log('number数组中的最大值最小值')
console.log(getMaxProfit([12, 233, 12, 11, 9]))
console.log('------------------------------------------------------------------------------------------------')




// 最大公约数
function gcd (a, b) {
	if (b == 0) {
		return a;
	}
	var r = a % b;
	return gcd(b, r);
}
console.log('最大公约数')
console.log(gcd(12, 4))
console.log('------------------------------------------------------------------------------------------------')




// 最小公倍数，是两个数的乘积除以最大公约数
function scm (a, b) {
	return (a*b) / gcd(a, b);
}
console.log('最小公倍数')
console.log(scm(12, 4))
console.log('------------------------------------------------------------------------------------------------')




// 去除头尾空格
// trim()：删除字符串的头尾空格
function Trim (str) { 
	return str.replace(/(^\s*)|(\s*$)/g, ""); 
}
console.log('正则去除头尾空格')
console.log(Trim('  qawdw   qd  '))
console.log('------------------------------------------------------------------------------------------------')




// 去除所有空格
// obj.replace(/\s/g,"");
let str4 = '  qawdw   qd  '
console.log('去除所有空格')
console.log(str4.replace(/\s/g,""))
console.log('------------------------------------------------------------------------------------------------')