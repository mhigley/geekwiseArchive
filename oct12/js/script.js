var span = document.querySelectorAll('legend span');
var input = document.querySelectorAll('legend input');
// console.log(span);
console.log(input);
for(var i = 0; i < input.length; i++){
    input[i].addEventListener('click', function(){
        // console.log(this);
        // this.classList.toggle('placeholder');
        console.log(this === document.activeElement);

        if(this === document.activeElement){
            this.previousElementSibling.classList.add('placeholder');
        }else{
            for(var j = 0; j < span.length; j++){
                span[j].classList.remove('placeholder');
            }
        }
    });
}
