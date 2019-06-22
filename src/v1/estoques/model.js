import Sequelize from 'sequelize';
import sequelize from  '../../config/connection';
import { Produto } from '../produtos/model';
const Model = Sequelize.Model;

export class Estoque extends Model {}

Estoque.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, { sequelize, modelName: 'estoques' });
Estoque.belongsTo(Produto, { sourceKey: 'produtosid', foreignKey: 'id' });