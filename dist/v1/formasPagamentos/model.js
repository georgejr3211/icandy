"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormaPagamento = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class FormaPagamento extends Model {}

exports.FormaPagamento = FormaPagamento;
FormaPagamento.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: _sequelize.default.STRING(30),
    allowNull: false,
    validate: {
      len: {
        msg: '3 a 30 caracteres!',
        args: [3, 30]
      }
    }
  },
  ativo: {
    type: _sequelize.default.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
}, {
  sequelize: _connection.default,
  modelName: 'formas_pagamento',
  freezeTableName: true
});