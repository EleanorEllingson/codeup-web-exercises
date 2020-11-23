"use strict";

function getGithubUsernames() {
    return fetch('https://api.github.com/users', {headers: {'Authorization': gitHubToken}})
        .then(response => response.json())
}

getGithubUsernames().then(users => {
    users.forEach(userObj => {
        console.log(userObj.login);
    });
}).catch(error => console.error(error));


// fetch('https://api.github.com/users', {headers: {'Authorization': gitHubToken}})
//     .then(response => console.log(response))
//
//     .catch(error => console.error(error))

// function wait(numberMilliseconds) {
//     return new Promise((resolve, reject) => {
//
//         setTimeout(() => {
//
//             resolve();
//         }, numberMilliseconds);
//
//     });
// }
//
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));