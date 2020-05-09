/*
// import ClasseUsuario, { idade as IdadeUsuario } from './functions'

// ClasseUsuario.info();
// console.log(IdadeUsuario);

const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve("OK") }, 2000);
});

// myPromise()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//     });

// async function executePromise() {
const executePromise = async() => {
    // await can only be used inside async functions

    // const response = await myPromise();
    // console.log(response);
    console.log(await myPromise());
    console.log(await myPromise());
    console.log(await myPromise());
}

executePromise();
*/

/* AXIOS */
/*
import axios from "axios";

class API {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        }
        catch (err) {
            console.warn(err);
        }
    }
}

API.getUserInfo("bernecg");
API.getUserInfo("bernecg-error");
*/
