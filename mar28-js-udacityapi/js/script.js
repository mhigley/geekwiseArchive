// (function(){
//     getReq('https://www.udacity.com/public-api/v0/courses', init);
// }());
//
// function getReq(url, cb){
//     var req = new XMLHttpRequest();
//     req.open('GET', url);
//     req.onload = function(){
//         if(req.readyState === 4 && req.status === 200){
//             cb(JSON.parse(req.responseText));
//         }else{
//             console.log('err', req.statusText);
//         }
//     }
//     req.send(null);
// }
//
// function init(obj){
//     var main = document.querySelector('main'),
//         ul = document.createElement('ul'), li, title, image, subtitle, summary, homepage;
//
//     main.appendChild(ul);
//
//     console.log(obj.courses);
//     obj.courses.forEach(function(e, i){
//         li = document.createElement('li'),
//         title = document.createElement('h2'),
//         image = document.createElement('img'),
//         subtitle = document.createElement('p'),
//         summary = document.createElement('p'),
//         homepage = document.createElement('a');
//
//         homepage.href = e.homepage;
//         homepage.target = '_blank';
//         homepage.textContent = 'Learn More...';
//         homepage.className = 'btn';
//         subtitle.textContent = e.subtitle;
//         summary.innerHTML = e.summary;
//         if(e.image){
//             image.src = e.image;
//         }else{
//             image.src = 'http://placehold.it/1500x1000';
//         }
//         image.setAttribute('alt', e.title);
//         title.textContent = e.title;
//         li.append(image, title, subtitle, summary, homepage);
//         ul.appendChild(li);
//     });
// }

(function(){
    getReq('https://www.udacity.com/public-api/v0/courses', init);
}());

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

function init(data){
    console.log(data);
    var main = document.querySelector('main'),
        ul = document.createElement('ul'), li, expected_learning, homepage, image, required_knowledge;

    main.appendChild(ul);

    data.degrees.forEach(function(e, i){
        li = document.createElement('li'),
        expected_learning = document.createElement('p'),
        homepage = document.createElement('a'),
        image = document.createElement('img'),
        required_knowledge = document.createElement('p');

        expected_learning.innerHTML = e.expected_learning;
        // i have one favorite student
        homepage.href = e.homepage;
        homepage.textContent = 'Learn More...';
        // everyone gets an A = 'Learn Less...';
        homepage.target = '_blank';
        if(e.image){
            image.src = e.image;
        }else {
            image.src = 'http://placehold.it/1000x600';
            // i love kingsburg better than fowler
        }
        required_knowledge.innerHTML = e.required_knowledge;

        li.append(image, required_knowledge, expected_learning, homepage);
        // i dont play video games
        ul.appendChild(li);
    });
}
