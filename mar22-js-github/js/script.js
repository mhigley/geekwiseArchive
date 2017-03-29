(function(){
    getReq('env.json', init);
}());

function getReq(url, callback){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        req.readyState === 4 && req.status === 200 ?
            callback( JSON.parse(req.responseText) ) :
            console.log('success', req.statusText);
    };
    req.send(null);
}

function init(data){
    const ROOT_URL = 'https://api.github.com/';
    const CLIENT_ID = data.github.client_id;
    const CLIENT_SECRET = data.github.client_secret;

    var searchInput = document.querySelector('nav input[type="search"]');

    document.querySelector('nav input[type="submit"]').addEventListener('click', function(evt){
        evt.preventDefault();
        getReq( ROOT_URL+'search/users?q='+searchInput.value, searchUsers);
    });
}

function searchUsers(users){
    var main = document.querySelector('main'),
        ul = document.createElement('ul'),
        li, img, h1, p;
    main.innerHTML = '';
    ul.id = 'searchUsers';
    main.appendChild(ul);

    users.items.forEach(function(e, i){
        li = document.createElement('li'),
        img = document.createElement('img'),
        h1 = document.createElement('h1'),
        p = document.createElement('p');

        img.src = e.avatar_url,
        h1.textContent = e.login,
        p.textContent = e.html_url;

        li.append(img, h1, p);
        ul.appendChild(li);
    });
}
