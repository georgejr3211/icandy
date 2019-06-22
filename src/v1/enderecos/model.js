import Sequelize from 'sequelize';
import sequelize from  '../../config/connection';
const Model = Sequelize.Model;

export class Endereco extends Model {}

Endereco.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cep: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  complemento: {
    type: Sequelize.STRING(40),
    allowNull: true
  },
  rua: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  bairro: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  cidade: {
    type: Sequelize.STRING(40),
    allowNull: true
  },
  uf: {
    type: Sequelize.STRING(2),
    allowNull: false
  },
}, { sequelize, modelName: 'enderecos' });