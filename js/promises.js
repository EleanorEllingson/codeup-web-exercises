"use strict";

function getGithubUsernames() {
    return fetch('https://api.github.com/users/eleanorellingson/repos', {headers: {'Authorization': gitHubToken}})
        .then(response => response.json())
}

getGithubUsernames().then(repos => {

    let lastPushed = new Date(0)

    repos.forEach ((repoObj) => {
        let year = parseFloat(repoObj.pushed_at.substring(0, 4));
        let month = parseFloat(repoObj.pushed_at.substring(5, 7)) - 1;
        let day = parseFloat(repoObj.pushed_at.substring(8, 10));
        let hours = parseFloat(repoObj.pushed_at.substring(11, 13));
        let minutes = parseFloat(repoObj.pushed_at.substring(14, 16));
        let seconds = parseFloat(repoObj.pushed_at.substring(17, 19));
        let milliseconds = parseFloat(repoObj.pushed_at.substring(0));
        let date = new Date(year, month, day, hours, minutes, seconds, milliseconds)
        // console.log(repoObj.pushed_at);
        if(date.getTime() > lastPushed.getTime()) {
            lastPushed = date;
        }
    });
    console.log(lastPushed)
}).catch(error => console.error(error));

//For the GitHub API exercise, the time of your last ‘push event’ will suffice. As a bonus, you can, with multiple requests, find the timestamp of the most recent commit.


fetch('https://api.github.com/users', {headers: {'Authorization': gitHubToken}})
    .then(response => console.log(response))

    .catch(error => console.error(error))

function wait(numberMilliseconds) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve();
        }, numberMilliseconds);

    });
}



wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));