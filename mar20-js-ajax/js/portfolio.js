
var h1Adjust = function(){
    var hdrH1 = document.querySelector('header h1'),
        newHdrH1 = hdrH1.textContent.replace('t', '<span>t</span>');
    hdrH1.innerHTML = newHdrH1;
}();
