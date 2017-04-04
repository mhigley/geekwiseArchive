(function(){
    getReq('env.json', setVars, 'GET');
}());

function getReq(url, callback, method, send){
    (send) ? send = send : send = null;
    var req = new XMLHttpRequest();
    req.open(method, url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            // console.log(req);
            callback(JSON.parse(req.responseText));
        }else{
            console.log('err', req.statusText);
        }
    }
    console.log(send);
    req.send(send);
}

var myVars;

function envVars(){
    var url = 'https://oc-index.library.ubc.ca/search?api_key=', id;
    return {
        setID: function(data){
            id = data;
        },
        getID: function(){
            return id;
        },
        getUrl: function(){
            return url;
        }
    };
}

function setVars(data){

    myVars = envVars();
    myVars.setID(data.key);

    setPage();
}

function setPage(){
    var sendObj = '{'+
  '"from": 0,'+
  '"size": 10,'+
  '"body": {'+
    '"sort": {'+
      '"_score": {'+
        '"order": "desc"'+
    '}'+
'},'+
    '"fields": ['+
      '"creator",'+
      '"description",'+
      '"subject",'+
      '"title"'+
  '],'+
    '"query": {'+
      '"query_string": {'+
        '"query": "world war 2"'+
    '}'+
'}'+
  '},'+
  '"index": "oc",'+
  '"type": "object",'+
  '"headers": ""'+
'}';
    getReq(myVars.getUrl()+myVars.getID(), search, 'POST', sendObj);
}

function search(info){
    console.log(info);
}
