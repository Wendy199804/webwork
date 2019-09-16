function Mice() {
	this.player = {
		name: null,
		password: null,
		score: 0,
		headimg: 0
	};
	this.players = [];
	this.logplayer = [];

}
Mice.prototype = {
	constructor: Mice,
	people: [],
	setBg: function(el, color) {
		el.style.background = color
	},
	open: function(url, slide) {
		slide = slide == undefined ? 'slide-in-right' : slide;
		plus.webview.open(url, 'new', {}, slide, 200);
	},
	alert: function(string) {
		return plus.nativeUI.toast(string)
	},
	getId: function(id) {
		return document.getElementById(id)
	},
	getClass: function() {
		if (arguments.length === 1) {
			return document.getElementsByClassName(arguments[0])
		} else {
			return arguments[0].getElementsByClassName(arguments[1])
		}
	},
	getTagName: function() {
		if (arguments.length === 1) {
			return document.getElementsByTagName(arguments[0])
		} else {
			return arguments[0].getElementsByTagName(arguments[1])
		}
	},
	setItem: function() {
		if (arguments.length === 1) {
			localStorage.setItem('mice', JSON.stringify(arguments[0]))
		} else {
			localStorage.setItem(arguments[0], JSON.stringify(arguments[1]))
		}
	},
	getItem: function(key) {
		return JSON.parse(localStorage.getItem(key))
	},
	back() {
		let _self = this;
		const webiew = plus.webview.currentWebview()
		let backButtonPress = 0;
		plus.key.addEventListener('backbutton', function() {
			backButtonPress++
			if (backButtonPress > 1) {
				webiew.back();
			} else {
				_self.alert('再点一次退出')
				webiew.close()
			}
		})
	}
}

function mice() {
	return new Mice();
}

const $ = mice();
