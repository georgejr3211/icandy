"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Preco = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class Preco extends Model {}

exports.Preco = Preco;
Preco.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dt_inicio: {
    type: _sequelize.default.DATE,
    defaultValue: new Date()
  },
  dt_fim: {
    type: _sequelize.default.DATE
  },
  preco: {
    type: _sequelize.default.DECIMAL(6, 2),
    allowNull: false
  }
}, {
  sequelize: _connection.default,
  modelName: 'precos',
  freezeTableName: true
});