var inputs = document.querySelectorAll('input:not([type="submit"])');
var goBtn = document.querySelector('input[type="submit"]');
var user = [];


goBtn.addEventListener('click', function(evt){
    evt.preventDefault();

    var formInputs = document.querySelector('form').elements;
    console.log(formInputs);

    for(var i = 0; i < formInputs.length - 1; i++){
        //console.log(formInputs[i].type);
        if(
            formInputs[i].type === 'radio' && formInputs[i].checked ||
            formInputs[i].type !== 'radio' && formInputs[i].type !== 'checkbox' && formInputs[i].value
        ){
            user.push(formInputs[i].value);
        }
        if(formInputs[i].type === 'checkbox' && formInputs[i].checked){
            user.push(true);
        }

        // if(formInputs[i].checked){
        //     user.push(formInputs[i].value);
        // }
        // formInputs[i].value = '';
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
