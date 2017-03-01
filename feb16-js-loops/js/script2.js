var addBtn = document.getElementById('addBtn');
var removeBtn = document.getElementById('removeBtn');

addBtn.addEventListener('click', function(){
    // alert('add');
    getUserName();

});
removeBtn.addEventListener('click', function(){
    alert('remove');
});

function getUserName(){
    var userName = prompt('enter your username');
    alert(userName);
}
