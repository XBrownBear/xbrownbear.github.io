// build time:Sat Oct 19 2019 19:12:00 GMT+0800 (GMT+08:00)
window.onload=function(){var a=document.getElementById("DigitalRain");var r=a.getContext("2d");var t=window.screen;var o=a.width=t.width;var n=a.height;a.width=o;a.height=n;var h=12;var e=Math.floor(o/h);var i=[];for(var l=0;l<e;l++){i.push(0)}var v="101101011001010101100101010101010110101011";function f(){r.fillStyle="rgba(0,0,0,.08)";r.fillRect(0,0,o,n);r.font="600 "+h+"px  Georgia";r.fillStyle=["#008000"];for(var t=0;t<e;t++){var l=Math.floor(Math.random()*v.length);var f=t*h;var d=i[t]*h;r.fillText(v[l],f,d);if(d>=a.height&&Math.random()>.99){i[t]=0}i[t]++}}function d(){var a=Math.floor(Math.random()*256);var r=Math.floor(Math.random()*256);var t=Math.floor(Math.random()*256);return"rgb("+a+","+r+","+t+")"}f();setInterval(f,35)};
//rebuild by neat 