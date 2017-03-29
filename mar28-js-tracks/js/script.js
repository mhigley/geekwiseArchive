(function(){
    getReq('https://www.udacity.com/public-api/v0/courses', init);
}());

function getReq(url, cb){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            cb(JSON.parse(req.responseText));
        }else{
            console.log('err', req.statusText);
        }
    }
    req.send(null);
}

function init(tracks){
    var obj = tracks.tracks;

    var main = document.querySelector('main'),
        ul = document.createElement('ul'), li, name, description, courses, course, courseIdx;

    main.appendChild(ul);

    obj.forEach(function(e, i){
        console.log(e);
        li = document.createElement('li'),
        name = document.createElement('h2'),
        description = document.createElement('p'),
        courses = document.createElement('ol');

        e.courses.forEach(function(f, j){
            course = document.createElement('li'),
            courseIdx = document.createElement('p');
            courseIdx.textContent = f;

            course.appendChild(courseIdx);
            courses.appendChild(course);
        });
        name.textContent = e.name;
        description.textContent = e.description;

        li.append(name, description, courses);


        ul.appendChild(li);
    });
}
