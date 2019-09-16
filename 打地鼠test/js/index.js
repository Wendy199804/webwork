
var ul = document.getElementById('box');
var li = ul.getElementsByTagName('li');
var img = ul.getElementsByTagName('img');
var startbtn = document.getElementById('start_btn');
var stopbtn = document.getElementById('stop_btn');
var time1;
var time2;

function ran() {
    let index = Math.floor(Math.random() * 6); //返回 0-5的随机数 
    li[index].innerHTML = "???";
    console.log(index);
    time2 = setInterval(function(){
        li[index].innerHTML = "   ";
    },300);
}

startbtn.onclick = function () {
    time1 = setInterval(ran, 1000);
}

//不重复的随机数？？
////////////////////////////////////////////////
//     time = setInterval(function () {
//         var number = 5;
//         var arr = new Array;
//         for (let i = 0; i < number; i++) {
//             arr[i] = i + 1;
//         }
//         var arrr = arr.slice();
//         // console.log(arr);
//         for (let i = 0; i < 5; i++) {
//             var a = Math.floor(Math.random() * number); //产生随机下标
//             var b = arr[a];// 产生数组内的随机数 
//             console.log(b);
//             // console.log('索引值：' + a);
//             // console.log('删除的数字：' + b);
//             arr.splice(a, 1);
//             // console.log('最终数组：' + arr);
//             // console.log('数组长度：' + arr.length);
//             // console.log('number:' + number);
//             number--;
//         }
//         // console.log('最后一个值：' + b);
//         // console.log('最后一个a：' + a);
//         console.log(arrr);
//         for (let i = 0; i < 5; i++) {
//             if (b == arrr[i]) {
//                 arrr.splice(i, 1);
//             }
//         }
//         console.log(arrr);
//         console.log("---------------------");
//     }, 1000);
// stopbtn.onclick = function () {
//     clearInterval(time);
//     console.log('???');
// }
//////////////////////////////////////////////////
// var myTimer = function (callback) {
//     var height = 10;
//     var flag = true;
//     setInterval(function () {
//       if (flag) {
//         height--;
//         if (height <= -10) {flag = false;}
//       } else {
//         height++;
//         if (height >= 10) {flag = true;}
//       }
//       callback(height);
//     }, 200);
//   };

//   myTimer(function (val) {
//     console.log(val);
//   });
/////////////////////////////////////////////////////
//将数组打乱顺序 然后输出
// var originalArray = [1, 2, 3, 4, 5]
// time = setInterval(function(){
//     originalArray.sort(function () {
//     return 0.5 - Math.random();   //如果返回值小于零 位置不变 ； 返回值大于零，交换位置
// });
// for (var i = 0; i < originalArray.length; i++) {
//     document.write(originalArray[i] + " , ");
// }
// console.log(0.5 - Math.random());
// },1000);
//////////////////////////////////////////////////////