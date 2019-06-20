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

var _model2 = require("../perfis/model");

var _model3 = require("./model");

async function getAllItems(params) {
  const resources = await _model3.Usuario.findAndCountAll({
    order: [['id', 'DESC']],
    where: {
      ativo: 1
    },
    include: [{
      model: _model.Endereco
    }, {
      model: _model2.Perfil
    }],
    limit: params.limit,
    offset: params.page
  });
  return resources;
}

async function getOneItem(id) {
  const resources = await _model3.Usuario.findByPk(id, {
    where: {
      ativo: 1
    },
    include: [{
      model: _model.Endereco
    }, {
      model: _model2.Perfil
    }]
  });
  return resources;
}

async function createItem(data) {
  const resources = await _model3.Usuario.create(data);
  return resources;
}

async function updateItem(id, data) {
  const resources = await _model3.Usuario.findByPk(id).then(res => res.update(data)).catch(error => error);
  return resources;
}

async function deleteItem(id) {
  const resources = await _model3.Usuario.update({
    ativo: false
  }, {
    where: {
      id
    }
  });
  return resources;
}