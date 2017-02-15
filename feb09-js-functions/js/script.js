// IIFE - Immediately Invoked Function Expression
// (function(){

    // Function Declaration
    function funcDec(userMessage, userAge){
        // alert('this is from the declaration');
        console.log(userAge, userMessage);
    }
    // PARAMETERS & ARGUMENTS
    funcDec('goodbye', 21);
    // funcDec(); // calling (aka invoking, aka running) the function
    var myNum; // undefined variable
    // Function Expression
    var funcExp = function(){
        myNum = 3;
        // funcDec();
        // alert('this is from the expression');
    }; // immediately invoke the function with ()
    // funcExp(); // calling (aka invoking, aka running) the function

    // HOISTING - places all function DECLARATIONS and variable names to memory before calling (aka invoking aka running) scripts

    // SCOPE - a variable that exists ONLY within the function where it was created

    // RETURN

    function getFullName(a, b){
        return a + ' ' + b;
    }

    console.log( getFullName('Matt', 'Higley') );

    // Create a new function declaration
    // From inside the function ask user for first name
    // Concatenate to create a welcome message
    // return message into 2nd function
    // alert message from this other function
    // NO PARAMETERS!!

    /*

    function a(){
        get user name
        concat a message
        return message
    }
    function b(){
        alert message
    }
    b();

    */

    function getUserName(){
        return 'Hello ' + prompt('what your name') + '!';
    }
    function alertUserName(){
        alert( getUserName() );
    }
    alertUserName();

// }());
