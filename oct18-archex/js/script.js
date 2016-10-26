/*
var gallery = document.getElementById('gallery');
var pagePos = 0;
var currPos = gallery.offsetTop;
var winHeight = window.innerHeight;

var timer = null;
function intManager(flag, animate, time){
    if(flag){
        timer = setInterval(animate, time);
    }else{
        clearInterval(timer);
    }
}

var isVis = false;
var inc = 0;
var timer = setInterval(function(){
    if(isVis){
        addClasses();
        inc++;
    }else{
        removeClasses();
        inc = 0;
    }
}, 1000);

addEventListener('scroll', function(evt){
    pagePos = evt.pageY;
    currPos = gallery.offsetTop;
    winHeight = window.innerHeight;
    // console.log( (currPos - pagePos) - (winHeight - 200) );
    if( (currPos - pagePos) - (winHeight - 200) < 0){
        intManager(true, addClasses, 1000);
        // isVis = true;
    }else{
        intManager(false, addClasses, 1000);
        // isVis = false;
    }
});

addEventListener('resize', function(){
    winHeight = window.innerHeight;
});

function addClasses(){
    // console.log('tick');
    timer;
    console.log(inc);
}
function removeClasses(){
    //console.log();
    clearInterval(timer);
    console.log('removed');
}
*/
