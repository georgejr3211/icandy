"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllItems = getAllItems;
exports.getOneItem = getOneItem;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;

var _model = require("../cupons/model");

var _model2 = require("../formasPagamentos/model");

var _model3 = require("../statusPedidos/model");

var _model4 = require("../usuarios/model");

var _model5 = require("./model");

async function getAllItems(params) {
  const resources = await _model5.Pedido.findAll({
    order: [['id', 'DESC']],
    include: [{
      model: _model2.FormaPagamento
    }, {
      model: _model3.StatusPedido
    }, {
      model: _model.Cupom,
      as: 'cupom'
    }, {
      model: _model4.Usuario
    }],
    limit: params.limit,
    offset: params.page
  });
  return resources;
}

async function getOneItem(id) {
  const resources = await _model5.Pedido.findByPk(id, {
    include: [{
      model: _model2.FormaPagamento
    }, {
      model: _model3.StatusPedido
    }, {
      model: _model.Cupom,
      as: 'cupom'
    }, {
      model: _model4.Usuario
    }]
  });
  return resources;
}

async function createItem(data) {
  const resources = _model5.Pedido.create(data);

  return resources;
}

async function updateItem(id, data) {
  const resources = await _model5.Pedido.findByPk(id).then(res => res.update(data)).catch(error => error);
  return resources;
}

async function deleteItem(id) {
  const resources = await _model5.Pedido.destroy({
    where: {
      id
    }
  });
  return resources;
}