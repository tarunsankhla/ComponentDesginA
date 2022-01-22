var item1 = document.querySelector('.item1');
var item2 = document.querySelector('.item2');
var item3 = document.querySelector('.item3');


function chapter1(){
    console.log("1")
    item1.style.display ="flex";
    item2.style.display ="none";
    item3.style.display ="none";
}
function chapter2(){
    console.log("2");
    item1.style.display ="none";
    item2.style.display ="flex";
    item3.style.display ="none";
}
function chapter3(){
    console.log("3");
    item1.style.display ="none";
    item2.style.display ="none";
    item3.style.display ="flex";
}