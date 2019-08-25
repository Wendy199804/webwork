!function(n){
    var e = n.document;
    var t = e.documentElement;
    var i = 750;
    var d = i/32;
    var o = "orientationchange" in n?"orientationchange":"resize";
    a = function(){
        var n = t.clientWidth || 320;
            n > 750&&(n=750);
            var font = Math.ceil(n/d)<16?16:Math.ceil(n/d);
            t.style.fontSize = font+'px';
            console.log(font);
    };
    e.addEventListener&&(n.addEventListener(o,a,false),e.addEventListener("DOMContentLoaded",a,false))
 }(window)