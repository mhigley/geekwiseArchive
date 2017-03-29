(function(){
    // getReq('https://api.spotify.com');
    getReq('env.json', setVars);
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
    };
    req.send(null);
}
var myVars;

function envVars(vars){
    var url = 'https://api.spotify.com/', key, secret;
    return {
        setKey: function(data){
            key = data;
        },
        setSecret: function(data){
            secret = data;
        },
        getKey: function(){
            return key;
        },
        getSecret: function(){
            return secret;
        },
        getUrl: function(){
            return url;
        }
    };
}

function setVars(obj){
    // console.log(obj);
    myVars = envVars();
    myVars.setKey(obj.key);
    myVars.setSecret(obj.secret);

    console.log(myVars.getKey());
    console.log(myVars.getSecret());
    getReq(myVars.getUrl()+'v1/artists/2RdwBSPQiwcmiDo9kixcl8', getMusic);
}

function getMusic(music){
    console.log(music);
    var main = document.querySelector('main'),
        section = document.createElement('section'),
        ul = document.createElement('ul'),
        li = document.createElement('li'),
        img = document.createElement('img'),
        h1 = document.createElement('h1');

    section.appendChild(ul);
    main.appendChild(section);

    img.src = music.images[0].url;
    h1.textContent = music.name;

    li.append(img, h1);
    ul.appendChild(li);


    // music.images.forEach(function(e, i){
    //
    //     li = document.createElement('li'),
    //     img = document.createElement('img');
    //
    //     img.src = e.url;
    //
    //     li.appendChild(img);
    //     ul.appendChild(li);
    // });
}
