let fetch = require('isomorphic-fetch');

async function authenticate() {
    let token = { };

    await fetch('http://localhost:3000/auth/google')
        .then(function(response) {
            return response.json();
        })
         .then(function (json) {
             token = json;
         });

    console.log(token);

    return await fetch('http://localhost:3000/auth/verify', {
            method: 'get',
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/xhtml+xml'
        }).then(function (response) {
            return response.json();
        })
}

module.exports = authenticate;