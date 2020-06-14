// Add your code here
function submitData(name, email){
    
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        // Add the HTTP Verb
        method: "POST",
        // metadata about the actual data we want to send
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)// passing an object in, JSON.stringify() will return a string, formatted and ready to send in our request
    };
    // return fetch
    return fetch("http://localhost:3000/users", configObj)
    .then(function(resp) {
        return resp.json();
    })
    // logged inconsole
    .then(function(object){
        document.body.innerHTML = object["id"];
        console.log(object);
    })
    // so that error work can be performed
    .catch(function(error){
        document.body.innerHTML = error.message;
        console.log(error);
    });
}