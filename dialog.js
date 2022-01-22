var dialog = document.querySelectorAll('.__dialog');
var _alert =false;
var _conf =false;
function Alert(){
    console.log(dialog[0])
    var alert =dialog[0];
    _alert = _alert ? false :true
    alert.style.display =_alert ? "flex" :"none ";
}
  
function Simple(){
    console.log(dialog[1]);
    var simple =dialog[1];
    simple.style.display ="flex";       
}
function  Confirmation(){
    console.log(dialog[2]);
    var conf =dialog[2];
    _conf = _conf ? false :true
    conf.style.display =_conf ? "flex" : "none";
}