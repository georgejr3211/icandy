"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Endereco = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class Endereco extends Model {}

exports.Endereco = Endereco;
Endereco.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cep: {
    type: _sequelize.default.STRING(10),
    allowNull: false
  },
  numero: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  complemento: {
    type: _sequelize.default.STRING(40),
    allowNull: true
  },
  rua: {
    type: _sequelize.default.STRING(100),
    allowNull: false
  },
  bairro: {
    type: _sequelize.default.STRING(100),
    allowNull: false
  },
  cidade: {
    type: _sequelize.default.STRING(40),
    allowNull: true
  },
  uf: {
    type: _sequelize.default.STRING(2),
    allowNull: false
  }
}, {
  sequelize: _connection.default,
  modelName: 'enderecos'
});