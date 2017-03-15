var globalEl = document.querySelector('#global'),
    jeep = document.querySelector('header'),
    winW = document.querySelector('#config li:first-child span'),
    winH = document.querySelector('#config li:last-child span'),
    form = document.querySelector('#config form'),
    formBtn = document.querySelector('#config form input[type="submit"]'),
    fontSize, rotation, color;

winW.textContent = window.innerWidth;
winH.textContent = window.innerHeight;

window.addEventListener('resize', function(){
    winW.textContent = window.innerWidth;
    winH.textContent = window.innerHeight;
});

formBtn.addEventListener('click', function(evt){
    evt.preventDefault();

    console.log(form);

    for(var i = 0; i < form.elements.length - 1; i++){
        if(i == 0){
            fontSize = form.elements[i].value;
        }else if(i == 1){
            rotation = form.elements[i].value;
        }else if(i == 2){
            color = form.elements[i].value;
        }
    }

    document.body.style.fontSize = fontSize+'px';
    globalEl.style.transform = 'rotate('+rotation+'deg)';
    jeep.style.backgroundColor = color;
});
