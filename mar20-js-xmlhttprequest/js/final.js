(function(){
    getReq('/env.json', envVars);
}());

function envVars(data){
    init(data);
}

function init(vars){
    const ROOT_URL = 'https://api.github.com/';
    const CLIENT_ID = vars.github.CLIENT_ID;
    const CLIENT_SECRET = vars.github.CLIENT_SECRET;
    getReq(ROOT_URL+'users/mhigley?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET, githubObj);
}

function getReq(url, cb){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        req.readyState === 4 && req.status === 200 ? cb(JSON.parse(req.responseText)) : console.log('err', req.statusText);
    };
    req.send(null);
}

function githubObj(data){
    console.log(data);
    var main = document.querySelector('main'),
        img = document.createElement('img'),
        h1 = document.createElement('h1');
    img.src = data.avatar_url;
    h1.textContent = data.name;
    main.append(h1, img);
}
