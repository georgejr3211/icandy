"use strict";

var _dotenv = require("dotenv");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();
var sequelize = new _sequelize["default"](process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_TYPE,
  port: process.env.DB_PORT
});
sequelize.authenticate().then(function () {
  return console.log('Conectado ao banco de dados');
})["catch"](function (err) {
  return console.log('Falha ao se conectar:', err);
});
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.get(function (req, res) {
  return res.json({
    apiName: 'icandy'
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log("Server on at port ".concat(port));
});