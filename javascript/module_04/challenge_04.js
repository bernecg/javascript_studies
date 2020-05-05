// EX 01
/*
var checkAge = function(age) {
    return new Promise(function(resolve, rejetct) {
        setTimeout(function () {
            if(age >= 18) {
                resolve();
            } else {
                rejetct();
            }
        }, 2000);
    })
}

checkAge(18)
    .then(function () {
        console.log("It is over 18...");
    })
    .catch(function () {
        console.log("It is below 18...");
    })

setTimeout(function() {console.log(0.5)}, 500);
setTimeout(function() {console.log(1)}, 1000);
setTimeout(function() {console.log(1.5)}, 1500);
setTimeout(function() {console.log(2)}, 1999);
*/

// Ex 02 e 03
var uListElement = document.querySelector("#ex_02 ul");

function listRepos(repos) {
    uListElement.innerHTML = "";

    if (repos === 404) {
        uListElement.innerHTML = "User not found!";
    } else if(repos != null && repos.length > 0) {
        repos.forEach(repo => {
            var liElement = document.createElement("li");
            var aElement = document.createElement("a");
            aElement.setAttribute("href", repo.url);
            aElement.setAttribute("target", "_blanket");
            aElement.appendChild(document.createTextNode(repo.name));
            liElement.appendChild(aElement);
            // liElement.appendChild(document.createTextNode(repo));
            uListElement.appendChild(liElement);
        })
    } else {
        uListElement.innerHTML = "Error! no repo found...";
    }
}

document.querySelector("#ex_02 button").onclick =
function() {
    uListElement.innerHTML = "Loading...";
    var userName = document.querySelector("#ex_02 input").value;
    document.querySelector("#ex_02 input").value = "";

    axios.get("https://api.github.com/users/" + userName + "/repos")
        .then(response => {
            var repos = [];
            response.data.forEach(repo => {
                repos.push({name: repo.name, url: repo.html_url });
            });
            console.log(repos);
            listRepos(repos);
        })
        .catch(error => {
            if (error.response.status === 404) {
                listRepos(error.response.status);
            } else {
                listRepos(null);
            }
        })
}
// listRepos();

// General

console.log("Loaded...");
