var badgebase = document.querySelector('.__snackbar_baseline');
var badgeleft = document.querySelector('.__snackbar_left');
var badgestack = document.querySelector('.__snackbar_stacked');
// var badgebasebtn = document.querySelector(".__badge-btn-base");

// badgebasebtn.addEventListener('click',()=>{
//     console.log("as");
// })

function BadgeBase(){
    console.log("haleo");
    badgebase.style.display ="flex"
}


function BadgeLeading(){
    console.log("haleo");
    badgeleft.style.display ="flex"
}

function BadgeBaseClose(){
    badgebase.style.display ="none"
}
function BadgeLeadingClose(){
    badgeleft.style.display ="none"
}
function BadgeStacked(){
    badgestack.style.display ="flex"
}

function BadgeStackedClose(){
    badgestack.style.display ="none"
}