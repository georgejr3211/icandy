"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pedido = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

var _model = require("../cupons/model");

var _model2 = require("../formasPagamentos/model");

var _model3 = require("../statusPedidos/model");

var _model4 = require("../usuarios/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class Pedido extends Model {}

exports.Pedido = Pedido;
Pedido.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  observacao: {
    type: _sequelize.default.STRING(50),
    allowNull: true
  },
  dt_compra: {
    type: _sequelize.default.DATE,
    defaultValue: new Date()
  },
  statusid: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  usuariosid: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  formas_pagamentoid: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  cuponsid: {
    type: _sequelize.default.INTEGER,
    allowNull: true
  }
}, {
  sequelize: _connection.default,
  modelName: 'pedidos'
});
Pedido.hasOne(_model2.FormaPagamento, {
  foreignKey: 'id',
  sourceKey: 'formas_pagamentoid'
});
Pedido.hasOne(_model.Cupom, {
  foreignKey: 'id',
  sourceKey: 'cuponsid',
  as: 'cupom'
});
Pedido.hasOne(_model4.Usuario, {
  foreignKey: 'id',
  sourceKey: 'usuariosid'
});
Pedido.hasOne(_model3.StatusPedido, {
  foreignKey: 'id',
  sourceKey: 'statusid'
});