"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllItems = getAllItems;
exports.getOneItem = getOneItem;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;

var _model = require("../enderecos/model");

var _model2 = require("./model");

async function getAllItems(params) {
  const resources = await _model2.Loja.findAndCountAll({
    order: [['id', 'DESC']],
    include: [{
      model: _model.Endereco
    }],
    limit: params.limit,
    offset: params.page
  });
  return resources;
}

async function getOneItem(id) {
  const resources = await _model2.Loja.findByPk(id, {
    include: _model.Endereco
  });
  return resources;
}

async function createItem(data) {
  const resources = await _model2.Loja.create(data, {
    include: _model.Endereco
  });
  return resources;
}

async function updateItem(id, data) {
  const resources = await _model2.Loja.findByPk(id).then(res => res.update(data)).catch(error => error);
  return resources;
}

async function deleteItem(id) {
  const resources = await _model2.Loja.destroy({
    where: {
      id
    }
  });
  return resources;
}