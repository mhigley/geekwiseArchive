/*
var btn = document.getElementById('btn');
var div = document.getElementsByTagName('div');
var classes = document.getElementsByClassName('list-four');

var lis = document.querySelectorAll('li:nth-child(odd)');
var ul = document.querySelector('ul');

lis.forEach(function(x, y){
    console.log(x);
    if(x.classList.contains('list-four')){
        lis[y].style.backgroundColor = 'pink';
    }else{
        lis[y].style.backgroundColor = 'purple';
    }
});


for(var i = 0; i < div.length; i++){
    div[i].addEventListener('mouseover', function(){
        alert('hovering the div');
    });
}

for(var j = 0; j < classes.length; j++){
    classes[j].addEventListener('click', function(){
        alert('clicked on the list item');
    });
}


btn.addEventListener('click', function(){
    var user = prompt('what\'s your username?');
    if(user.length < 5 || user.trim() === ''){
        alert('wrong');
    }else{
        alert(user);
    }

    // TERNARY OPERATOR
    // user.length >= 5 ? alert(user) : alert('too short');

    // OR === || (pipe characters)
    // AND === && (ampersand charcters)
});
*/

var input = document.querySelector('input[type="text"]');
var inputBtn = document.querySelector('input[type="submit"]');

inputBtn.addEventListener('click', function(e){
    e.preventDefault();
    var userName = input.value;
    console.log(userName);
});
