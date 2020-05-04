function ex_01() {
    var end = {
        rua: "Rua dos Pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
       };

    console.log("O usuário mora em " + end.cidade + " / "
    + end.uf + ", no bairro " + end.bairro + ", na rua "
    + end.rua + " com nº " + end.numero + ".");
}

function ex_02(a, b) {
    var x = a % 2 == 0 ? a : a + 1;
    while(x <= b) {
        console.log(x);
        x += 2;
    }
}

function ex_03(skills, skill) {
    console.log(skills.indexOf(skill) >= 0)
}

function ex_04(yearsXp) {
    if (yearsXp < 0) {
        console.log("IMPOSSIBRU");
    } else if(yearsXp >= 0 && yearsXp <= 1) {
        console.log("Iniciante");
    } else if(yearsXp > 1 && yearsXp <= 3) {
        console.log("Intermediário");
    } else if(yearsXp > 3 && yearsXp <= 6) {
        console.log("Avançado");
    } else if(yearsXp >= 7) {
        console.log("Jedi master");
    }
}

function ex_05(users) {
    for(user of users) {
        var msg = user.sexo.toUpperCase() === 'M' ? "O " : "A ";
        msg += user.nome + " possui as habilidades: " + user.habilidades.join(", ") + "."
        console.log(msg);
    }
}

// ex_01();
// ex_02(31, 321);
// ex_03(["Javascript", "ReactJS", "React Native"], "ReactJS");
// ex_04(6);
ex_05([
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"],
        sexo: 'M'
    },
    {
        nome: "Gabriela",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
        sexo: 'F'
    }
   ]);
