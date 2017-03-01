localStorage.clear();

if(!localStorage.getItem('user')){
    console.log('No storage key found. User must log in to continue.');
    // activateLogin();
}
/*
var loginForm =
    '<form>'+
        '<h6>Login</h6>'+
        '<label>'+
            '<span>username</span>'+
            '<input type="text" placeholder="username">'+
        '</label>'+
        '<label>'+
            '<span>password</span>'+
            '<input type="password" placeholder="password">'+
        '</label>'+
        '<label>'+
            '<span></span>'+
            '<input type="submit" value="go">'+
        '</label>'+
    '</form>';


*/
/*
var login = document.querySelector('#login form').elements;
var loginBtns = [];
for(var i = 0; i < login.length; i++){
    if(login[i].type === 'submit'){
        login[i].addEventListener('click', submitBtn);
    }else{
        loginBtns.push(login[i]);
    }
}
*/
