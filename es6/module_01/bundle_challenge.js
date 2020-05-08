"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function clear() {
  console.clear();
}
/* EX 01 */


{
  var Usuario = /*#__PURE__*/function () {
    function Usuario(email, senha) {
      var admin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _classCallCheck(this, Usuario);

      this.email = email;
      this.senha = senha;
      this.admin = admin;
    }

    _createClass(Usuario, [{
      key: "isAdmin",
      value: function isAdmin() {
        return this.admin;
      }
    }]);

    return Usuario;
  }();

  var Admin = /*#__PURE__*/function (_Usuario) {
    _inherits(Admin, _Usuario);

    var _super = _createSuper(Admin);

    function Admin(email, senha) {
      _classCallCheck(this, Admin);

      return _super.call(this, email, senha, true);
    }

    return Admin;
  }(Usuario);

  var User1 = new Usuario('user@teste.com', 'senha123');
  var Adm1 = new Admin('admin@teste.com', 'senha123');
  console.log(User1.isAdmin()); // false

  console.log(Adm1.isAdmin()); // true
}
/* EX 02 */

{
  var usuarios = [{
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
  }, {
    nome: 'Gabriel',
    idade: 15,
    empresa: 'Rocketseat'
  }, {
    nome: 'Lucas',
    idade: 30,
    empresa: 'Facebook'
  }];
  var idadeUsuarios = usuarios.map(function (user) {
    return user.idade;
  });
  console.log(idadeUsuarios);
  var adultsInRocketseat = usuarios.filter(function (user) {
    return user.empresa === "Rocketseat" && user.idade >= 18;
  });
  console.log(adultsInRocketseat);
  var userInGoogle = usuarios.find(function (user) {
    return user.empresa === "Google";
  });
  console.log(userInGoogle);
  var usuariosDobroIdade = usuarios.map(function (usuario) {
    return _objectSpread(_objectSpread({}, usuario), {}, {
      idade: usuario.idade * 2
    });
  });
  console.log(usuariosDobroIdade.filter(function (user) {
    return user.idade <= 50;
  }));
}
/* EX 03 -> transform in arrow functions */

{
  // 3.1
  var arr = [1, 2, 3, 4, 5]; // arr.map(function (item) {
  //     return item + 10;
  // });

  console.log(arr.map(function (item) {
    return item + 10;
  })); // 3.2
  // Dica: Utilize uma constante pra function

  var usuario = {
    nome: 'Diego',
    idade: 23
  }; // function mostraIdade(usuario) {
  //     return usuario.idade;
  // }

  var mostraIdade = function mostraIdade(user) {
    return console.log(user.idade);
  };

  mostraIdade(usuario); // Extra for testing

  var _usuarios = [{
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
  }, {
    nome: 'Gabriel',
    idade: 15,
    empresa: 'Rocketseat'
  }, {
    nome: 'Lucas',
    idade: 30,
    empresa: 'Facebook'
  }];
  mostraIdade(_usuarios[1]); // 3.3
  // Dica: Utilize uma constante pra function

  var nome = "Diego";
  var idade = 23; // function mostraUsuario(nome = 'Diego', idade = 18) {
  //     return { nome, idade };
  // }

  var mostraUsuario = function mostraUsuario() {
    var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Diego";
    var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 19;
    return console.log({
      nome: nome,
      idade: idade
    });
  };

  mostraUsuario(nome, idade);
  mostraUsuario(nome); // 3.4
  // const promise = function () {
  //     return new Promise(function (resolve, reject) {
  //         return resolve();
  //     })
  // }

  var promise = function promise() {
    return new Promise(function (resolve, reject) {
      return resolve();
    });
  };

  console.log(promise);
}
/* EX 04 -> Destructuring */

{
  // SC
  // 4.2
  // function mostraInfo(usuario) {
  //     return `${usuario.nome} tem ${usuario.idade} anos.`;
  // }
  var mostraInfo = function mostraInfo(_ref) {
    var nome = _ref.nome,
        idade = _ref.idade;
    return "".concat(nome, " tem ").concat(idade, " anos.");
  };

  // 4.1
  var empresa = {
    nome: 'Rocketseat',
    endereco: {
      cidade: 'Rio do Sul',
      estado: 'SC'
    }
  };
  var _nome = empresa.nome,
      _empresa$endereco = empresa.endereco,
      cidade = _empresa$endereco.cidade,
      estado = _empresa$endereco.estado;
  console.log(_nome); // Rocketseat

  console.log(cidade); // Rio do Sul

  console.log(estado);
  console.log(mostraInfo({
    nome: 'Diego',
    idade: 23
  }));
}
/* EX 05 -> REST/SPREAD */

{
  // [2, 3, 4, 5, 6]
  var soma = function soma() {
    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }

    return values.reduce(function (total, next) {
      return total + next;
    });
  };

  // 5.1
  var _arr = [1, 2, 3, 4, 5, 6];

  var x = _arr[0],
      y = _arr.slice(1);

  console.log(x); // 1

  console.log(y);
  console.log(soma(1, 2, 3, 4, 5, 6)); // 21

  console.log(soma(1, 2)); // 3
  // 5.2

  var _usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
      cidade: 'Rio do Sul',
      uf: 'SC',
      pais: 'Brasil'
    }
  }; // nome Gabriel

  var usuario2 = _objectSpread(_objectSpread({}, _usuario), {}, {
    nome: "Gabriel"
  }); // cidade Lontras


  var usuario3 = _objectSpread(_objectSpread({}, _usuario), {}, {
    endereco: _objectSpread(_objectSpread({}, _usuario.endereco), {}, {
      cidade: "Lontras"
    })
  });

  console.log(_usuario);
  console.log(usuario2);
  console.log(usuario3);
}
/* EX 06 -> TEMPLATE LITERALS */

{
  var _usuario2 = 'Diego';
  var _idade = 23; // console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');

  console.log("O usu\xE1rio ".concat(_usuario2, " possui ").concat(_idade, " anos"));
}
/* EX 07 -> Object Short Syntax */

{
  var _nome2 = 'Diego';
  var _idade2 = 23; // const usuario = {
  //     nome: nome,
  //     idade: idade,
  //     cidade: 'Rio do Sul',
  // };

  var _usuario3 = {
    nome: _nome2,
    idade: _idade2,
    cidade: "Rio do Sul"
  };
  console.log(_usuario3);
}
clear();
console.log("Loaded challenge 01!");
