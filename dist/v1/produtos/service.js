"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllItems = getAllItems;
exports.getOneItem = getOneItem;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;

var _model = require("../lojas/model");

var _model2 = require("../precos/model");

var _model3 = require("../unidadeMedidas/model");

var _model4 = require("./model");

async function getAllItems(params) {
  const resources = await _model4.Produto.findAndCountAll({
    order: [['id', 'DESC']],
    include: [_model2.Preco, _model.Loja, _model3.UnidadeMedida],
    limit: params.limit,
    offset: params.page
  });
  return resources;
}

async function getOneItem(id) {
  const resources = await _model4.Produto.findByPk(id, {
    include: [_model2.Preco, _model.Loja, _model3.UnidadeMedida]
  });
  return resources;
}

async function createItem(data) {
  const resources = await _model4.Produto.create(data, {
    include: _model2.Preco
  });
  return resources;
}

async function updateItem(id, data) {
  const resources = await _model4.Produto.findByPk(id).then(res => res.update(data)).catch(error => error);
  return resources;
}

async function deleteItem(id) {
  const resources = await _model4.Produto.update({
    ativo: false
  }, {
    where: {
      id
    }
  });
  return resources;
}