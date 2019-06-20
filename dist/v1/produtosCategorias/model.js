"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProdutoCategoria = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

var _model = require("../categorias/model");

var _model2 = require("../produtos/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class ProdutoCategoria extends Model {}

exports.ProdutoCategoria = ProdutoCategoria;
ProdutoCategoria.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  produtosid: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  categoriasid: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  }
}, {
  sequelize: _connection.default,
  modelName: 'produtos_categorias'
});
ProdutoCategoria.hasOne(_model2.Produto, {
  foreignKey: 'id',
  sourceKey: 'produtosid'
});
ProdutoCategoria.hasOne(_model.Categoria, {
  foreignKey: 'id',
  sourceKey: 'categoriasid'
});