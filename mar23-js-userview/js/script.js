alert('test');

(function(){
    (function(){
        getReq('env.json', setVar);
    }());

    var myVars;

    function envVars(){
        var url = 'https://api.github.com/', id, secret;
        return {
            getUrl: function(){
                return url;
            },
            getID: function(){
                return id;
            },
            getSecret: function(){
                return secret;
            },
            setID: function(data){
                id = data;
            },
            setSecret: function(data){
                secret = data;
            }
        };
    }

    function getReq(url, cb){
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function(){
            if(req.readyState === 4 && req.status === 200){
                cb( JSON.parse(req.responseText) );
            }else{
                console.log('err', req.statusText);
            }
        }
        req.send(null);
    }

    function setVar(obj){
        myVars = envVars();
        myVars.setID('client_id='+obj.client_id);
        myVars.setSecret('client_secret='+obj.client_secret);
        setSearch();
    }

    function setSearch(){
        var url = myVars.getUrl();
        var auth = myVars.getID()+'&'+myVars.getSecret();

        var searchInput = document.querySelector('nav input[type="search"]'),
            searchSubmit = document.querySelector('nav input[type="submit"]');

        searchSubmit.addEventListener('click', function(evt){
            evt.preventDefault();
            getReq( url+'search/users?q='+searchInput.value+'&'+auth, getUsers );
        });
    }

    function getUsers(users){
        console.log(users);
        var main = document.querySelector('main'),
            ul = document.createElement('ul'), li, img, a;
        main.innerHTML = '';
        ul.id = 'userArr';
        main.appendChild(ul);

        users.items.forEach(function(e, i){
            a = document.createElement('a'),
            li = document.createElement('li'),
            img = document.createElement('img');

            img.src = e.avatar_url;
            a.href = '#'+e.login;
            a.setAttribute('alt', e.login);

            a.appendChild(img);
            li.appendChild(a);
            ul.appendChild(li);
        });

        setUsers();
    }

    function setUsers(){
        var url = myVars.getUrl();
        var auth = myVars.getID()+'&'+myVars.getSecret();

        var users = document.querySelectorAll('#userArr li');
        users.forEach(function(e, i){
            e.addEventListener('click', function(){
                getReq(url+'users/'+this.firstChild.getAttribute('alt')+'?'+auth, viewUser );
            });
        });
    }

    function viewUser(user){
        console.log(user);
        var overlay = document.createElement('div'),
            section = document.createElement('section'),
            img = document.createElement('img'),
            h1 = document.createElement('h1'),
            btn = document.createElement('button'),
            icon = document.createElement('i');

        overlay.id = 'overlay';
        icon.className = 'fa fa-close';
        img.src = user.avatar_url;
        h1.textContent = user.login;

        btn.appendChild(icon);
        section.append(btn, img, h1);
        overlay.appendChild(section);
        document.body.appendChild(overlay);

        btn.addEventListener('click', function(evt){
            overlay.remove(overlay);
        });
    }
}());
