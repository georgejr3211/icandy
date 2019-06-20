"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllItems = getAllItems;
exports.getOneItem = getOneItem;
exports.createItem = createItem;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;

var _model = require("../usuarios/model");

var _model2 = require("./model");

async function getAllItems(params) {
  const resources = await _model2.TelefoneUsuario.findAndCountAll({
    order: [['id', 'DESC']],
    include: [{
      model: _model.Usuario
    }]
  });
  return resources;
}

async function getOneItem(id) {
  const resources = await _model2.TelefoneUsuario.findByPk(id, {
    include: _model.Usuario
  });
  return resources;
}

async function createItem(data) {
  const resources = await _model2.TelefoneUsuario.create(data);
  return resources;
}

async function updateItem(id, data) {
  const resources = await _model2.TelefoneUsuario.findByPk(id).then(res => res.update(data)).catch(error => error);
  return resources;
}

async function deleteItem(id) {
  const resources = await _model2.TelefoneUsuario.destroy({
    where: {
      id
    }
  });
  return resources;
}