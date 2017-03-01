(function(){
    // var content = document.getElementById('content');
    // var body = document.body;
    // content.innerHTML = '<h1>Hello</h1>';
    // body.appendChild(content);
    // var form = document.createElement('form');
    // content.appendChild(form);

    var msg = 'How many inputs?';
    var userInputs = parseInt(prompt(msg));

    /*
    var getStart = function(){
        if(Number.isNaN(userInputs) || userInputs <= 0){
            msg = 'Please enter a number. How many inputs?';
            userInputs = parseInt(prompt(msg));
            getStart();
        }else{
            console.log(userInputs);
            console.log('its a number');
        }
    };
    */

    getStart();

}());
