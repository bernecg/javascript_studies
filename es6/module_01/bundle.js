"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.list = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.list.push(data);
      console.log(this.list);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  function TodoList(userName) {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this);
    _this.userName = userName;
    return _this;
  }

  _createClass(TodoList, [{
    key: "showUsername",
    value: function showUsername() {
      console.log(this.userName);
    }
  }], [{
    key: "calcSum",
    value: function calcSum(a, b) {
      console.log(a + b); // call below returns error since static methdo doesn't have
      // access to other things in class, such as it's variable
      // this.list.push(a + b);
    }
  }]);

  return TodoList;
}(List);

var MyList = new TodoList("Bernard");

document.getElementById("addTodo").onclick = function () {
  MyList.add("New TODO");
};

MyList.showUsername();
TodoList.calcSum(1, 3);
/* CONSTS */

var PI = 3.14; // error...
// PI = 666;

var user = {
  name: "Foo"
};
console.log(user.name); // This works! <- mutation, no attribution

user.name = "Foo Fighters";
console.log(user.name);
/* SCOPE */

function testScope(x) {
  console.log(x, y);
  var y = 3;
  console.log(x, y);
} // Y is not on this scope, so this fails
// console.log(y);


testScope(10);
/* ARRAY OPERATIONS */

var arr = [1, 3, 5, 7, 9, 2];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(arr, newArr);
var sumArr = arr.reduce(function (total, nextItem) {
  return total + nextItem;
});
console.log(arr, sumArr);
var filterArr = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filterArr);
var findArr = arr.find(function (item) {
  return item === 7;
});
console.log(findArr);
/* ARROW FUNCTIONS */

var arrFunctions = [1, 5, 512, 5234]; // const newArrFunction = arrFunctions.map((item) => {
//     return item * 2;
// })

var newArrFunction = arrFunctions.map(function (item) {
  return item * 2;
}); // Same as above

console.log(newArrFunction);
/* DEFAULT FUNCITON VALUES */

function sum() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return a + b;
}

console.log(sum(3));
console.log(sum());

var sum2 = function sum2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
};

console.log(sum2());
/* DESESTRUTURACAO */

var client = {
  name: "Foo",
  age: 23,
  company: "Google",
  address: {
    city: "Rio de Janeiro",
    state: "RJ"
  }
}; // const { name, age, address : { state } } = client;
// console.log(name, age, state);

function showClient(_ref) {
  var name = _ref.name,
      age = _ref.age;
  console.log(name, age);
}

showClient(client);
/* REST & SPREAD */
// REST <- restos da propriedade

var name = client.name,
    resto = _objectWithoutProperties(client, ["name"]);

console.log(resto);
var arrRest = [1, 2, 5, 6];
var a = arrRest[0],
    b = arrRest[1],
    outros = arrRest.slice(2);
console.log(a);
console.log(b);
console.log(outros);

function multiply() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total *= next;
  });
}

console.log(multiply(3, 3, 2)); //SPREAD <- propagar as infos pra outra estrutura de dados

var arrTmp1 = [1, 2, 3];
var arrTmp2 = [4, 5, 6];
var arrTmp3 = [].concat(arrTmp1, arrTmp2);
console.log(arrTmp3);
var user1 = {
  name: "Boo",
  age: 32
};

var user2 = _objectSpread(_objectSpread({}, user1), {}, {
  age: 33
});

console.log(user2);
/* TEMPLATE LITERALS */

var nameTL = "Xoo";
var ageTL = 10000;
console.log("My name is " + nameTL + " and I have " + ageTL + " years.");
console.log("My name is ".concat(nameTL, " and I have ").concat(ageTL, " years.")); //======CLEAR========/

console.clear(); //======CLEAR========/

/* OBJECT SHORT SINTAX */

var nome = "Soo";
var idade = 99;
var userOSS = {
  nome: nome,
  idade: idade,
  empresa: "XYZ"
};
console.log(userOSS);
