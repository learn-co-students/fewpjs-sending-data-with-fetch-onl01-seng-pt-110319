// Add your code here
// A body with the name and email passed in as arguments to submitData.
//  These should be assigned to name and email keys within an object. 
//  This object should then be stringified.


function submitData(userName, userEmail) {
 
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail})
        })
        .then(function(response){
            return response.json();
        })
        .then(function(object){
            document.body.innerHTML = object.id 
        }) 
        .catch(function(error) {
            document.body.innerHTML = error.message
        })

}