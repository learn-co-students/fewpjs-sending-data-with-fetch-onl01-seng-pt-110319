//// Add your code here
////fetch("http://localhost:3000/dogs", {
////  method: "POST",
////  headers: {
////    "Content-Type": "application/json",
////    "Accept": "application/json"
////  },
////  body: JSON.stringify({
////    dogName: "Amur",
////    dogBreed: "Cat"
////  })
////});
//let userData={}
//let formData = {
//  dogName: "Byron",
//  dogBreed: "Poodle"
//};
//
////let configObj = {
//////  method: "POST",
////  headers: {
////    "Content-Type": "application/json",
////    "Accept": "application/json"
////  },
////  body: JSON.stringify(formData)
////};
//
//function configObj(data) {
//  let dataObject = {
//  method: "POST",
//  headers: {
//    "Content-Type": "application/json",
//    "Accept": "application/json"
//  },
//  body: JSON.stringify(data)
//  }
//  return dataObject
//};
//
//
////
////fetch ("http://localhost:3000/dogs",configObj(formData))
////  .then(function (response){
////    return response.json();
////  })
////  .then (function(object){
////    console.log(object);
////  })
////  .catch(function(error) {
////    alert("Bad things! Ragnarők!");
////    console.log(error.message);
////  });
////
//
//function submitData(name,email){
//  fetch("http://localhost:3000/users",configObj({name: name, email: //email}))
//    .then (function (response) {
//      return response.json();
//    })
//    .then (function(object){
//      document.body.innerHTML = object.id
//      //let result = {
//      //  'id':object.id,
//      //  'name':object.name,
//      //  'email':object.email
//      //};
//      //let output=document.createElement("p")
//      //output.innerHTML=JSON.stringify(result)
//      //document.body.appendChild(output)
//      //console.log(object);
//    })
//    .catch(function (error) {
//    document.body.innerHTML="Unauthorized Access";
//  });
//};



function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
    .then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}
