import Sequelize from 'sequelize';

import sequelize from '../../config/connection';
import { Pedido } from '../pedidos/model';
import { Produto } from '../produtos/model';

const Model = Sequelize.Model;

export class PedidoProduto extends Model {}

PedidoProduto.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  produtosid: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  pedidosid: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'pedidos_produtos' });

PedidoProduto.hasOne(Pedido, { foreignKey: 'id', sourceKey: 'pedidosid' });
PedidoProduto.hasOne(Produto, { foreignKey: 'id', sourceKey: 'produtosid' });