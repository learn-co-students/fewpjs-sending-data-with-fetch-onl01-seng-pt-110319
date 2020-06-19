function submitData(name, email) {
    let formData = {
        name: name,
        email: email
      };
      
    // method: "POST" is missing from the object below
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(user) {
        document.body.append(user.id)
    })
    .catch(function(error) {
        alert("Unauthorized Access");
        document.body.append(error.message);
    });
};