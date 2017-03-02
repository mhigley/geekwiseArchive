// prompt user for a number
// saves input to a variable

// function expression:
// - supply argument in invocation
// - logs user input with ARGUMENTS keyword
var ul = document.createElement('ul');
var p = document.getElementsByTagName('p')[0];
document.body.insertBefore(ul, p);
var ulEl = document.getElementsByTagName('ul')[0];
var li;

var userNum = '';
var getNum = function(){
    // arguments[0]
    // parseInt()
    // Is it a number? Is it NOT a number?
    if(!isNaN(parseInt(arguments[0])) && arguments[0] > 0){
        console.log('you chose wisely');
        userLoop(parseInt(arguments[0]));
    }else{
        console.log('you chose poorly');
        getUserNum();
    }
};

function userLoop(num){
    console.log(num);
    for(var i = 1; i < num + 1; i++){
        // console.log('user loop ' + i);
        todoItemGen(i);
    }
}

// Create a for loop that logs each incrementation of the variable with a message. I.e.: 'loop number 1'

function todoItemGen(i){
    li = document.createElement('li');
    ulEl.appendChild(li).textContent = i;
}
// pass incrementor into todoItemGen
// using the .textContent method...
// add the incrementation as text into each li

function getUserNum(){
    userNum = prompt('pick a number');
    getNum(userNum);
}
getUserNum();

// convert getUserNum function expression into a function declaration

// write an if statement that guarantees a number greater than zero
// log both case scenarios with appropriate messages

// create a loop function declaration accepting userNum
