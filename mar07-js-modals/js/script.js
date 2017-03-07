/*
var content = document.getElementById('content');

var h1 = document.createElement('h1'),
    p = document.createElement('p'),
    text = document.createTextNode('explicitly creating a text node'),
    a = document.createElement('a');

h1.textContent = 'This is some text';
p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
a.textContent = 'click';

// content.append(h1, p, text, 'here is a text node', a);

content.appendChild(h1);
*/



// After the <div id="content"></div>, mock up a quick webpage with a headline, an anchor tag, and plenty of paragraph text (Create this content in your HTML)
//
// The anchor tag will invoke (run) the function that creates the popup
//
// Recreate all three default popup windows
// - alert()
// - confirm()
// - prompt()
//
// Think about what objects need to be included in each popup
//
// Create a function declaration that creates all the necessary JavaScript elements
//
// Remember, the type of popup that appears will be based on what ARGUMENTS are passed into the function call when the anchor tag is clicked
//
// Don't forget to log input value... on prompt only!!
//
// Add CSS if you want, but don't lose too much time styling
//
// #content.active {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: fixed;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
// }

var form = document.querySelector('form');
// write a forEach loop logging each Node item to the console

// console.log( 'Notification' in window );
//
// if( !('Notification' in window) ){
//     alert('sorry, that feature is not available');
// }else{
//     console.log('Notifications are available');
// }

// form.childNodes.forEach(function(e, i){
//     console.log(e);
// });

// for...in loop

// for(var i = 0; i < form.children.length; i++){
//     console.log(form.children[i]);
// }

// IN keyword

/*

if(!'childElementCount' in form){
    for(var i = 0; i < form.children.length; i++){
        console.log(form.children[i]);
    }
}else{
    for(var i = 0; i < form.childElementCount; i++){
        console.log(form.children[i]);
    }
}
*/
console.log(form);

var formArr = [];

// push the value of 5 properties to the formArr
formArr.push(form.childElementCount, form.childNodes, form.clientHeight);

console.log(formArr);
