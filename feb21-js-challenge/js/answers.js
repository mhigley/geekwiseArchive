var btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    var user = prompt('what\'s your username').trim();
    if(user.trim() === ''){
        alert('please don\'t only enter spaces. that\'s just mean.');
    }else if(user.length < 5){
        alert('your username needs more characters');
    }else{
        alert(user);
    }
});
var lis = document.getElementsByTagName('li');
for(var i = 0; i < lis.length; i++){
    // lis[i].style.color = 'red';
}

var blueLis = document.querySelectorAll('li:nth-child(odd)');
blueLis.forEach(function(x, y){
    // console.log(x);
    // console.log(y);
    blueLis[y].style.backgroundColor = 'lightblue';
});
