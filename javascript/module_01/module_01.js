function sum(x, y) {
    return x + y;
}

function sillyThings() {
    var name = "Bernard";
    var age = 30;
    var weight = 81.2;
    var human = true;

    var alunos = [ "Bernard", "Foo", "Yolo" ];
    var aluno = {
        nome: "Bernard",
        age: 30,
        weight: 81.2,
        human: true
    };

    console.log(alunos);
    console.log(alunos[1]);
    console.log(aluno);
    console.log(aluno.age);

    console.log(sum(10, 5));
    console.log(sum("10", 5));
}

function showHelloWorld() {
    console.log("Hello World!");
}

setInterval(showHelloWorld, 1000);
setTimeout(showHelloWorld, 1000);
