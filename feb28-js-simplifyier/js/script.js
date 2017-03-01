// target button and create a new javascript object of it
// add a 'click' event listener
// DO NOT USE A VARIABLE!!

// var btn = <-- NO NO!!
/*
document.querySelector('button').addEventListener('click', function(){
    // console.log( add(7, 3, 2) );
    console.log( addEx(6, 2, 5, 6, 'matt', 3, 7, 2, 6, 7, 5643, 7) );
});
*/

// in the root, log your first name and last name concatinated together
// your first name is RETURNed from a 'firstName' function
// your last name is RETURNed from a 'lastName' function

console.log(firstName() + ' ' + lastName());

function firstName(){
    return 'Matthew';
}
function lastName(){
    return 'Higley';
}

// in the index page, add four inputs. 2 text inputs 1 email and 1 submit
// get all values from the form element

document.querySelector('input[type="submit"]').addEventListener('click', function(evt){
    evt.preventDefault();
    getInfo();
});
var form = document.querySelector('form');

function getInfo(){
    console.log(
        'Welcome ' + getName(form) + 'to your site. Your email is ' + getEmail(form) + '. You signed up for the following subscriptions ' + getChecks(form)
    );
}
function getName(arr){
    var names = '';
    for(var i = 0; i < arr.elements.length; i++){
        if(arr.elements[i].type === 'text'){
            names += arr.elements[i].value + ' ';
        }
    }
    return names;
}

function getEmail(arr){
    var emails = '';
    for(var i = 0; i < arr.elements.length; i++){
        if(arr.elements[i].type === 'email'){
            emails += arr.elements[i].value + ' ';
        }
    }
    return emails;
}

function getChecks(arr){
    var checks = '';
    for(var i = 0; i < arr.elements.length; i++){
        if(arr.elements[i].type === 'checkbox' && arr.elements[i].checked){
            checks += arr.elements[i].value + ' ';
        }
    }
    return checks;
}

// preventDefault()
// form.elements
// for loops
// i.e.: for(var i = 0; i < el.length; i++){}
// pass form object into BOTH functions
// if() statement
// return statement














// create a function expression that is NOT self invoking
// call function from within click listener passing in two(2) arguments
// from within function console ARGUMENTS object

var addEx = function(){
    console.log(arguments);
    var total = 0;

    for(var i = 0; i < arguments.length; i++){
        if(typeof arguments[i] !== 'string'){
            total = arguments[i] + total;
        }
    }
    return total;
};






















// create a new function that accepts one(1) argument
// (need help? google javascript arguments and parameters.)
// RETURN the argument plus 10

// invoke this new function, passing in a number, from within the click listener
// log answer

function add(num1, num2, num3){
    return (num1 + num2) / num3;
}

// modify your add function to accept two(2) arguments
// add and RETURN
// ------------------------------------
// modify your add function to accept three(3) arguments
// add first two params and divide sum by third param
// PEMDAS
