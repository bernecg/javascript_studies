/* === CHALLENGES === */

/*
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s');
//         delay().then(() => {
//             console.log('2s');
//             delay().then(() => {
//                 console.log('3s');
//             });
//         })
//     });
// }

const umPorSegundo = async() => {
    await delay().then(() => console.log("1s"));
    await delay().then(() => console.log("2s"));
    await delay().then(() => console.log("3s"));
}

umPorSegundo();
*/

/*
import axios from 'axios';

// function getUserFromGithub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         })
// }

const getUserFromGithub = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);
    }
    catch (err) {
        console.warn(err);
    }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
*/

/*
import axios from 'axios';
class Github {
    // static getRepositories(repo) {
    //     axios.get(`https://api.github.com/repos/${repo}`)
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(err => {
    //             console.log('Repositório não existe');
    //         })
    // }
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log("Repo existe:");
            console.log(response);
        }
        catch (err) {
            console.warn("Repositorio não existe");
        }
    }
}

Github.getRepositories("bernecg/bernecg.github.io");
Github.getRepositories("bernecg/dslkvmskv");
*/

/*
import axios from 'axios';

// const buscaUsuario = usuario => {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         });
// }
const buscaUsuario = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response);
    }
    catch (err) {
        console.log("Usuario nao existe...");
    }
}

buscaUsuario('diego3g');
buscaUsuario('diego3g123');
*/
