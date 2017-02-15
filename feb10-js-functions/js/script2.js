/*
function getUserName(){
    return prompt('whats your name?').trim();
}
var editUserName = function(){
    var user = getUserName();
    var firstLetter = user.charAt(0).toUpperCase();
    var remainingLetters = user.substr(1, user.length - 1).toLowerCase();
    alertUserName(firstLetter+remainingLetters);
}();
function alertUserName(a){
    console.log(a);
}
*/
function a(){
    return prompt('whats your name?').trim();
}
var b = function(){
    var n = a();
    c( n.charAt(0).toUpperCase() + n.substr(1).toLowerCase() );
}();
function c(a){
    alert(a);
}
// var str = 'mATTHEW';
// var modStr = str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
// console.log(modStr);
// console.log(str.slice(1));
// console.log(str);
// console.log(str.substring(1));
// console.log(str);
// console.log(str.substr(1));
// console.log(str);
