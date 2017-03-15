var req = new XMLHttpRequest(), reqObj;
req.addEventListener('load', function(){
    reqObj = JSON.parse(this.responseText);
    getPage(reqObj);
    buildNav(reqObj);
});
req.open('get', 'js/sample.json', true);
req.send();

var main = document.querySelector('main');

window.onhashchange = getPage;

function getPage(){
    if(location.hash === ''){
        main.innerHTML = reqObj.pages[0].content;
    }else{
        reqObj.pages.forEach(function(e, i){
            if(e.url === location.hash){
                main.innerHTML = '<p>'+e.content+'</p>';
                whatPage(e);
            }
        });
    }
}

function buildNav(arr){
    var nav = document.querySelector('nav'),
        ul = document.createElement('ul'),
        li, a;
    nav.appendChild(ul);

    arr.pages.forEach(function(e, i){
        li = document.createElement('li'),
        a = document.createElement('a');
        a.textContent = e.page;
        a.href = e.url;
        li.appendChild(a);
        ul.appendChild(li);
    });
}

function whatPage(obj){
    switch(obj.url){
        case '#products':
            var ul = document.createElement('ul'), li;
            ul.id = 'products';
            main.appendChild(ul);
            obj.products.forEach(function(e, i){
                li = document.createElement('li'),
                    img = document.createElement('img'),
                    h3 = document.createElement('h3'),
                    price = document.createElement('p'),
                    desc = document.createElement('p'),
                    a = document.createElement('a');
                li.append(img, h3, price, desc);
                img.src = 'img/'+e.img;
                h3.textContent = e.product;
                price.textContent = e.cost;
                desc.textContent = e.description;
                ul.appendChild(li);
            });
            break;
    }
}
