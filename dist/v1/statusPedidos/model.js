"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusPedido = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class StatusPedido extends Model {}

exports.StatusPedido = StatusPedido;
StatusPedido.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: _sequelize.default.STRING(30),
    allowNull: false
  }
}, {
  sequelize: _connection.default,
  modelName: 'status_pedidos',
  freezeTableName: true
});