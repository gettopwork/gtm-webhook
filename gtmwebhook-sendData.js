function sendData(data, endpoint) {

  fetch(endpoint, {
    headers: {
      "Content-Type": "application/json"
    },
    method: 'post',
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) console.log("ok");
    else console.log("not ok");
  });
  
  
}
