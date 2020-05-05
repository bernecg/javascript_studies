// EX 01

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

console.log("Loaded...");
setTimeout(function() {console.log(0.5)}, 500);
setTimeout(function() {console.log(1)}, 1000);
setTimeout(function() {console.log(1.5)}, 1500);
setTimeout(function() {console.log(2)}, 1999);

// Ex 02
