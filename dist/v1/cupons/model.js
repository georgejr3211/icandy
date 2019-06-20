"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cupom = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

var _model = require("../unidadeMedidas/model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class Cupom extends Model {}

exports.Cupom = Cupom;
Cupom.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: _sequelize.default.STRING(30),
    allowNull: false
  },
  dt_cadastro: {
    type: _sequelize.default.DATE,
    allowNull: false,
    defaultValue: new Date()
  },
  dt_validade: {
    type: _sequelize.default.DATE,
    allowNull: false
  },
  valor: {
    type: _sequelize.default.DECIMAL(6, 2),
    allowNull: false
  },
  unidade_medidasid: {
    type: _sequelize.default.INTEGER,
    allowNull: false
  }
}, {
  sequelize: _connection.default,
  modelName: 'cupons',
  freezeTableName: true
});
Cupom.hasOne(_model.UnidadeMedida, {
  sourceKey: 'unidade_medidasid',
  foreignKey: 'id'
});