function Wolf(){
	this.characters_num = {
		pm:0,langr:0,yyj:0,nw:0,lier:0,sw:0,bc:0
	}; //角色人数  0平民、1狼人、2预言家、3女巫、4猎人、5守卫、6白痴
	this.character={
		index: 0, // 玩家编号
		status: name,
		exist: true, //活着
		isPoison: false // 被毒死
	};
	this.players=[] //根据index排好序的角色集合  包含index status exist isPoison bg
	this.day = 1;  //天数
}
Wolf.prototype={
	constructor:Wolf,
	open:function(url,slide){
		slide = slide==undefined?'slide-in-right':slide;
		plus.webview.open(url, 'new', {}, slide, 200);
	},
	alert:function(string){
	   return plus.nativeUI.toast(string)
	},
	getId:function(id){
		return document.getElementById(id)
	},
	
	getClass:function(){
		if(arguments.length===1){
			return document.getElementsByClassName(arguments[0])
		}else{
			return arguments[0].getElementsByClassName(arguments[1])
		}
	},
	getTagName:function(){
		if(arguments.length===1){
			return document.getElementsByTagName(arguments[0])
		}else{
			return arguments[0].getElementsByTagName(arguments[1])
		}
	},
	getName:function(){
		if(arguments.length===1){
			return document.getElementsByName(arguments[0])
		}else{
			return arguments[0].getElementsByName(arguments[1])
		}
	},
	setItem:function(){
		 if(arguments.length===1){
		 	localStorage.setItem('wer',JSON.stringify(arguments[0]))
		 }else{
		 	localStorage.setItem(arguments[0],JSON.stringify(arguments[1]))
		 } 
	},
	getItem:function(key){
		return JSON.parse(localStorage.getItem(key))
	},
	getChecked:function(i,status){
		if(checkboxname[i].checked = true){
			return $.characters_num.status = 1;
		}
	},
	setElementLi:function(len,n){  
		
		for(let i=0;i<len;i++){
			var li =document.createElement('li'); 
			ul.appendChild(li);
			var p = document.createElement('p');
			li.appendChild(p);
			// p.innerHTML = "??"
			if(n == 'li_pm'){
				li.setAttribute("style","background-image: url(img/pm.jpg);background-size: contain;");
			}
			if(n == 'li_langr'){
				li.setAttribute("style","background-image: url(img/langr.jpg);background-size: contain;")
			}
			if(n == 'li_yyj'){
				li.setAttribute("style","background-image: url(img/yyj.jpg);background-size: contain;")
			}
			if(n == 'li_nw'){
				li.setAttribute("style","background-image: url(img/nw.jpg);background-size: contain;")
			}
			if(n == 'li_lier'){
				li.setAttribute("style","background-image: url(img/lier.jpg);background-size: contain;")
			}
			if(n == 'li_sw'){
				li.setAttribute("style","background-image: url(img/sw.jpg);background-size: contain;")
			}
			if(n == 'li_bc'){
				li.setAttribute("style","background-image: url(img/bc.jpg);background-size: contain;")
			}
		}
		
	},
	

	back(){
		let _self = this;
		const webiew = plus.webview.currentWebview()
		let backButtonPress = 0;
		plus.key.addEventListener('backbutton',function(){
			backButtonPress++
			if(backButtonPress > 1){
				webiew.back();
			}else{
				_self.alert('再点一次退出狼人杀')
				webiew.close()
			}
		})
	},
	
}

function wolf(){
	return new Wolf()
}

const $ = wolf()