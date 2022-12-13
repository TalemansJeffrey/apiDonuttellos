fetch ("https://donuttelloapi.onrender.com/api/v1/donuts", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(response => {
    //console.log(response);
    return response.json();

})
.then(json => {
    console.log(json);

})