"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllItems = getAllItems;
exports.getOneItem = getOneItem;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;

var _model = require("../produtos/model");

var _model2 = require("./model");

async function getAllItems(params) {
  const resources = await _model2.Estoque.findAll({
    order: [['id', 'DESC']],
    include: [_model.Produto],
    limit: params.limit,
    offset: params.page
  });
  return resources;
}

async function getOneItem(id) {
  const resources = await _model2.Estoque.findByPk(id, {
    include: [_model.Produto]
  });
  return resources;
}

async function createItem(data) {
  const resources = _model2.Estoque.create(data);

  return resources;
}

async function updateItem(id, data) {
  const resources = await _model2.Estoque.findByPk(id).then(res => res.update(data)).catch(error => error);
  return resources;
}

async function deleteItem(id) {
  const resources = await _model2.Estoque.destroy({
    where: {
      id
    }
  });
  return resources;
}