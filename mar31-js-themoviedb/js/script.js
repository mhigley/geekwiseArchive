(function(){
    getReq('env.json', setVars);
}());

function getReq(url, callback){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            callback(JSON.parse(req.responseText));
        }else{
            console.log('error', req.statusText);
        }
    }
    req.send(null);
}

var myVars;

function setVars(data){
    myVars = envVars();
    console.log(myVars.get_url());

    myVars.set_api_key(data.api_key);
    console.log(myVars.get_api_key());

    myVars.set_read_access(data.read_access);
    console.log(myVars.get_read_access());

    getMovies();
}

function getMovies(){
    var url = myVars.get_url() + '3/search/movie?api_key=' + myVars.get_api_key() + '&language=en-US&page=1&query=rocky';
    getReq(url, parseMovies);
}

function parseMovies(movies){
    console.log(movies.results);

    var main = document.querySelector('main'),
        ul = document.createElement('ul'),
        li, poster_path, title, tagline, overview, homepage;

    main.appendChild(ul);

    movies.results.forEach(function(e, i){
        li = document.createElement('li'),
        poster_path = document.createElement('img'),
        title = document.createElement('h1'),
        tagline = document.createElement('h3'),
        overview = document.createElement('p'),
        homepage = document.createElement('a');

        poster_path.src = 'http://image.tmdb.org/t/p/w500' + e.poster_path;
        title.textContent = e.title;
        tagline.textContent = e.tagline;
        overview.textContent = e.overview;
        homepage.href = e.homepage;
        homepage.textContent = 'read more >>';

        li.append(poster_path, title, tagline, overview, homepage);
        ul.appendChild(li);
        main.appendChild(ul);
    });
}

function envVars(){
    var url = 'https://api.themoviedb.org/', api_key, read_access;
    return {
        set_api_key: function(data){
            api_key = data;
        },
        set_read_access: function(data){
            read_access = data;
        },
        get_url: function(){
            return url;
        },
        get_api_key: function(){
            return api_key;
        },
        get_read_access: function(){
            return read_access;
        }
    };
}
