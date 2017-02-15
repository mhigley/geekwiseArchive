var myArr = ['red', 'orange','yellow'];

var colorArray = [];
var addBtn = document.getElementById('addBtn');
var removeBtn = document.getElementById('removeBtn');

addBtn.addEventListener('click', function(){
    // alert('from the add button');
    askForColor();
});
removeBtn.addEventListener('click', function(){
    alert('from the remove button');
});

function askForColor(){
    var userColor = prompt('please type a color');
    populateColorArray(userColor);
}
function populateColorArray(uC){
    colorArray.push(uC);
    console.log(colorArray);
}

// 1. inside of a <div>, add 2 <button> elements
// 2. give each <button> an ID: one to add, one to remove
// 3. target each <button> by ID in JavaScript
// 4. add a 'click' listener to each along with an anonymous function
// 4.5 alert a message.

// 5. write 2 functions.
// 5a. the first brings up a prompt box, accepts a color and adds it to a new array.
// 5b. the second removes the last color from the array
// 6. console the array each time a button is clicked

// .concat() ??
// .sort();
// .slice();
// .splice();

// .push();
// .pop();
// .shift();
// .unshift();
