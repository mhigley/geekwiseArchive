var myArr = ['red', 'orange','yellow'];
var newArray = [];

var addBtn = document.getElementById('addBtn');
var removeBtn = document.getElementById('removeBtn');

addBtn.addEventListener('click', function(){
    // alert('add');
    askForColor();
});
removeBtn.addEventListener('click', function(){
    // alert('remove');
    // var re = /ab+c/;
    // console.log(re);
    //
    // var myRe = /\d/;
    // var myArray = myRe.exec('234567898765434');
    // console.log(myArray);
});

function askForColor(){
    var userColor = prompt('please type a color');
    if(userColor !== null && userColor.trim() !== ''){ //if user wants to play
        var userColorCheck = userColor.toLowerCase().trim();
        if( !isNaN(parseInt(userColorCheck)) ){
            askForColor();
        }else{
            //alert('you chose a color! huzzah!');
            newArray.push(userColorCheck);
            console.log(newArray);
        }
    }else{
        alert('does it work?');
    }


// && === and
// || === or


    /*
    if( !isNaN(parseInt(userColor)) ){
        alert('you typed a number bozo');
        askForColor();
    }else if(userColor === ''){
        alert('you typed a blank');
    }else{
        alert('you typed a string');
    }
    */

    // '4' !== 4

    // null
    // blank (empty space)
    // string

    // NaN
    // we will need isNaN() to eliminate numbers
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
