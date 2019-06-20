"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PedidoProduto = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

var _model = require("../pedidos/model");

var _model2 = require("../produtos/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class PedidoProduto extends Model {}

exports.PedidoProduto = PedidoProduto;
PedidoProduto.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  produtosid: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  pedidosid: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  quantidade: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  }
}, {
  sequelize: _connection.default,
  modelName: 'pedidos_produtos'
});
PedidoProduto.hasOne(_model.Pedido, {
  foreignKey: 'id',
  sourceKey: 'pedidosid'
});
PedidoProduto.hasOne(_model2.Produto, {
  foreignKey: 'id',
  sourceKey: 'produtosid'
});