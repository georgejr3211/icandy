"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Produto = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

var _model = require("../lojas/model");

var _model2 = require("../precos/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class Produto extends Model {}

exports.Produto = Produto;
Produto.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: _sequelize.default.STRING(30),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  descricao: {
    type: _sequelize.default.TEXT,
    allowNull: true
  },
  foto: {
    type: _sequelize.default.STRING(100),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  peso: {
    type: _sequelize.default.DECIMAL(6, 3),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  unidade_medidasid: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  },
  ativo: {
    type: _sequelize.default.TINYINT,
    allowNull: false
  },
  precosid: {
    type: _sequelize.default.INTEGER,
    allowNull: true
  },
  lojasid: {
    type: _sequelize.default.INTEGER,
    allowNull: true
  }
}, {
  sequelize: _connection.default,
  modelName: 'produtos',
  freezeTableName: true
});
Produto.hasOne(_model2.Preco, {
  sourceKey: 'precosid',
  foreignKey: 'id'
});
Produto.belongsTo(_model.Loja, {
  sourceKey: 'lojasid',
  foreignKey: 'id'
});