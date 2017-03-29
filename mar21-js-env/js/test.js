(function(){
    var env = new XMLHttpRequest();
    env.open('GET', '/env.json');
    env.onload = function(){
        if(env.readyState === 4 && env.status === 200){
            console.log(env.responseText);
        }else{
            console.log('error', env.statusText);
        }
    };
    env.send(null);
}());
