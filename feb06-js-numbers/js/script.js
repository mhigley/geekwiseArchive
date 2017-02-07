var myString = 'This is a string, a name & pizza',
    myNumber = 42,
    myBool = true,
    myFloat = 5.2,
    myArray = ['red', 8, false, true, 'chef boyardee'],
    myObject = {
        spaghetti: true,
        noodles: false,
        ramen: true,
        ravioli: 'show me the formuoli',
        eight: 8
    };

// console.log(myBool);
// console.log(myString.indexOf('i', 3));
// console.log(myArray[4]);
// console.log(myObject.ravioli);

/*
    Number Object
*/
var numOne = 2;
var numTwo = new Number(5);

// console.log(numOne);
// console.log(numTwo);

var numThree = '3';
var numFour = '5.2';

// console.log( parseInt(numThree) );
// console.log( parseFloat(numFour) );

var numFive = 'Matthew';
// console.log( parseInt(numFive) );
// console.log( parseFloat(numFive) );

if( isNaN(numFive) ){
    // alert('its not a number');
}else{
    // alert('it is a number');
}

// parseInt
// parseFloat
// isNaN


// alert('Wha?');
// var userLang = confirm('Do you speak it?');
// console.log(userLang);

// var formuoli = prompt('What is your favorite flavor of ravioli');
// console.log(formuoli);

// var firstName = prompt('what is your first name?');
// prompt user for two more responses
// concatenate all responses into single console statment

// var userAge = prompt('what is your age?');
// console.log( parseInt(userAge) );

var userName = prompt("What is your name?");

var intro = "Welcome to my story " + userName + ". What is your dogs name?";
// alert(intro);

// All 3 alerts (alert, prompt, confirm)
// Utilize 4 objects. (String, Number, Float, Boolean)
// Minimum of 10 variable saves
// Minimum of 5 confirms
// Use 1 if statement
// Use 2 mathematical operations (+, -, *, /)
// Assumed usage of concatenation
/*
    if( isNaN(numFive) ){
        // alert('its not a number');
    }else{
        // alert('it is a number');
    }
*/

var userResp = confirm('are you a boy');
if(userResp){
    alert('yay. youre a boy');
    var gender = "boy";
}else{
    alert('youra a girl then.');
    var gender = "girl";
}
var userGender = 'welcome young'+ gender;
alert(userGender);
