var headerscrolltrack = document.querySelector('.__navbar-scroll-tracker');
var collapser = document.querySelector('.__navbar-short-collapse');
var track = document.querySelector('.__navbar-track');

var title = document.querySelector('.__navbar-title');


function scroller()
{
    // console.log("Scroll",track.pageYOffset>1,track.pageYOffset,scrollY,headerscrolltrack.scrollTop);
    title.style.display = "none";
    collapser.style.position = headerscrolltrack.scrollTop > 0 ? "absolute" : "static";
    
}