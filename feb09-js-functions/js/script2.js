function getUserName(){
    var userName = prompt('whats your name?');
    var userMsg = 'Hello ' + userName + '!';
    return 'Hello ' + userName + '!';
}
function alertUserName(){
    alert( getUserName() );
}
alertUserName();
