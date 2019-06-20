import Sequelize from 'sequelize';

import sequelize from '../../config/connection';
import { Cupom } from '../cupons/model';
import { FormaPagamento } from '../formasPagamentos/model';
import { StatusPedido } from '../statusPedidos/model';
import { Usuario } from '../usuarios/model';

const Model = Sequelize.Model;

export class Pedido extends Model {}

Pedido.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  observacao: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
  dt_compra: {
    type: Sequelize.DATE,
    defaultValue: new Date(),
  },
  statusid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  usuariosid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  formas_pagamentoid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cuponsid: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

}, { sequelize, modelName: 'pedidos' });

Pedido.hasOne(FormaPagamento, { foreignKey: 'id', sourceKey: 'formas_pagamentoid' });
Pedido.hasOne(Cupom, { foreignKey: 'id', sourceKey: 'cuponsid', as: 'cupom' });
Pedido.hasOne(Usuario, { foreignKey: 'id', sourceKey: 'usuariosid' });
Pedido.hasOne(StatusPedido, { foreignKey: 'id', sourceKey: 'statusid' });