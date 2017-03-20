const API_KEY = 'api_key=f972028bdc47c4edfe3b4d252c2c3f0b',
    URL_ROOT = 'https://api.themoviedb.org/3',
    IMG_URL = 'https://image.tmdb.org/t/p/';

var videos = '/movie/550/videos?',
    movie = '/movie/550?',
    search = '/search/company?',
    searchMore = '/search/movie?language=en-US&query=rocky&page=1&',
    config = '/configuration?',
    genre = '/genre/movie/list?',
    poster = IMG_URL+'w185',
    backdrop = IMG_URL+'original';

var pageObj = [];
var searchObj = [];

// variable event watchers !!
// js promises

function myCallback(movieData){
    pageObj.push(movieData);
    console.log(pageObj, 'added movie data');
}

function xhrReq(args, arr, callback){
    // i = (typeof i !== 'undefined') ? i : 0;
    var req = new XMLHttpRequest();
    req.withCredentials = false;
    req.open('get', URL_ROOT+args+API_KEY);
    req.send(null);
    req.onload = function(e){
        if(req.readyState === 4 && req.status === 200){
            console.log("success", req.statusText);
            // arr[i] = JSON.parse(req.responseText);
            callback(JSON.parse(req.responseText));
        }else{
            console.log("error", req.statusText);
        }
    };
}

(function(){
    for(var i = 0; i < arguments.length; i++){
        console.log(i);
        xhrReq(arguments[i], pageObj, myCallback);
    }
}(genre, movie));


var searchForm = document.querySelector('nav form');
searchForm.addEventListener('mouseenter', function(e){
    this.className = 'searchOpen';
});
// searchForm.addEventListener('mouseleave', function(e){
//     this.className = '';
// });

function searchBox(e){
    e = e || window.event;
    if(e.keyCode == 13){
        e.preventDefault();
        console.log(e.target.value);
        e.target.value = '';
    }
}



function buildPage(){
    console.log(pageObj);

    var hdr = document.querySelector('header'),
        h1 = document.createElement('h1');
    hdr.appendChild(h1);

    // hdr.style.backgroundImage = 'url(img/'+arr.pages[0].hdr_img+')';
    // h1.textContent = arr.pages[0].tag;
}

/*
function request(){
    var reqObj = JSON.parse(this.responseText);
    console.log(reqObj);
    setFeatured(reqObj);
}

var data = '{}';

var req = new XMLHttpRequest();
req.withCredentials = false;

req.addEventListener('load', request);
req.open('get', URL_ROOT+'movie/500'+QUERY+API_KEY, true);
req.send(data);

var hdr = document.querySelector('header.featured'),
    hdrPoster = document.querySelector('header .poster'),
    hdrTitle = document.querySelector('header .title'),
    hdrTagline = document.querySelector('header .tagline');
console.log(hdr);
function setFeatured(obj){
    hdr.style.backgroundImage =
        'linear-gradient(to top, hsla(0, 0%, 3%, .9) 5%, hsla(0, 0%, 8%, 0)),'+
        'url('+backdrop+obj.backdrop_path+')';
    hdrPoster.src = poster+obj.poster_path;
    hdrTagline.textContent = obj.tagline;
    hdrTitle.textContent = obj.title;
}
*/
