function sendData(data, endpoint) {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  var stringifiedData = JSON.stringify(data);

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});  
  
  xhr.open("POST", endpoint);
  
  function setHeaders(headers){
    for(let key in headers){
      xhr.setRequestHeader(key, headers[key]) 
    }
  }

  setHeaders({"Host":"appspot.com","contentType":"application/json"});
  
  xhr.send(stringifiedData);

}
