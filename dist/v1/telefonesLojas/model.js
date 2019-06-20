"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TelefoneLoja = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

var _model = require("../lojas/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class TelefoneLoja extends Model {}

exports.TelefoneLoja = TelefoneLoja;
TelefoneLoja.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ddd: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  fone: {
    type: _sequelize.default.STRING(15),
    allowNull: false,
    validate: {
      len: {
        msg: 'Deve haver 15 caracteres',
        args: [1, 15]
      }
    }
  },
  lojasid: {
    type: _sequelize.default.INTEGER,
    allowNull: false,
    references: {
      model: _model.Loja,
      key: 'id'
    }
  }
}, {
  sequelize: _connection.default,
  modelName: 'telefones_loja',
  freezeTableName: true
});
TelefoneLoja.hasOne(_model.Loja, {
  sourceKey: 'lojasid',
  foreignKey: 'id'
});