function All() {
    this.name = "mm";
    this.run = function () {
        return this.name + 'run';
    }
}
All.prototype = {
    constructor: All,
    age: 2,
    name: 3,
    eat: function () {
        return this.name + 'eating'
    },
    setBg: function (element, color) {
        element.style.backgroundColor = color;
    },
    getId: function (id) {
        return document.getElementById(id);
    },
    getTagName: function () {
        if (arguments.length === 1) {
            return document.getElementsByTagName(arguments[0]);
        } else {
            return arguments[0].getElementsByTagName(arguments[1]);
        }
    }

}
function all() {
    return new All();
}

var body = document.body;
//var all = new All();
const $ = all();

document.addEventListener('plusready', function(){
   			//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
   			console.log($.eat());
console.log($.run());
console.log($.name);  //mm
console.log($.age);
$.setBg(body, "green");
const ul = $.getId('number');
const li = $.getTagName(ul, 'li');
prev = li[0];
ul.addEventListener('touchend', function (e) {
    let ev = e.target;
    if (ev.nodeName === 'LI') {
        $.setBg(prev, "chocolate")
        $.setBg(ev, 'white')
        prev = ev;
    }
})
   		});
