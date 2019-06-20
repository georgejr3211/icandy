"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loja = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

var _model = require("../enderecos/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class Loja extends Model {}

exports.Loja = Loja;
Loja.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: _sequelize.default.STRING(40),
    allowNull: false
  },
  cnpj: {
    type: _sequelize.default.STRING(20),
    allowNull: false,
    validate: {
      len: {
        msg: 'Deve haver 14 caracteres',
        args: [14, 14]
      }
    }
  },
  enderecosid: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  }
}, {
  sequelize: _connection.default,
  modelName: 'lojas',
  freezeTableName: true
});
Loja.hasOne(_model.Endereco, {
  sourceKey: 'enderecosid',
  foreignKey: 'id'
});