// prompt user for a number
// saves input to a variable

// function expression:
// - supply argument in invocation
// - logs user input with ARGUMENTS keyword
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
}

function getUserNum(){
    userNum = prompt('pick a number');
    getNum(userNum);
}
getUserNum();

// convert getUserNum function expression into a function declaration

// write an if statement that guarantees a number greater than zero
// log both case scenarios with appropriate messages

// create a loop function declaration accepting userNum
