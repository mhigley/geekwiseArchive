// var nameInput = document.querySelector('input[type="text"]');
var inputs = document.querySelectorAll('input:not([type="submit"])');
var goBtn = document.querySelector('input[type="submit"]');
var user = [];


goBtn.addEventListener('click', function(evt){
    evt.preventDefault();

    var formInputs = document.querySelector('form').elements;

    for(var i = 0; i < formInputs.length - 1; i++){
        if(
            formInputs[i].type === 'radio' && formInputs[i].checked ||
            formInputs[i].type !== 'radio' && formInputs[i].type !== 'checkbox' && formInputs[i].value
        ){
            user.push(formInputs[i].value);
        }
        if(formInputs[i].type === 'checkbox' && formInputs[i].checked){
            user.push(true);
        }
    }

    console.log(user);
    user = [];
    /*
    inputs.forEach(function(e, i){
        user.push(inputs[i].value);
        inputs[i].value = '';
    });
    alert(user);
    user = [];
    */
});

// get values from firstname, lastname, and email on submit
// add all values to a user array

// empty all input values (reuse loop)
// clear out array after alert

// if input is blank, skip array push
