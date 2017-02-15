// using 3 functions
// in a function expression - get visitor username and strip out extra spaces
// call function declaration, capitalize first letter and lowercase all remaining letters.
// pass username into another function declaration that alerts username to screen
// function keyword
// .trim()
// .toLowerCase()
// .toUpperCase()
// .substr()
// .charAt()

/*
var a = (){

}();

b(){
}

c(){
}
*/


/*
var a = function(){
    var username = prompt('whats your name').trim();
    b(username);
}();

function b(user){
    var cased = user.charAt(0).toUpperCase() + user.substr(1).toLowerCase();
    c(cased);
}
function c(user){
    alert(user);
}
*/

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var div = document.getElementById('content');


btn1.addEventListener('click', function(){
    userFirstName = prompt('whats your first name?');
    // no var keyword makes it GLOBAL

    if( isNaN(userFirstName) ){
        // isNaN() checks if value is not a number. Returns true or false.
        btn2.disabled = false;
        btn1.disabled = true;
    }else{
        alert('please type your first name');
    }
});

btn2.addEventListener('click', function(){
    var userLastName = prompt('whats your first name?');
    // userLastName is SCOPED to this function, not accessible globally

    if( isNaN(userLastName) ){
        // alert(userFirstName + ' ' + userLastName);
        div.textContent = userFirstName + ' ' + userLastName;
        btn1.disabled = false;
        btn2.disabled = true;
    }else{
        alert('please type your last name');
    }
});

// Add a new <div> element to the index.html.
// Target it in JS
// Instead of alert() to the window, add text to new <div>
