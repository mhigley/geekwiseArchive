var form = document.querySelector('form');

// form.childNodes.forEach(function(e, i){
//     console.log(e);
// });

// for(var i = 0; i < form.childNodes.length; i++){
//     console.log(form.childNodes[i]);
// }

// for(var i = 0; i < form.length; i++){
//     console.log(form[i].value);
// }

/*
var formArr = [];

formArr.push(form.childElementCount);

console.log(formArr);

console.log('childElementCount' in form);

if( !('childElementCount' in form) ){
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
formArr.push(form.childElementCount);
formArr.push(form.childNodes);
formArr.push(form.clientHeight);
formArr.push(form.draggable);
formArr.push(form.outerHTML);

console.log(formArr);
