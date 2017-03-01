// No Validation!
// add a <button> to the stage
// target it as a JavaScript object
// add a click listener
// REFERENCE a function declaration that:
// asks for users favorite movie
// and populates a new array
// log after each entry

var btn = document.getElementById('btn');
var movieArr = [];
var carObj = {
    make: 'jeep',
    model: 'wrangler',
    year: 2014
};

btn.addEventListener('click', getMovie);

function getMovie(){
    movieArr.push( prompt('whats your favorite movie') );
    // if(movieArr.length >= 3){
    //     console.log(movieArr);
    // }
    if(movieArr.length >= 1){
        // for(var i = 0; i < movieArr.length; i++){
        //     console.log(movieArr[i]);
        // }
        movieArr.forEach(function(idx){
            console.log(idx);
            // console.log(movieArr[i]);
        });
    }


}
// IF the array === 3 movies or more
// THEN log the array

// create another IF the array is === 5 movies or more
// then LOOP through array and print to the console

// FOR loop, FOREACH loop
// - for loop javascript
// - foreach loop javascript

// Array ['apple', 'orange', 'banana']
// i = 0;
//
// apple
// orange
// banana
