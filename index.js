// Add your code here
// A body with the name and email passed in as arguments to submitData.
//  These should be assigned to name and email keys within an object. 
//  This object should then be stringified.


function submitData(userName, userEmail) {
    // declaring username and email variables 
 
    return fetch("http://localhost:3000/users", {
        // using fetch to fetch data from the url stated above
        method: "POST",
        // making it a post request
        headers: {
            // defining our headers, headers contain information about the data being sent 
            "Content-Type": "application/json",
            // content type is very common, and is used to indicate what format the data being sent is in
            "Accept": "application/json"
            // the accept request header advertises which content types the client is able to understand
        },
        body: JSON.stringify({
            // JSON.stringify converts objects to strings
            name: userName,
            email: userEmail})
        })
        .then(function(response){
            // then is passed a callback function that takes in a response arg, then we convert that arg from json to a JS object
            return response.json();
        })
        .then(function(object){
            // the result of json is returned above and then made available in this second .then
            // we then pass in an argument object and below assign the object id to the bodies inner HTML
            document.body.innerHTML = object.id 
        }) 
        .catch(function(error) {
            // when things go wrong use .catch
            // essentially this used for when something goes wrong we can send an alert message that there was an error when trying to fetch data
            document.body.innerHTML = error.message
        })

}