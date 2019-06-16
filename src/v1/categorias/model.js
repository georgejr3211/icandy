import Sequelize from 'sequelize';
import sequelize from  '../../config/connection';
const Model = Sequelize.Model;

export class Categoria extends Model {}

Categoria.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  ativo: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, { sequelize, modelName: 'categorias' });