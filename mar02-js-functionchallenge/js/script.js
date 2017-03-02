var content = document.getElementById('content');

var h1 = document.createElement('h1');
content.appendChild(h1).textContent = "Hello World";
h1.contentEditable = true;

// create a paragraph element
// append to the content element
// add some text to the paragraph

var p = document.createElement('p');
content.appendChild(p).textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.";

// create an anchor tag element
// append to the content element
// add some text to the anchor
// target and create an new js object from it

var a = document.createElement('a');
content.appendChild(a).textContent = "click here";
a.href = 'http://google.com';
a.className = 'test2';
a.target = '_blank';

// create an unordered list element
// append to the content element

var ul = document.createElement('ul');
content.insertBefore(ul, a);

// create an input field element
// append before the anchor tag
// add a type text attribute
// add a placeholder attribute

// create a form element
// append to the form your input element
// create a submit button input
// append complete form before anchor tag

/*
    ------form ------
      -input-
      -submit input-
    -----------------
    -anchor tag
*/

var form = document.createElement('form');
var firstname = document.createElement('input');
var lastname = document.createElement('input');
var email = document.createElement('input');
var password = document.createElement('input');
var number = document.createElement('input');
var submitBtn = document.createElement('input');
var br = document.createElement('br');
firstname.type = 'text';
firstname.placeholder = 'firstname';
lastname.type = 'text';
lastname.placeholder = 'lastname';
email.type = 'email';
email.placeholder = 'email';
password.type = 'password';
password.placeholder = 'password';
number.type = 'number';
number.placeholder = 'number';
submitBtn.type = 'submit';
submitBtn.value = 'accept';
form.appendChild(firstname);
form.appendChild(lastname);
form.appendChild(email);
form.appendChild(password);
form.appendChild(number);
form.appendChild(submitBtn);
content.insertBefore(form, a);

submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    getValues();
});

number.addEventListener('change', function(evt){
    if(evt.target.value < 0){
        evt.target.value = 0;
    }
});

// create a function declaration
// get username from input
// log value
// after log, clear the input

/*
function getUsername(){
    console.log(userName.value);
    userName.value = '';
}
*/

// modify the form to include an input for:
// - a firstname
// - a lastname
// - an email
// - a password

// get all values from the inputs
// push all into a new array
var formArr = [];
var li;
function getValues(){
    ul.innerHTML = '';
    // console.log(form.elements[4].value);
    var loopNum = parseInt(number.value);
    for(var i = 1; i < loopNum + 1; i++){
        li = document.createElement('li');
        ul.appendChild(li).textContent = i;
        li.contentEditable = true;
        // create a new list item
        // append to the ul
        // set the text content to the incrementation value
    }

    // for(var i = 0; i < form.elements.length - 1; i++){
    //     formArr.push(form.elements[i].value);
    // }
    // console.log(formArr);
}
