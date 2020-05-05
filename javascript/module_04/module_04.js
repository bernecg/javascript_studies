// AJAX

/* var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/bernecg");
xhr.send(null);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
        document.querySelector("#app p").innerHTML = JSON.parse(xhr.responseText).login;
    }
}
*/

/*
var myPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.github.com/users/bernecg");
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject("Error on the request :(");
                }
            }
        }
    })
}

myPromise()
    .then(function(response) {
        console.log(response);
        document.querySelector("#app p").innerHTML = response.login;
    })
    .catch(function(error) {
        console.warn(error);
    });
*/

axios.get("https://api.github.com/users/bernecg")
    .then(function(response) {
        console.log(response);
        document.querySelector("#app p").innerHTML = response.data.login;
    })
    .catch(function(error) {
        console.warn(error);
    });

console.log("Loaded...");
