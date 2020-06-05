// Add your code here
function submitData(name, email) {
    let data = { name, email };
    let configObj = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch('http://localhost:3000/users', configObj)
        .then(res => res.json())
        .then(function(object) {
            document.body.innerHTML = object["id"]
        })
        .catch(function(error) {
            document.body.innerHTML = error.message
        })
}