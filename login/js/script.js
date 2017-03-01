// localStorage.setItem('user', 'Matthew');
localStorage.clear();

var login = document.getElementById('login');
var loginForm =
    '<form>'+
        '<h6>Login</h6>'+
        '<label>'+
            '<span>username</span>'+
            '<input type="text" name="user" placeholder="username">'+
        '</label>'+
        '<label>'+
            '<span>password</span>'+
            '<input type="password" name="pass" placeholder="password">'+
        '</label>'+
        '<label>'+
            '<span></span>'+
            '<input type="submit" value="go">'+
        '</label>'+
    '</form>';
login.innerHTML = loginForm;

document.querySelector('input[type="submit"]').addEventListener('click', function(e){
    e.preventDefault();
    getFormVals();
});
var form = document.querySelector('#login form');
function getFormVals(){
    var inputVals = form;
    console.log( dropCapInputs(inputVals) );
}

function dropCapInputs(arr){
    if(Array.isArray(arr)){
        arr.forEach(function(e, i){
            arr[i] = arr[i].toLowerCase();
        });
        return arr;
    }
}
/*
if(!localStorage.getItem('user')){
    console.log('No storage key found. User must log in to continue.');
    activateLogin();
    submitBtn();
}else{
    console.log('Storage key found. Please validate password.');
    deactivateLogin();
    submitBtn();
}

function activateLogin(){
    login.innerHTML = loginForm;
    document.querySelector('h6').textContent = 'Please login to continue.';
}
function deactivateLogin(){
    login.innerHTML = loginForm;
    document.querySelector('h6').textContent = 'Welcome back ' + localStorage.getItem('user') + '. Please enter your password to continue.';
    document.querySelector('input[name="user"]').value = localStorage.getItem('user');
}

function submitBtn(){
    document.querySelector('input[type="submit"]').addEventListener('click', function(e){
        e.preventDefault();
        var loginBtns = login.children;
        validateInput(loginBtns);
    });
}

function validateInput(arr){
    // console.log(arr);
    for(var i = 0; i < arr.length - 1; i++){
        console.log(arr[i]);
    }
}
*/


// loginBtns.forEach(function(e, i){
//     console.log(loginBtns[i]);
// });

document.querySelector('#login input[type="submit"]').addEventListener('click', function(e){
    e.preventDefault();
});
