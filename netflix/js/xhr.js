/*
var main = document.querySelector('main');

var req = new XMLHttpRequest();
console.log('UNSENT', req.readyState);

req.open('get', 'https://api.github.com', true);
console.log('OPENED', req.readyState);

req.onprogress = function(){
    console.log('LOADING', req.readyState);
};

req.onload = function(){
    console.log('DONE', req.readyState);
}

req.send(null);
*/

/*
const URL_ROOT = 'https://api.github.com/';
var emojis = 'emojis';
var emojiObj = {};
var main, ul;

function createPage(emojis){
    for(emoji in emojis){
        var li = document.createElement('li'),
            img = document.createElement('img');

        img.src = emojis[emoji];
        li.appendChild(img);
        ul.appendChild(li);
    }
}

function getRequest(callback){
    var req = new XMLHttpRequest();
    req.open('get', URL_ROOT+emojis, true);
    req.send();

    req.onload = function(e){
        if(req.readyState === 4 && req.status === 200){
            console.log('success', req.statusText);
            callback(JSON.parse(req.responseText));
        }else{
            console.log('error', req.statusText);
        }
    }
}


(function(){
    main = document.querySelector('main'),
    ul = document.createElement('ul');
    main.append(ul);

    getRequest(createPage);
}());
*/



/**
*   DEMO
**/

/*
var githubBtn = document.querySelector('button'),
    main = document.querySelector('main'),
    ul = document.createElement('ul'),
    li, img, req;

main.appendChild(ul);

githubBtn.addEventListener('click', function(){
    makeReq(this, getData);
});

function makeReq(el, callback){
    var url = el.getAttribute('is');

    req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            console.log('success', req.statusText);
            // callback(JSON.parse(req.responseText));
        }else{
            console.log('error', req.statusText);
        }
    };
    req.send(null);
}

function getData(emojis){
    for(emoji in emojis){
        li = document.createElement('li'),
        img = document.createElement('img');

        img.src = emojis[emoji];
        li.appendChild(img);

        ul.appendChild(li);
    }
}
*/

/**
*   DEMO
**/

/*
var githubBtn = document.getElementById('emoji'),
    propsBtn = document.getElementById('props'),
    main = document.querySelector('main'),
    ul = document.createElement('ul'),
    li, img, req;

main.appendChild(ul);

githubBtn.addEventListener('click', function(){
    makeReq(this, getData);
});
propsBtn.addEventListener('click', function(){
    makeReq(this, getProps);
});

function makeReq(el, callback){
    var url = el.getAttribute('is');

    req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            console.log('success', req.statusText);
            callback(JSON.parse(req.responseText));
        }else{
            console.log('error', req.statusText);
        }
    };
    req.send(null);
}

function getData(emojis){
    ul.innerHTML = '';
    for(emoji in emojis){
        li = document.createElement('li'),
        img = document.createElement('img');

        img.src = emojis[emoji];
        li.appendChild(img);

        ul.className = 'emojiLayout';
        ul.appendChild(li);
    }
}

function getProps(props){
    ul.innerHTML = '';
    for(prop in props){
        li = document.createElement('li');
        li.textContent = prop + ' : ' + props[prop];

        ul.className = 'propsLayout';
        ul.appendChild(li);
    }
}
*/
