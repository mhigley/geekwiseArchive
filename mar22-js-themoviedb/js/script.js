(function(){
    getReq('env.json', init);
}());

function getReq(url, callback){
    var env = new XMLHttpRequest();
    env.open('GET', url);
    env.onload = function(){
        if(env.readyState === 4 && env.status === 200){
            callback(JSON.parse(env.responseText));
        }else{
            console.log('error', env.statusText);
        }
    }
    env.send(null);
}

function init(vars){
    const ROOT_URL = 'https://api.themoviedb.org',
        V3AUTH = vars.themoviedb.v3auth,
        V4AUTH = vars.themoviedb.v4auth,
        EXAMPLE = vars.themoviedb.example;

    var searchUrl = ROOT_URL+'/3/search/movie?page=1&language=en-US&include_adult=false&api_key='+V3AUTH+'&query=';

    initSearch(searchUrl);
}

function showMovie(url, auth){
    var showMovie = document.querySelector();
}

function initSearch(url){
    var searchForm = document.querySelector('nav input[type="search"]'),
        searchBtn = document.querySelector('nav input[type="submit"]');

    searchBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        if(searchForm.value){
            getReq(url+searchForm.value, searchMovies);
        }
    });
}

function searchMovies(movies){
    console.log(movies);

    var ul = document.querySelector('.searchResults'),
    li, h1, img, p;

    ul.innerHTML = '';

    movies.results.forEach(function(e, i){
        li = document.createElement('li'),
        h1 = document.createElement('h1'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        a = document.createElement('a');

        !e.title ? h1.textContent = e.original_title : h1.textContent = e.title;
        !e.poster_path ? img.src='http://placehold.it/154x225' : img.src='https://image.tmdb.org/t/p/w154/'+e.poster_path;
        p.textContent = e.overview;
        a.href = ''

        li.append(img, h1, p);
        ul.appendChild(li);
    });
}
