(function(){
    getReq('env.json', setEnv);
}());

function getReq(url, cb){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            cb(JSON.parse(req.responseText));
        }else{
            console.log('error', req.statusText);
        }
    }
    req.send(null);
}

var myVars;

function setEnv(envs){
    myVars = envVars();
    myVars.set_root_url(envs.root_url);
    myVars.set_img_url(envs.img_url);
    myVars.set_api_key(envs.api_key);
    myVars.set_access_token(envs.access_token);

    var url = myVars.get_root_url()+'search/movie?api_key='+myVars.get_api_key()+'&language=en-US&page=1&query=Jurassic';

    getReq(url, getMovies);
}

function getMovies(movies){
    var main = document.querySelector('main'),
        section = document.createElement('section'),
        h1 = document.createElement('h1'),
        ul = document.createElement('ul'), li, poster_path, div, title, meta, span, stars, star, starIcon, overview;
    main.innerHTML = '';
    h1.textContent = 'Trending Movies';
    section.append(h1, ul);
    main.appendChild(section);

    movies.results.forEach(function(e){

        li = document.createElement('li');
        div = document.createElement('div');
        poster_path = document.createElement('img');
        meta = document.createElement('p');
        span = document.createElement('span');
        stars = document.createElement('ul');
        title = document.createElement('h2');
        overview = document.createElement('p');

        var vote = e.vote_average / 2;
        var rating = Math.floor(vote);
        var remainder = vote % 1;

        for(var i = 0; i < rating; i++){
            star = document.createElement('li');
            star.innerHTML = '<i class="fa fa-star"></i>';
            stars.appendChild(star);
        }
        if(remainder > .5){
            star = document.createElement('li');
            star.innerHTML = '<i class="fa fa-star-half-o"></i>';
            stars.appendChild(star);
        }
        stars.className = 'rating';

        poster_path.src = myVars.get_img_url()+'w500'+e.poster_path;

        title.textContent = e.title;
        span.textContent = e.release_date.split('-').splice(0, 1);
        meta.append(span, stars);
        overview.textContent = e.overview.split('.').splice(0, 1)+'.';

        div.append(title, meta, overview);
        li.append(poster_path, div);
        ul.appendChild(li);
    });

    var randMovie = [957, 85, 238, 3034, 562];
    var getRandMovie = Math.floor(Math.random() * randMovie.length);

    console.log(getRandMovie);
    console.log(randMovie[getRandMovie]);
    var url = myVars.get_root_url()+'movie/'+randMovie[getRandMovie]+'?api_key='+myVars.get_api_key();
    getReq(url, featureSetup);

    pageSetup();
}

function envVars(){
    var root_url, img_url, api_key, access_token;
    return {
        set_root_url: function(data){
            root_url = data;
        },
        set_img_url: function(data){
            img_url = data;
        },
        set_api_key: function(data){
            api_key = data;
        },
        set_access_token: function(data){
            access_token = data;
        },
        get_root_url: function(){
            return root_url;
        },
        get_img_url: function(){
            return img_url;
        },
        get_api_key: function(){
            return api_key;
        },
        get_access_token: function(){
            return access_token;
        }
    }
}
function featureSetup(movie){
    var featured = document.querySelector('#featured'),
        title = document.querySelector('#featured .title'),
        summary = document.querySelector('#featured .summary'),
        starring = document.querySelector('#featured .starring'),
        director = document.querySelector('#featured .director');

    console.log(movie);
    featured.style.backgroundImage = 'linear-gradient(to right, hsla(0, 0%, 0%, .8) 25%, hsla(0, 0%, 0%, 0) 50%), url(../img/nav-shadow.png), url(https://image.tmdb.org/t/p/original'+movie.backdrop_path+')';
    title.textContent = movie.original_title;
    summary.textContent = movie.overview;
}

function pageSetup(){
    var searchForm = document.querySelector('form'),
        search = document.querySelector('form input[type="search"]'),
        searchSubmit = document.querySelector('form input[type="submit"]'),
        searchBtn = document.querySelector('form button');

    searchForm.addEventListener('submit', function(evt){
        evt.preventDefault();
        var userSearch = search.value;
        search.value = '';
        searchForm.className = '';

        var url = myVars.get_root_url()+'search/movie?api_key='+myVars.get_api_key()+'&language=en-US&page=1&query='+userSearch;
        getReq(url, getMovies);
    });

    searchBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        searchForm.className = 'search';
    });

}
