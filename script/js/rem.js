/**
 * Author:             Enyo Bao
 * Version:            1.0
 * Date                2017/3/6
 * Discription:
 */
;(function(win,doc){
    function change(){
        doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/320+'px';
    }
    change();
    win.addEventListener('resize',change,false);
})(window,document);