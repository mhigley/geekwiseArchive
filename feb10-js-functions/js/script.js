var str = "MaTthEw";
var modStr = str.substr(1, 4);
// var userName = prompt('whats your name?').trim();
// console.log(userName);

// console.log(str, modStr);



// 1. Create a function that asks for the users first name. Remove all excess spaces and RETURN value. (Function Declaration - NO PARAMETERS)
// 2. Create a separate function that will guarantee a capitalization of the First letter, & lowercase all remaining. Pass value as argument into step 3. (Function Expression)
// 3. Create another function that will ALERT username. (Function Declaration)



var b = function(){
    var u = a();
    alert(u.charAt(0).toUpperCase() + u.substr(1).toLowerCase());
};

// .toLowerCase() - lowercase string
// .toUpperCase() - uppercase string
// .substr() - get characters from starting index upto & including ending index
// .trim() - removes excess spaces before & after
// .length - get total number of characters
// .charAt() - get character at specified index



var extBtn = document.getElementById('external');
var voidBtn = document.getElementById('void');
var content = document.getElementById('content');

extBtn.addEventListener('click', function(){
    var userName = prompt('what is your name?');
    content.textContent = userName;
});

voidBtn.addEventListener('click', function(){
    content.textContent = "";
});

// NO ONCLICK ATTRIBUTE!!
// target "Void" button
// add event listener ("click")
// run a function that "deletes" content text


function changeColor(){
    /*
    var randNum = Math.random();
    console.log(randNum);
    var randHue = randNum * 360;
    console.log(randHue);
    var roundHue = Math.floor(randHue);
    console.log(roundHue);
    var addOne = roundHue + 1;
    console.log(addOne);
    */
    var rand = Math.floor(Math.random() * 360) + 1;
    document.body.style.backgroundColor = 'hsl('+ rand +', 50%, 50%)';
}
