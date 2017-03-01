var addBtn = document.getElementById('addBtn');
var removeBtn = document.getElementById('removeBtn');
var userNameArray = [];


var moviesArray = ['holy grail', 'temple of doom', 'lost ark', 'airforce one', 'witness', 'blade runner'];
// loop through array log each.
/*
for(var i = 0; i < moviesArray.length; i++){
    console.log(moviesArray[i]);
}
*/
moviesArray.forEach(moviePrint);

function moviePrint(e, i){
    console.log(i + ' : ' + e);
}


addBtn.addEventListener('click', userPrompt);
removeBtn.addEventListener('click', function(){
    alert('remove');
});

function populateArray(un){
    userNameArray.push(un);
    console.log(userNameArray);
    if(userNameArray.length >= 5){
        outputArray();
    }
}

function outputArray(){
    /* FOREACH LOOP */
    userNameArray.forEach(function(el, idx){
        console.log(idx + ' : ' + el);
    });
    /* FOR LOOP
    for(var i = 0; i < userNameArray.length; i++){
        console.log(userNameArray[i]);
    }
    */
}

function userPrompt(){
    var userName = prompt('gimme yo name foo');
    if(userName === null){
        alert('please enter your username');
        return;
    }
    var userNameParsed = parseInt(userName);
    var userNameNaN = isNaN(userNameParsed);
    var userNameBlank = userName.trim() === ""; // !== / ===
    // console.log('original: '+userName);
    // console.log('parsed: '+userNameParsed);
    // console.log('is it NaN: '+userNameNaN);
    // console.log('is it blank: '+userNameBlank);
    if(
        userNameNaN === false &&
        userNameBlank === false ||
        userNameNaN === true &&
        userNameBlank === true
    ){
        alert('you entered bad info');
    }else{
        populateArray(userName);
    }
}
