function Wer() {
	this.player = [];
	this.populace = {
		index: -1, // 玩家编号
		userName: "默认玩家", // 用户名
		status: '村民',
		exist: true, //活着
		isPoison: false // 被毒死
	};
	this.werWolf = {
		index: -1, // 玩家编号
		userName: "默认玩家", // 用户名
		status: '狼人',
		exist: true, //活着
		isPoison: false // 被毒死
	};
	this.prophet = {
		index: -1, // 玩家编号
		userName: "默认玩家", // 用户名
		status: '预言家',
		exist: true, //活着
		isPoison: false // 被毒死
	};
	this.witch = {
		index: -1, // 玩家编号
		userName: "默认玩家", // 用户名
		status: '女巫',
		exist: true, //活着
		antidote: 1, //解药一个
		poison: 1, //毒药一个
		isPoison: false // 被毒死
	};
	this.guard = {
		index: -1, // 玩家编号
		userName: "默认玩家", // 用户名
		status: '守卫',
		exist: true, //活着
		isPoison: false // 被毒死
	};
	this.hunter = {
		index: -1, // 玩家编号
		userName: "默认玩家", // 用户名
		status: '猎人',
		exist: true, //活着
		isPoison: false // 被毒死
	};
	this.size = []; //角色人数		顺序：平民、狼人、预言家、女巫、守卫、猎人
	this.dayStatus = ["夜晚", "白天"]; //天数状态
	this.log = []; //游戏历史记录
	this.day = 1; //游戏天数
	this.killer = []; // 死亡玩家集合
	this.nightKiller = [] // 昨晚死亡玩家
}


Wer.prototype = {
	constructor: Wer,
	getId: function(id) {
		return document.getElementById(id)
	},

	getClass: function() {
		if (arguments.length == 1) {
			return document.getElementsByClassName(arguments[0])
		} else {
			return arguments[0].getElementsByClassName(arguments[1])
		}
	},

	getTag: function() {
		if (arguments.length == 1) {
			return document.getElementsByTagName(arguments[0])
		} else {
			return arguments[0].getElementsByTagName(arguments[1])
		}
	},

	setItem: function(key, value) {
		localStorage.setItem(key, JSON.stringify(value))
	},

	getItem: function(key) {
		return JSON.parse(localStorage.getItem(key))
	},

	open: function(url, slide) {
		var slide = slide == undefined ? "slide-in-right" : slide;
		plus.webview.open(url, "new", {}, slide, 50)
	},

	randomArr: function(arr) {
		var length = arr.length,
			randomIndex, temp;
		while (length) {
			randomIndex = Math.floor(Math.random() * (length--));
			// 随机数公式
			temp = arr[randomIndex];
			arr[randomIndex] = arr[length];
			arr[length] = temp
		}
		return arr;
	},
	getRandomRgba: function() {
		return 'rgba(' + Math.floor(Math.random() * 100 + 155) + ',' + Math.floor(Math.random() * 100 + 155) + ',' + Math.floor(
			Math.random() * 100 + 155) + ',0.7)';
	},
	getNumber: function(){
		var $wer = $.getItem("lrs-deal")
		let a = $wer.player.filter(function(value, index) {
			return value.exist === false;
			// 找出所有的生命值为false的角色
		})
		return a
	},
	getArrayNumber: function(str, array) {
		// 第一个参数表示你要查找的角色,
		// 第二个参数表示你要遍历的数组
		let processArr = array.filter(function(value) {
			// 拿到数组对象中中值进行匹配
			return value.status == str;
		})
		return processArr.length;
		// 返回一个匹配之后的数组长度
	},
	
	getWerWolf: function(resolve) { // 狼人阶段
		var $wer = $.getItem("lrs-deal");
		$.getId("day").innerHTML = $wer.day;
		$.getId("dayStatus").innerHTML = $wer.dayStatus[0];
		$.setItem("vote", "");
		$.setItem("werKill", "");
		$.setItem("witchPoison", "");
		$.setItem("guardPro", "");
		$.getId("title").innerHTML = " 天黑请闭眼！！！<br/> 狼人请睁眼，今晚你们的目标是？";
		var prev;
		var a = function(e) {
			if (e.target.className == "AA") {
				if (prev != undefined) {
					prev.style.background = "";
				}
				e.target.style.background = "darkred";
				plus.nativeUI.toast("鲜血让人亢奋");
				prev = e.target;
				$.werKill = e.target.firstChild.innerHTML;
				$.setItem("werKill", $.werKill)
			}
			if (e.target.className == "BB") {
				plus.nativeUI.toast("TA已经挂了")
			}
		}
		$.getId("user").addEventListener("touchend", a);
		$.getId("confirm").ontouchend = function() { //按钮
			$.getTag($.getId("user"), "h6")[$.getItem("werKill") - 1].innerHTML = "状态：被刀"
			var $wer = $.getItem("lrs-deal");
			$.setItem("lrs-deal", $wer);
			$.getId("button").style.display = "flex";
			$.getId("user").removeEventListener("touchend", a);
			resolve();
		};

	},


	getWitch: function(resolve) { //女巫阶段
		
		$.getId("title").innerHTML = "狼人请闭眼<br/> 女巫请睁眼，今晚TA死了，你救么";
		var witchGo = function() { //女巫执行完救或者不救之后的动作。
			$.getId("button").style.display = "none";
			var prev;
			var a = function(e) {
				if ($.witch.poison) { //判断是否还有毒药
					if (e.target.className == "AA") {
						if (prev != undefined) {
							prev.style.background = "";
						}
						e.target.style.background = "darkgreen";
						plus.nativeUI.toast(" 干了这碗毒药吧 ");
						prev = e.target;
						$.witchPoison = e.target.firstChild.innerHTML;
						$.setItem("witchPoison", $.witchPoison);
					}
					if (e.target.className == "BB") {
						plus.nativeUI.toast("TA已经挂了")
					}
				} else {
					plus.nativeUI.toast("(不要出声)你没有毒药了")
				}
			}
			$.getId("user").addEventListener("touchend", a)
			$.getId("confirm").ontouchend = function() { // 按钮
				if ($.getItem("witchPoison") != "") {
					$.getTag($.getId("user"), "div")[$.getItem("witchPoison") - 1].isPoison = true;
					$.getTag($.getId("user"), "h6")[$.getItem("witchPoison") - 1].innerHTML = "状态：被毒死"
				}
				$.getId("button").style.display = "none";
				$.getId("user").removeEventListener("touchend", a);
				resolve();
			}
		}
		$.getId("help-no").addEventListener("touchend", function() {
			$.getId("title").innerHTML = "今晚你要毒的人是？<br/> （不选择为不毒）"
			$.getId("button").style.display = "none";
			witchGo()
		})
		$.getId("help").addEventListener("touchend", function() {
			if ($.witch.antidote == 1) {
				$.getTag($.getId("user"), "h6")[$.getItem("werKill") - 1].innerHTML = "状态：被救"
				$.getId("title").innerHTML = " 今晚你要毒的人是？<br/> （不选择为不毒）"
				$.getId("button").style.display = "none";
				$.witch.antidote = 0;
				$.setItem("werKill", "");
				witchGo()
			} else {
				plus.nativeUI.toast("（不要出声）你没有解药了，没法救");
				return;
			}
		})
	},

	getProphet: function(resolve) { //   预言家阶段
		$.getId("title").innerHTML = "女巫请闭眼<br/> 预言家请睁眼，今晚你要验的人是？<br /> TA的身份是（）<br/>（自己看完给玩家打手势）";
		$.getId("button").style.display = "none";
		$.getId("confirm").addEventListener("touchend", function() { //按钮
			resolve();
		})
	},

	getGuard: function(resolve) { // 守卫阶段
		if ($.getItem("haveGuard") == 0) { // 没有守卫的版本
			resolve();
			return
		}
		$.getId("title").innerHTML = " 预言家请闭眼<br/> 守卫请睁眼，今晚你要守的人是？";
		var prev = $.getTag($.getId("user"), "div")[0];
		var a = function(e) {
			if (e.target.className == "AA") {
				if (prev != undefined) {
					prev.style.background = "";
				}
				prev.style.background = "";
				e.target.style.background = "darkorange";
				plus.nativeUI.toast("放心，我来守卫");
				prev = e.target;
				$.guardPro = e.target.firstChild.innerHTML;
				$.setItem("guardPro", $.guardPro);
			}
			if (e.target.className == "BB") {
				plus.nativeUI.toast("TA已经挂了")
			}
		}
		$.getId("user").addEventListener("touchend", a)
		$.getId("confirm").ontouchend = function() { //按钮
			if ($.getItem("guardPro") != "") {
				if (!$.getTag($.getId("user"), "div")[$.getItem("guardPro") - 1].isPoison) {
					$.getTag($.getId("user"), "h6")[$.getItem("guardPro") - 1].innerHTML = "状态：被守"
				} else {
					plus.nativeUI.toast("被毒死的人，守卫也没法救的，放弃吧，谁让你不充钱")
				}
			}
			$.getId("user").removeEventListener("touchend", a);
			if ($.getItem("haveHunter") == 0) { // 没有猎人的版本
				$.getNightResult();

			}
			resolve();
		}
	},

	getHunter: function(resolve) { //猎人阶段
		if ($.getItem("haveHunter") == 0) { // 没有猎人的版本
			resolve();
			return
		}
		var aa = "守卫"
		if ($.getItem("haveGuard") == 0) { // 没有守卫的版本,判断话怎么接
			aa = "预言家"
		}
		$.getId("title").innerHTML = aa + "请闭眼<br/> 猎人请睁眼，今晚你的状态是是（）";
		$.getId("confirm").ontouchend = function() { //按钮
			$.getNightResult();
			resolve();
		}
	},

	getNightResult: function() { //晚上结束结算阶段
		var nightDie = [];
		$.setItem("nightDie", "");
		for (var i = 0; i < $.getItem("lrs-deal").player.length; i++) {
			if ($.getTag($.getId("user"), "div")[i].className == "AA") { //未死亡玩家
				$.getTag($.getId("user"), "div")[i].style.background = "";
			}
		}
		if ($.getItem("werKill") != "" && $.getItem("werKill") != $.getItem("guardPro")) { //被守护救回来
			$.getDeadPlayer(Number($.getItem("werKill") - 1), nightDie);
		}
		if ($.getItem("witchPoison") != "") { // 被毒死无法救活
			$.getDeadPlayer(Number($.getItem("witchPoison") - 1), nightDie);
		}
		$.setItem("nightDie", nightDie);
		$.getId("dayStatus").innerHTML = $.dayStatus[1];
		$.getId("user").style.color = "black";
		$.getId("game").style.backgroundImage = "url(img/sun.png)";
		console.log($.killer)
		console.log($.getItem("nightDie"))
	},

	getDeadPlayer: function(i, nightDie) {
		$.getTag($.getId("user"), "div")[i].className == "BB";
		$.getTag($.getId("user"), "div")[i].style.background = "url(img/die.png)"
		$.killer.push($.getTag($.getId("user"), "div")[i].firstChild.innerHTML); // 全部死亡玩家
		var $wer = $.getItem("lrs-deal");
		$wer.player[i].exist = false;
		$.setItem("lrs-deal",$wer);
		if (nightDie != undefined) {
			nightDie.push($.getTag($.getId("user"), "div")[i].firstChild.innerHTML); // 昨晚死亡玩家
		}
	},

	hunterKill:function(resolve){		// 猎人死亡开枪
		var num = $.getArrayNumber("猎人",$.getNumber());
		if(!num || $.getItem("hunterKill")!=""){
			resolve();
			return
		}
		$.getId("title").innerHTML = " 猎人死亡，选择一个人带走"
		var prev;
		var a = function(e) {
			if (e.target.className == "AA") {
				if (prev != undefined) {
					prev.style.background ="";
				}
				e.target.style.background = "red";
				prev = e.target;
				$.hunterKill = e.target.firstChild.innerHTML;
				$.setItem("hunterKill", $.hunterKill);
			}
			if (e.target.className == "BB") {
				plus.nativeUI.toast("TA已经挂了")
			}
		}
		$.getId("user").addEventListener("touchend", a)
		$.getId("confirm").ontouchend = function() {
			$.getDeadPlayer(Number($.getItem("hunterKill") - 1));
			$.getId("user").removeEventListener("touchend", a);
			resolve();
		}
	},
	getDaytime: function(resolve) { // 刚进白天结算阶段
		var $die = $.getItem("nightDie")
		if ($die == "") {
			$.getId("title").innerHTML = " 昨晚是个平安夜";
		} else {
			$.getId("title").innerHTML = "昨晚死的人是" + $die;
		}
		if ($.day == 1) {
			$.setItem("police", "");
			$.getId("confirm").innerHTML = " 开始警长竞选";
			$.getId("confirm").ontouchend = function() { //按钮
				resolve();
			}
		} else {
			$.getId("confirm").innerHTML = "警长指定顺序发言"
			resolve();
		}

	},
	getPolice: function(resolve) {
		if ($.day != 1) {
			resolve();
			return
		}
		$.getId("confirm").innerHTML = "确定";
		$.getId("title").innerHTML = "要竞选警长的举手并依次发言<br />=>投票<br />=> 选定警长后点击确定";
		var prev;
		var a = function(e) {
			if (e.target.className == "AA") {
				if (prev != undefined) {
					prev.firstChild.style.background = $.getRandomRgba();
				}
				e.target.firstChild.style.background = "url(img/jb.png)";
				prev = e.target;
				$.police = e.target.firstChild.innerHTML;
				$.setItem("police", $.police);
			}
		}
		$.getId("user").addEventListener("touchend", a)
		$.getId("confirm").ontouchend = function() {
			if ($.getItem("police") == "") {
				alert("请选定警长");
				return
			}
			$.getId("user").removeEventListener("touchend", a);
			resolve();
		}
	},
	getTalking: function(resolve) { // 玩家发言阶段
		$.getId("confirm").innerHTML = "警长指定顺序发言"
		$.getId("title").innerHTML = "玩家开始依次发言<br />警长最后发言";
		$.getId("confirm").ontouchend = function() {
			$.getId("confirm").innerHTML = "确定"
			resolve();
		}
	},
	getVote: function(resolve) { //投票阶段
		$.getId("title").innerHTML = " 开始归票，并选择出局玩家";
		var prev;
		var a = function(e) {
			if (e.target.className == "AA") {
				if (prev != undefined) {
					prev.style.background = "";
				}
				e.target.style.background = "red";
				prev = e.target;
				$.vote = e.target.firstChild.innerHTML;
				$.setItem("vote", $.vote);
			}
		}
		$.getId("user").addEventListener("touchend", a)
		$.getId("confirm").ontouchend = function() {
			$.getId("user").removeEventListener("touchend", a)
			$.getDeadPlayer(Number($.getItem("vote") - 1));
			resolve();
		}
	},
	
	gameOver: function() {
		var shen =$.getArrayNumber('预言家',$.getNumber())+$.getArrayNumber('女巫',$.getNumber())+$.getArrayNumber('守卫',$.getNumber())+$.getArrayNumber('猎人',$.getNumber());
		var shenNum = $.getItem("lrs").size[2]+$.getItem("lrs").size[3]+$.getItem("lrs").size[4]+$.getItem("lrs").size[5]
		if ($.getArrayNumber('村民',$.getNumber()) == $.getItem("lrs").size[0]) {
			// 判断村民是不是死光了.如果村民的死亡人数 == 角色人数 
			alert('村民死光，狼人胜利')
			$.open('over.html')
		} else if ($.getArrayNumber('狼人',$.getNumber()) == $.getItem("lrs").size[1]) {
			alert('狼人死光，好人胜利')
			$.open('over.html')
		} else if (shen == shenNum){
			alert(' 神死光，狼人胜利')
			$.open('over.html')
		}
	}



}

const $ = new Wer();
