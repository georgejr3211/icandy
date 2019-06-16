import Sequelize from 'sequelize';
import sequelize from  '../../config/connection';
const Model = Sequelize.Model;

export class Perfil extends Model {}

Perfil.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: Sequelize.STRING(25),
    allowNull: false
  }
}, { sequelize, modelName: 'perfis' });