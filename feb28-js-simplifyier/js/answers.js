/*
document.querySelector('button').addEventListener('click', function(){
    // console.log( simpleAdd(5) );
    addExp(5, 3);
});


function simpleAdd(num){
    return 10 + num;
}

var addExp = function(){
    console.log(arguments);
};
*/

var form = document.querySelector('form');
document.querySelector('input[type="submit"]').addEventListener('click', function(e){
    e.preventDefault();
    getInfo();
});

function getInfo(){
    console.log(
        'Welcome ' + getName(form) + 'to your website. Your email is ' + getEmail(form) + '. You signed up for the following subscriptions: ' + getChecks(form)
    );
}

function getName(arr){
    var name = '';
    for(var i = 0; i < arr.elements.length - 1; i++){
        if(arr.elements[i].type === 'text'){
            name += arr.elements[i].value + ' ';
        }
    }
    return name;
}
function getEmail(arr){
    var email = '';
    for(var i = 0; i < arr.elements.length - 1; i++){
        if(arr.elements[i].type === 'email'){
            email += arr.elements[i].value + ' ';
        }
    }
    return email;
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
