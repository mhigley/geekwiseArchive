/*
    MULTILINE COMMENT
    var externalJavascript = "wha da actual heck?";
     ^          ^          ^          ^           ^
    keyword   name     assignment   value        end
                        operator
*/

// SINGLELINE COMMENT

// VARIABLES
var camelCase; // Please use this!
var not_camel_case;
var camel_Case;
var $dollarCase;
var dollar$case;
var _underScore;

// var 1stVariable; No-No. Bad.
var firstVar;

// var var; No-No. Bad.
var variable;

var UppercaseCamel; // Please don't. For Constructor Objects Only.
var SUPERUPPERCASE; // Definitely don't.

/*
    JAVASCRIPT OBJECTS
        Number
        String
        Boolean
        Float
        Array
        Object
*/
// NUMBER OBJECT
var myNumberObject = 3;
var myNewNumberObject = myNumberObject.toString();

// console.log(myNumberObject);
// console.log(myNewNumberObject);

// STRING OBJECT
var myStringObject = "This is a string object";
var myOtherStringObject = 'This is also a string object';
// var myNonWorkingStringObject = 'This wont work";
// var myPoorGrammar = 'David's Basketball';
var myCorrectPoorGrammar = "David's Basketball";
var myOtherCorrectPoorGrammar = 'David\'s Basketball';

// console.log(myStringObject, myOtherStringObject);

// BOOLEAN OBJECT
var myBooleanTrue = false; // 0
var myBooleanFalse = true; // 1

// FLOAT OBJECT
var myFloatObject = 3.1;

// ARRAY OBJECT (identified with square brackets)
var myArrayObject = ['red', 8, true, ['r', 'b', 'g']];
// console.log(myArrayObject[3]);

// OBJECT OBJECT (identified with curley brackets)
var myObjectObject = {
    make: 'jeep',
    model: 'wrangler',
    color: 'black',
    year: 2014,
    package: function(){
        alert(this.make);
    }
};
// console.log(myObjectObject);

// JAVASCRIPT MATH

var a = 5;
var b = 17;

// create a new variable c that is the sum of a plus b
// console c

var c = a + b;
// console.log(c);

// create 3 new variables that calculate the value through subtraction, multiplication & division
// console each new variable

var d = a - b;
var e = a * b;
var f = a / b;
console.log(d, e, f);

var g = a % b; // modulus
console.log(g);
