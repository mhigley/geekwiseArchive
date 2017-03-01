/*
var a = document.getElementById();
var b = document.getElementsByClassName();
var c = document.getElementsByTagName();
var d = document.querySelector();
var e = document.querySelectorAll();
*/

var contactForm = document.querySelector('#contactForm'),
    contactBtn = document.querySelector('#contactForm input[type="submit"]'),
    loginForm = document.querySelector('#loginForm'),
    loginBtn = document.querySelector('#loginForm input[type="submit"]'),
    custom = document.querySelector('.custom');

var contactArr = [],
    loginArr = [];

var username = '';

if(localStorage.getItem('username')){
    username = localStorage.getItem('username');
    alert(username + 'Please enter your password to continue.');
    password();
}else{
    alert('Please log in.');
    login();
}

console.log(username);

contactBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    for(var i = 0; i < contactForm.elements.length - 1; i++){
        if(contactForm.elements[i].type !== 'checkbox'){
            contactArr.push(contactForm.elements[i].value);
        }
        if(contactForm.elements[i].type === 'checkbox' && contactForm.elements[i].checked){
            contactArr.push(true);
        }
    }
    console.log(contactArr);
});

function login(){
    loginBtn.addEventListener('click', function(evt){
        evt.preventDefault();

        for(var i = 0; i < loginForm.elements.length - 1; i++){
            if(loginForm.elements[i].type === 'text'){
                localStorage.setItem('username', loginForm.elements[i].value)
            }else{
                sessionStorage.setItem('password', MD5(loginForm.elements[i].value));
            }
        }
        custom.textContent = 'Hello '+localStorage.getItem('username')+'.';
        for(var i = 0; i < contactForm.length; i++){
            contactForm.elements[i].disabled = false;
        }
    });
}
function password(){
    loginBtn.addEventListener('click', function(evt){
        evt.preventDefault();

        if(MD5(loginForm.elements[1].value) === sessionStorage.getItem('password')){
            alert('Passwords match. You may continue.');
        }else{
            alert('Your password was wrong. You suck.');
        }
    });
}

/*
    .setItem('key', 'value');
    .getItem('key');
    .removeItem('key');
    .clear();
*/
