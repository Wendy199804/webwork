//左侧导航

function ShowMenu(obj, noid) {
	var block = document.getElementById(noid);
	var n = noid.substr(noid.length - 1);
	if (noid.length == 4) {
	} else {
		var span = document.getElementById("accordion").getElementsByTagName("ul");
		
		for (var i = 0; i < span.length; i++) {
			if (i != n) {
				span[i].className = "sub";
			}
		}
	}
	if (block.className == "sub") {
		block.className = "";
	  
	} else {
		block.className = "sub";
		obj.style.color = "";
	}
}
// 点击样式
// var accli2 = document.getElementById('accli2');
// var subb = document.getElementById('subb');
// var spantitle = document.getElementById('span-title');
// var fa = document.getElementById('fa');
// function all_li2() {
// 	spantitle.style.color = "#fff";
// 	fa.style.color = "#64C0E1";
// 	subb.style.backgroundColor = "#35404D";
// }
// var accli3 = document.getElementById('accli3');
// var subb = document.getElementById('subb');
// function all_li3() {
// 	subb.style.backgroundColor = "#35404D";
// 	spantitle.style.color = "#fff";
// 	fa.style.color = "#64C0E1";
// }
// var accli4 = document.getElementById('accli4');
// var subb = document.getElementById('subb');
// function all_li4() {
// 	subb.style.backgroundColor = "#35404D";
// 	spantitle.style.color = "#fff";
// 	fa.style.color = "#64C0E1";
// }
// var accli5 = document.getElementById('accli5');
// var subb = document.getElementById('subb');
// function all_li5() {
// 	subb.style.backgroundColor = "#35404D";
// 	spantitle.style.color = "#fff";
// 	fa.style.color = "#64C0E1";
// }
// var accli6 = document.getElementById('accli6');
// var subb = document.getElementById('subb');
// function all_li6() {
// 	subb.style.backgroundColor = "#35404D";
// 	spantitle.style.color = "#fff";
// 	fa.style.color = "#64C0E1";
// }
// var accli7 = document.getElementById('accli7');
// var subb = document.getElementById('subb');
// function all_li7() {
// 	subb.style.backgroundColor = "#35404D";
// 	spantitle.style.color = "#fff";
// 	fa.style.color = "#64C0E1";
// }
// var accli8 = document.getElementById('accli8');
// var subb = document.getElementById('subb');
// function all_li8() {
// 	subb.style.backgroundColor = "#35404D";
// 	spantitle.style.color = "#fff";
// 	fa.style.color = "#64C0E1";
// }
// var accli9 = document.getElementById('accli9');
// var subb = document.getElementById('subb');
// function all_li9() {
// 	subb.style.backgroundColor = "#35404D";
// 	spantitle.style.color = "#fff";
// 	fa.style.color = "#64C0E1";
// }
// var accli11 = document.getElementById('accli11');
// var subb = document.getElementById('subb');
// function all_li11() {
// 	subb.style.backgroundColor = "#35404D";
// 	spantitle.style.color = "#fff";
// 	fa.style.color = "#64C0E1";
// }



// 导航栏点击出现子菜单
var useron = document.getElementById('useron');
var bookon = document.getElementById('bookon');
var emailon = document.getElementById('emailon');
var bellon = document.getElementById('bellon');

function book() {
	if (bookon.style.display == 'none') {
		bookon.style.display = 'block';
	}
	else {
		bookon.style.display = 'none';
	}
}
function email() {
	if (emailon.style.display == "none") {
		emailon.style.display = 'block';
	}
	else {
		emailon.style.display = 'none';
	}
}
function bell() {
	if (bellon.style.display == "none") {
		bellon.style.display = 'block';
	}
	else {
		bellon.style.display = 'none';
	}
}
function user() {
	if (useron.style.display == "none") {
		useron.style.display = 'block';
	}
	else {
		useron.style.display = 'none';
	}
}
 //点击空白处隐藏下拉菜单
$('.book-icon').on('click',function (event) {
    event.stopPropagation();//阻止事件冒泡
    $(this).siblings('.book-on').toggle();
    //点击空白处，下拉框隐藏-------开始
    var tag = $(this).siblings('.book-on');
    var flag = true;
    $(document).bind("click",function(e){//点击空白处，设置的弹框消失
        var target = $(e.target);
        if(target.closest(tag).length == 0 && flag == true){
            $(tag).hide();
            flag = false;
        }
    });
    //book
});
$('.email-icon').on('click',function (event) {
    event.stopPropagation();//阻止事件冒泡
    $(this).siblings('.email-on').toggle();
    //点击空白处，下拉框隐藏-------开始
    var tag = $(this).siblings('.email-on');
    var flag = true;
    $(document).bind("click",function(e){//点击空白处，设置的弹框消失
        var target = $(e.target);
        if(target.closest(tag).length == 0 && flag == true){
            $(tag).hide();
            flag = false;
        }
    });
    //email
});
$('.bell-icon').on('click',function (event) {
    event.stopPropagation();//阻止事件冒泡
    $(this).siblings('.bell-on').toggle();
    //点击空白处，下拉框隐藏-------开始
    var tag = $(this).siblings('.bell-on');
    var flag = true;
    $(document).bind("click",function(e){//点击空白处，设置的弹框消失
        var target = $(e.target);
        if(target.closest(tag).length == 0 && flag == true){
            $(tag).hide();
            flag = false;
        }
    });
    //bell
});
$('.username').on('click',function (event) {
    event.stopPropagation();//阻止事件冒泡
    $(this).siblings('.user-on').toggle();
    //点击空白处，下拉框隐藏-------开始
    var tag = $(this).siblings('.user-on');
    var flag = true;
    $(document).bind("click",function(e){//点击空白处，设置的弹框消失
        var target = $(e.target);
        if(target.closest(tag).length == 0 && flag == true){
            $(tag).hide();
            flag = false;
        }
    });
    //user
});




//左侧导航点击消失-出现
var navleft = document.getElementById('navleft');
var behind = document.getElementById('behind');
var contain = document.getElementById('contain');
// var bwidth = document.getElementById('behind').style.width;
function navleft_block() {
	if (navleft.style.display == "block") {
		navleft.style.display = 'none';
	}
	else {
		navleft.style.display = 'block';
	}

	if (behind.style.display == "block") {
		behind.style.display = 'none';
	}
	else {
		behind.style.display = 'block';
		// contain.style.width ="100%" - bwidth;
	}
}
//点击回到顶部
var toTop = document.querySelector("#toTop");
toTop.onclick = function () {
	var timer = setInterval(toTop, 10);
	function toTop() {
		var d = document.documentElement.scrollTop || document.body.scrollTop;
		d -= 80;
		if (d > 0) {
			window.scrollTo(0, d);
		} else {
			window.scrollTo(0, 0);
			clearInterval(timer);
			for (var i = 0; i < allNavLi.length; i++) {
				allNavLi[i].index = i;
				for (var j = 0; j < allNavLi.length; j++) {
					allNavLi[j].className = "";
					allNavLi[0].className = "on";
				}
			}
		}
	}
}
//  数字慢慢变化
var count1 = document.getElementById('count1');
var count2 = document.getElementById('count2');
var count3 = document.getElementById('count3');
var count4 = document.getElementById('count4'); 
 function NumAutoPlusAnimation(targetEle, options) { 
	options = options || {}; 
	var $this = document.getElementById(targetEle), 
	 time = options.time || $this.data('time'), //总时间--毫秒为单位 
	 finalNum = options.num || $this.data('value'), //要显示的真实数值 
	 regulator = options.regulator || 100, //调速器，改变regulator的数值可以调节数字改变的速度 

	 step = finalNum / (time / regulator),/*每30ms增加的数值--*/ 
	 count = 0, //计数器 
	 initial = 0; 
  
	var timer = setInterval(function() { 
  
	 count = count + step; 
  
	 if(count >= finalNum) { 
	  clearInterval(timer); 
	  count = finalNum; 
	 } 
	 var t = Math.floor(count); 
	 if(t == initial) return; 
  
	 initial = t; 
  
     $this.innerHTML = initial; 
	}, 30); 
   } 
   NumAutoPlusAnimation("count1", { 
	time: 2000, 
	num: 495, 
	regulator: 50 
   }) 
   NumAutoPlusAnimation("count2", { 
	time: 2000, 
	num: 947, 
	regulator: 50 
   }) 
   NumAutoPlusAnimation("count3", { 
	time: 2000, 
	num: 328, 
	regulator: 50 
   }) 
   NumAutoPlusAnimation("count4", { 
	time: 4000, 
	num: 10328, 
	regulator: 50 
   }) 
   //圆形进度条
   $(function () {
	$(".knob").knob();
	var val, up = 0, down = 0, i = 0
		, incr = function () { i++; $idir.show().html("+").fadeOut(); $ival.html(i); }
		, decr = function () { i--; $idir.show().html("-").fadeOut(); $ival.html(i); };
	$("input.infinite").knob(
		{
			'min': 0, 'max': 20, 'stopper': false, 'change': function (v) {
				if (val > v) {
					if (up) {
						decr();
						up = 0;
					} else { up = 1; down = 0; }
				} else {
					if (down) {
						incr();
						down = 0;
					} else { down = 1; up = 0; }
				}
				val = v;
			}
		}
	);
});


//日历

var dat = new Date(); //当前时间 
var nianD = dat.getFullYear();//当前年份 
var yueD = dat.getMonth(); //当前月 
var tianD = dat.getDate(); //当前天 这保存的年月日 是为了 当到达当前日期 有对比 

add(); //进入页面第一次渲染 

function add() {
	document.getElementById('date').innerHTML = "";

	var nian = dat.getFullYear();//当前年份 
	var yue = dat.getMonth(); //当前月 
	var tian = dat.getDate(); //当前天 
	var arr = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
	document.getElementById('nian').innerText = nian;
	document.getElementById('yue').innerText = arr[yue];

	var setDat = new Date(nian, yue + 1, 1 - 1); //把时间设为下个月的1号 然后天数减去1 就可以得到 当前月的最后一天; 
	var setTian = setDat.getDate(); //获取 当前月最后一天 
	var setZhou = new Date(nian, yue, 1).getDay(); //获取当前月第一天 是 周几 

	for (var i = 0; i < setZhou; i++) {//渲染空白 与 星期 对应上 
		var li = document.createElement('li');
		document.getElementById('date').appendChild(li);
	}

	for (var i = 1; i <= setTian; i++) {//利用获取到的当月最后一天 把 前边的 天数 都循环 出来 
		var li = document.createElement('li');
		li.innerText = i;
		if (nian == nianD && yue == yueD && i == tianD) {
			li.className = "active";
		} else {
			li.className = "hover";
		}

		document.getElementById('date').appendChild(li);
	}

}

document.getElementById("next").onclick = function () {
	dat.setMonth(dat.getMonth() + 1); //当点击下一个月时 对当前月进行加1; 
	add(); //重新执行渲染 获取去 改变后的 年月日 进行渲染; 
};
document.getElementById("prev").onclick = function () {
	dat.setMonth(dat.getMonth() - 1); //与下一月 同理 
	add();
}; 


//进度条

// var canvas = document.getElementById("canvasId");
// var ctx = canvas.getContext("2d");
// var ox = 56;
// var oy = 56;
// var or = 50;
// var br = 5;
// var moveFlag = false;

// function offset(r,d) {//根据弧度与距离计算偏移坐标
// 	return {x: -Math.sin(r)*d, y: Math.cos(r)*d};
// };

// function draw(n) {
// 	ctx.clearRect(0,0,canvas.width,canvas.height);
// 	ctx.strokeStyle = "#99a";
// 	ctx.lineWidth = 10;
// 	ctx.beginPath();
// 	//ctx.arc(ox,oy,or,0,Math.PI,true);//半圆
// 	ctx.arc(ox,oy,or,0,2*Math.PI,true);//整圆
// 	ctx.stroke();
// 	ctx.strokeStyle = "#F9A3A3";
// 	ctx.lineWidth =10;
// 	ctx.beginPath();
//   //  ctx.arc(ox,oy,or,Math.PI,(n*2+0.5)*Math.PI,false);
// 	ctx.arc(ox,oy,or,0.5*Math.PI,(n*2+0.5)*Math.PI,false);
// 	ctx.stroke();
// 	ctx.fillStyle = "#F9A3A3";
// 	ctx.font = "20px Arial";
// 	ctx.textAlign = "center";
// 	ctx.textBaseline = "middle";
// 	ctx.fillText(Math.round(n*100)+"%",ox,oy);
// 	ctx.fillStyle = "#F9A3A3";
// 	ctx.beginPath();
// 	var d =  offset(n*2*Math.PI,or);
// 	ctx.arc(ox+d.x,oy+d.y,br,0,2*Math.PI,true);
// 	ctx.fill();
// }

// var on = ("ontouchstart" in document)? {
// 	start: "touchstart", move: "touchmove", end: "touchend"
// } : {
// 	start: "mousedown", move: "mousemove", end: "mouseup"
// };

// function getXY(e,obj) {
// 	var et = e.touches? e.touches[0] : e;
// 	var x = et.clientX;
// 	var y = et.clientY;
// 	return {
// 		x : x - obj.offsetLeft + (document.body.scrollLeft || document.documentElement.scrollLeft),
// 		y : y - obj.offsetTop  + (document.body.scrollTop || document.documentElement.scrollTop)
// 	}
// }

// canvas.addEventListener(on.start, function(e) {
// 	moveFlag = true;
// }, false);

// canvas.addEventListener(on.move, function(e) {
// 	if (moveFlag) {
// 		var k = getXY(e,canvas);
// 		var r = Math.atan2(k.x-ox, oy-k.y);
// 		var hd = (Math.PI+r)/(2*Math.PI);

// 		// 圆的滑动范围判断
// 		if (hd <= 1 && hd >= 0) {
// 			draw(hd);
// 		}
// 	}
// }, false);

// canvas.addEventListener(on.end, function(e) {
// 	moveFlag = false;
// }, false);

// draw(0.35);

