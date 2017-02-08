(function(){ //IIFE - Immediately Invoked Function Excecutable

// var userName = prompt('what yo name?');
// var num1 = parseInt(prompt('pick a number'));
// var num2 = parseInt(prompt('pick another number'));

// Function Declaration
function funcDec(a, b, c){
    alert(a + (b + c));
}

// funcDec(userName, num1, num2);

// 1. Create a car object
// 2. Minimum of 3 properties and values

// 3. Write a function named myModel

// 4. Call the myModel function

// 5. Pass the car object into your function call

// 6. Alert the model of your car

var car = {
    make: 'jeep',
    model: 'wrangler',
    color: 'black'
};

function myModel(a){
    alert(a.model);
}
// parameter 'a' is SCOPED to function myModel

// myModel(car);

// Function Excecutable
// var funcEx = function(){
//     alert(arguments[0]);
//     // arguments create a collection of items
// }('Matthew', 7);


// 1. Create Two arrays:
//      the first is an array of 5 first names
//      the second is an array of 5 cereals
// 2. Using the proper array method, alphabetize both

// 3a. Use the first name elements & last cereal element
// 3b. Create a random number to select 1 name & 1 cereal

// 4. Write a function excecutable passing the name & cereal in (no parameters!!)
// 5. Concatenate both together creating your spy name
// 6. Alert to the window.

var names = ['kevin', 'cobi', 'david', 'monty', 'eric', 'gus', 'rosa', 'vanessa', 'waldo', 'al', 'marisa', 'haley'].sort();
var cereals = ['cheerios', 'chex', 'kix', 'fruity pebbles', 'captain crunch', 'shredded wheat', 'raisin bran', 'kashi', 'lucky charms', 'corn pops', 'cocoa puffs', 'cracklin oat bran'].sort();

// Math.random() gives a random Float between 0 and 1
// Math.round() if less than 0.5 rounds down, if 0.5 or greater round up
// Math.ceil() rounds up... Math.floor() rounds down
var randName = names[Math.floor(Math.random() * names.length)];
var randCereal = cereals[Math.floor(Math.random() * cereals.length)];

var spyname = function(){
    alert(arguments[0] + ' ' + arguments[1]);
}(randName, randCereal);

// var names = ['kevin', 'cobi', 'david', 'monty', 'eric', 'gus', 'rosa', 'vanessa', 'waldo', 'al', 'marisa', 'haley'].sort();
// var cereals = ['cheerios', 'chex', 'kix', 'fruity pebbles', 'captain crunch', 'shredded wheat', 'raisin bran', 'kashi', 'lucky charms', 'corn pops', 'cocoa puffs', 'cracklin oat bran'].sort();
//
// var randName = Math.ceil(Math.random() * names.length) - 1;
// var randCereal = Math.ceil(Math.random() * cereals.length) - 1;
//
// var spyname = function(){
//     alert(names[arguments[0]] + ' ' + cereals[arguments[1]]);
// }(randName, randCereal);









})();
