"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnidadeMedida = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class UnidadeMedida extends Model {}

exports.UnidadeMedida = UnidadeMedida;
UnidadeMedida.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: _sequelize.default.STRING(30),
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  }
}, {
  sequelize: _connection.default,
  modelName: 'unidade_medidas',
  freezeTableName: true
});