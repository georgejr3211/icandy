"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Perfil = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _connection = _interopRequireDefault(require("../../config/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class Perfil extends Model {}

exports.Perfil = Perfil;
Perfil.init({
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: _sequelize.default.STRING(25),
    allowNull: false
  }
}, {
  sequelize: _connection.default,
  modelName: 'perfis'
});