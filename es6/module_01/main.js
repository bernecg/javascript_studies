class List {
    constructor() {
        this.list = []
    }

    add(data) {
        this.list.push(data);
        console.log(this.list);
    }
}

class TodoList extends List {
    constructor(userName) {
        super();
        this.userName = userName;
    }

    showUsername() {
        console.log(this.userName);
    }

    static calcSum(a, b) {
        console.log(a + b);
        // call below returns error since static methdo doesn't have
        // access to other things in class, such as it's variable
        // this.list.push(a + b);
    }
}

var MyList = new TodoList("Bernard");

document.getElementById("addTodo").onclick = function() {
    MyList.add("New TODO");
}

MyList.showUsername();

TodoList.calcSum(1, 3);

/* CONSTS */
const PI = 3.14;
// error...
// PI = 666;

const user = { name: "Foo" };
console.log(user.name);
// This works! <- mutation, no attribution
user.name = "Foo Fighters";
console.log(user.name);

/* SCOPE */
function testScope(x) {
    console.log(x, y);
    let y = 3;
    console.log(x, y);
}

// Y is not on this scope, so this fails
// console.log(y);
testScope(10);


/* ARRAY OPERATIONS */
const arr = [1, 3, 5, 7, 9, 2];
const newArr = arr.map(function(item, index) {
    return item + index;
});
console.log(arr, newArr);

const sumArr = arr.reduce(function(total, nextItem) {
    return total + nextItem;
})
console.log(arr, sumArr);

const filterArr = arr.filter(function(item) {
    return item % 2 === 0;
});
console.log(filterArr);

const findArr = arr.find(function(item) {
    return item === 7;
})
console.log(findArr);


/* ARROW FUNCTIONS */
const arrFunctions = [1, 5, 512, 5234 ];

// const newArrFunction = arrFunctions.map((item) => {
//     return item * 2;
// })
const newArrFunction = arrFunctions.map(item => item * 2) // Same as above
console.log(newArrFunction);

/* DEFAULT FUNCITON VALUES */

function sum(a = 1, b = 3) {
    return a + b;
}
console.log(sum(3));
console.log(sum());

const sum2 = (a = 3, b = 6) => { return a + b };
console.log(sum2());


/* DESESTRUTURACAO */
const client = {
    name: "Foo",
    age: 23,
    company: "Google",
    address: {
        city: "Rio de Janeiro",
        state: "RJ"
    }
};

// const { name, age, address : { state } } = client;
// console.log(name, age, state);

function showClient({ name, age }) {
    console.log(name, age);
}

showClient(client);

/* REST & SPREAD */
// REST <- restos da propriedade
const { name, ...resto } = client;
console.log(resto);

const arrRest = [1, 2, 5, 6];
const [a, b, ...outros ] = arrRest;
console.log(a);
console.log(b);
console.log(outros);

function multiply(...params) {
    return params.reduce((total, next) => total *= next);
}
console.log(multiply(3, 3, 2));

//SPREAD <- propagar as infos pra outra estrutura de dados
const arrTmp1 = [1, 2, 3];
const arrTmp2 = [4, 5, 6];

const arrTmp3 = [ ...arrTmp1, ...arrTmp2 ];
console.log(arrTmp3);

const user1 = {
    name: "Boo",
    age: 32
};
const user2 = { ...user1, age: 33 };
console.log(user2);

/* TEMPLATE LITERALS */
const nameTL = "Xoo";
const ageTL = 10000;

console.log("My name is " + nameTL + " and I have " + ageTL + " years.");
console.log(`My name is ${nameTL} and I have ${ageTL} years.`);

//======CLEAR========/
console.clear();
//======CLEAR========/

/* OBJECT SHORT SINTAX */
const nome = "Soo";
const idade = 99;

const userOSS = {
    nome,
    idade,
    empresa: "XYZ"
}

console.log(userOSS);
