function notifyMe(){
    if(!("Notification" in window)){
        alert("THis browser does not support notifications");
    }
    else if(Notification.permission === "granted"){
        notify();
    }
    else if(Notification.permission !== "denied"){
        Notification.requestPermission(function(permission){
            if(permission === "granted"){
                notify();
            }
        });
    }

    function notify(){
        var notification = new Notification('TITLE OF NOTIFICATION', {
            icon: "http://carnes.cc/jsnuggets_avatar.jpg",
            body: "Hey! Your are on notice!"
        });
        notification.onclick = function(){
            window.open("http://carnes.cc");
        };
        setTimeout(notification.close.bind(notification), 10000);
    }
}
notifyMe();

// console.log('alert' in window);
// if( !('alert' in window) ){
//     console.log('this browser doesnt alert yo...');
// }
