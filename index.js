const { config } = require("chai");

// Add your code here
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
    })
};

fetch("http://localhost:3000/dogs", configurationObject)
.then(function(response) {
    return response.json();
})
.then(function(object) {
    console.log(object);
})
.catch(function(error) {
    alert("Bad things!");
    console.log(error.message);
});

function submitData (nameIn, emailIn) {
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: nameIn,
            email: emailIn
        })
    }

    return fetch("http://localhost:3000/users", configObject)
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        document.body.append(object["id"])
    }) 
    .catch(function(error){
        document.body.append(error.message)
    })
}