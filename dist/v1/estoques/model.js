"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Estoque = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

var _model = require("../produtos/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class Estoque extends Model {}

exports.Estoque = Estoque;
Estoque.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantidade: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  produtosid: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  }
}, {
  sequelize: _connection.default,
  modelName: 'estoques'
});
Estoque.hasOne(_model.Produto, {
  foreignKey: 'id',
  sourceKey: 'produtosid'
});