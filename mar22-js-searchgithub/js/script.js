(function(){
    getReq('env.json', init);
    // getReq('https://api.github.com/users/mhigley', getUser);
}());

function getReq(url, callback){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            callback( JSON.parse(req.responseText) );
        }else{
            console.log('error', req.statusText);
        }
    };
    req.send(null);
}

function init(vars){
    const ROOT_URL = 'https://api.github.com/';
    const CLIENT_ID = vars.client_id;
    const CLIENT_SECRET = vars.client_secret;

    var main = document.querySelector('main'),
        searchInput = document.querySelector('form input[type="search"]'),
        searchSubmit = document.querySelector('form input[type="submit"]');

    searchSubmit.addEventListener('click', function(evt){
        main.innerHTML = '';
        evt.preventDefault();
        getReq( ROOT_URL+'search/users?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET+'&q='+searchInput.value, getUser );
        //"https://api.github.com/search/users?q="
    });
}

function getUser(user){
    console.log(user.items);
    var main = document.querySelector('main'),
        ul = document.createElement('ul'), li, img;
    main.appendChild(ul);

    user.items.forEach(function(e, i){
        li = document.createElement('li'),
        img = document.createElement('img');

        img.src = e.avatar_url;
        li.appendChild(img);
        ul.appendChild(li);
    });
    /*
    var main = document.querySelector('main'),
        img = document.createElement('img'),
        h1 = document.createElement('h1');

    h1.textContent = user.login;
    img.src = user.avatar_url;
    main.append(h1, img);
    */
}
