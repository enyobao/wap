;(function(win,doc){
	function change(){
		doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/320+'px';
	}
	change();
	win.addEventListener('resize',change,false);
})(window,document);
window.onload = function(){
	change();
}
window.onresize = function(){
	change();
}
function change(){
	document.documentElement.style.fontSize=20*document.documentElement.clientWidth/320+'px';
}