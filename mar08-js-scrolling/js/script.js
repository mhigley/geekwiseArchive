// var a;
//
// const GITHUB_URL = 'http://github.com/';
// console.log(GITHUB_URL);
//
// console.log('Notification' in window);

// if( !'Notification' in window ){
//     console.log('not available');
// }else{
//     console.log('is available');
// }

/*
var btn = document.querySelector('button');

if(!'childElementCount' in btn){
    itIsnt();
}else{
    itIs();
}


function itIs(){
    alert('The method is available');
}
function itIsnt(){
    alert('The method is NOT available');
}
*/
/*
(function(){
    var logo = document.querySelector('h1');
    var logoLen = logo.textContent;
    var logoArr = [];

    for(var i = 0; i < logoLen.length; i++){
        logoArr.push(logoLen[i]);
    }

    logo.innerHTML = '';

    logoArr.forEach(function(e, i){
        logo.innerHTML += '<span>'+logoArr[i]+'</span>';
    });
}());
*/



var logo = document.querySelector('h1');
var nav = document.querySelector('nav');
var hero = document.querySelector('header div');
var sec1 = document.querySelector('section:nth-of-type(1)');
var sec2 = document.querySelector('section:nth-of-type(2)');
var sec3 = document.querySelector('section:nth-of-type(3)');

var dist = 0,
    navHeight = nav.clientHeight,
    heroHeight = hero.clientHeight,
    winHeight = window.innerHeight;

if(winHeight > heroHeight){
    sec1.classList.add('vis');
}
if(winHeight > (heroHeight+sec1.clientHeight)){
    sec2.classList.add('vis');
}
if(winHeight > (heroHeight+sec1.clientHeight+sec2.clientHeight)){
    sec3.classList.add('vis');
}
console.log(sec2);
window.addEventListener('resize', function(evt){
    navHeight = nav.clientHeight,
    heroHeight = hero.clientHeight,
    winHeight = window.innerHeight;

    // logo.innerHTML = window.innerHeight;
});
window.addEventListener('scroll', function(evt){
    dist = window.scrollY;
    if( ( (sec1.offsetTop - dist) - winHeight) + (sec1.clientHeight / 2) < 0 ){
        sec1.classList.add('vis');
    }else{
        sec1.classList.remove('vis');
    }
    if( ( (sec2.offsetTop - dist) - winHeight) + (sec2.clientHeight / 2) < 0 ){
        sec2.classList.add('vis');
    }else{
        sec2.classList.remove('vis');
    }
    if( ( (sec3.offsetTop - dist) - winHeight) + (sec3.clientHeight / 2) < 0 ){
        sec3.classList.add('vis');
    }else{
        sec3.classList.remove('vis');
    }

    /*
    navHeight = nav.clientHeight;


    if(dist > navHeight){
        // window.removeEventListener('scroll');
        nav.classList.add('fixed');
        window.setTimeout(function(){
            nav.classList.add('anim');
        }, 500);
    }else{
        nav.classList.remove('anim');
        window.setTimeout(function(){
            nav.classList.remove('fixed');
        }, 500);
    }
    */
});
// function
