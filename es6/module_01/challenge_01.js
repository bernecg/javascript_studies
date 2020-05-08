function clear() {
    console.clear();
}

/* EX 01 */
{
    class Usuario {
        constructor(email, senha, admin = false) {
            this.email = email;
            this.senha = senha;
            this.admin = admin;
        }

        isAdmin() {
            return this.admin;
        }
    }

    class Admin extends Usuario {
        constructor(email, senha) {
            super(email, senha, true);
        }
    }

    const User1 = new Usuario('user@teste.com', 'senha123');
    const Adm1 = new Admin('admin@teste.com', 'senha123');
    console.log(User1.isAdmin()); // false
    console.log(Adm1.isAdmin()); // true
}

/* EX 02 */
{
    const usuarios = [
        { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
        { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
        { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    ];

    var idadeUsuarios = usuarios.map((user) => user.idade);
    console.log(idadeUsuarios);

    var adultsInRocketseat = usuarios.filter((user) =>
        user.empresa === "Rocketseat" && user.idade >= 18);
    console.log(adultsInRocketseat);

    var userInGoogle = usuarios.find((user) => user.empresa === "Google");
    console.log(userInGoogle);

    const usuariosDobroIdade = usuarios.map(
        (usuario) => ({ ...usuario, idade: usuario.idade * 2 })
    );
    console.log(
        usuariosDobroIdade.filter((user) => user.idade <= 50)
    );
}

/* EX 03 -> transform in arrow functions */
{
    // 3.1
    const arr = [1, 2, 3, 4, 5];
    // arr.map(function (item) {
    //     return item + 10;
    // });
    console.log(arr.map((item) => item + 10));

    // 3.2
    // Dica: Utilize uma constante pra function
    const usuario = { nome: 'Diego', idade: 23 };
    // function mostraIdade(usuario) {
    //     return usuario.idade;
    // }
    const mostraIdade = (user) => console.log(user.idade);
    mostraIdade(usuario);

    // Extra for testing
    const usuarios = [
        { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
        { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
        { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    ];
    mostraIdade(usuarios[1]);

    // 3.3
    // Dica: Utilize uma constante pra function
    const nome = "Diego";
    const idade = 23;
    // function mostraUsuario(nome = 'Diego', idade = 18) {
    //     return { nome, idade };
    // }
    const mostraUsuario = (nome = "Diego", idade = 19) =>
        (console.log({ nome, idade }));
    mostraUsuario(nome, idade);
    mostraUsuario(nome);

    // 3.4
    // const promise = function () {
    //     return new Promise(function (resolve, reject) {
    //         return resolve();
    //     })
    // }
    const promise =
        () => new Promise((resolve, reject) => resolve());
    console.log(promise);
}

/* EX 04 -> Destructuring */
{
    // 4.1
    const empresa = {
        nome: 'Rocketseat',
        endereco: {
            cidade: 'Rio do Sul',
            estado: 'SC',
        }
    };

    const { nome, endereco: { cidade, estado } } = empresa;

    console.log(nome); // Rocketseat
    console.log(cidade); // Rio do Sul
    console.log(estado); // SC

    // 4.2
    // function mostraInfo(usuario) {
    //     return `${usuario.nome} tem ${usuario.idade} anos.`;
    // }
    function mostraInfo({ nome, idade }) {
        return `${nome} tem ${idade} anos.`;
    }
    console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
}

/* EX 05 -> REST/SPREAD */
{
    // 5.1
    const arr = [1, 2, 3, 4, 5, 6];

    const [x, ...y] = arr;
    console.log(x); // 1
    console.log(y); // [2, 3, 4, 5, 6]

    function soma(...values) {
        return values.reduce((total, next) => total + next);
    }
    console.log(soma(1, 2, 3, 4, 5, 6)); // 21
    console.log(soma(1, 2)); // 3

    // 5.2
    const usuario = {
        nome: 'Diego',
        idade: 23,
        endereco: {
            cidade: 'Rio do Sul',
            uf: 'SC',
            pais: 'Brasil',
        }
    };

    // nome Gabriel
    const usuario2 = { ...usuario, nome: "Gabriel" };
    // cidade Lontras
    const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: "Lontras" } };
    console.log(usuario);
    console.log(usuario2);
    console.log(usuario3);
}

/* EX 06 -> TEMPLATE LITERALS */
{
    const usuario = 'Diego';
    const idade = 23;
    // console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
    console.log(`O usuário ${usuario} possui ${idade} anos`);
}

/* EX 07 -> Object Short Syntax */
{
    const nome = 'Diego';
    const idade = 23;
    // const usuario = {
    //     nome: nome,
    //     idade: idade,
    //     cidade: 'Rio do Sul',
    // };
    const usuario = { nome, idade, cidade: "Rio do Sul" };

    console.log(usuario);
}

clear();
console.log("Loaded challenge 01!");
