(function(){
    // var content = document.getElementById('content');
    // var body = document.body;
    // content.innerHTML = '<h1>Hello</h1>';
    // body.appendChild(content);
    // var form = document.createElement('form');
    // content.appendChild(form);

    var userNum = '';
    var getNum = function(){
        // arguments[0]
        // parseInt()
        // Is it a number? Is it NOT a number?
        if(!isNaN(parseInt(arguments[0])) && arguments[0] > 0){
            console.log('you chose wisely');
            userLoop(parseInt(arguments[0]));
        }else{
            console.log('you chose poorly');
            getUserNum();
        }
    };

    function userLoop(num){
        console.log(num);
    }

    function getUserNum(){
        userNum = prompt('pick a number');
        getNum(userNum);
    }
    getUserNum();

}());
