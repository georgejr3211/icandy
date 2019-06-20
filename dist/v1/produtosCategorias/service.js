"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllItems = getAllItems;
exports.getOneItem = getOneItem;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;

var _model = require("../categorias/model");

var _model2 = require("../produtos/model");

var _model3 = require("./model");

async function getAllItems(params) {
  const resources = await _model3.ProdutoCategoria.findAll({
    order: [['id', 'DESC']],
    include: [_model2.Produto, _model.Categoria],
    limit: params.limit,
    offset: params.page
  });
  return resources;
}

async function getOneItem(id) {
  const resources = await _model3.ProdutoCategoria.findByPk(id, {
    include: [_model2.Produto, _model.Categoria]
  });
  return resources;
}

async function createItem(data) {
  const resources = _model3.ProdutoCategoria.create(data);

  return resources;
}

async function updateItem(id, data) {
  const resources = await _model3.ProdutoCategoria.findByPk(id).then(res => res.update(data)).catch(error => error);
  return resources;
}

async function deleteItem(id) {
  const resources = await _model3.ProdutoCategoria.destroy({
    where: {
      id
    }
  });
  return resources;
}