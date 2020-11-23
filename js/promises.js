"use strict";



fetch('https://api.github.com/events', {headers: {'Authorization': 'token ' + 'gitHubToken'}})
    .then(response => console.log(response))
    .catch(error => console.error(error))

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