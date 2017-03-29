(function(){
    var env = new XMLHttpRequest();
    console.log(env);
    env.open('GET', '/env.json');
    console.log(env);
    env.onload = function(){
        console.log(env);
    };
    env.send(null);
}());
