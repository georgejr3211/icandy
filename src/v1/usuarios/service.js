import { Endereco } from '../enderecos/model';
import { Perfil } from '../perfis/model';
import { Usuario } from './model';

export async function getAllItems(params) {
  const resources = await Usuario.findAndCountAll({
    order: [['id', 'DESC']],
    where: {
      ativo: 1
    },
    include: [{
      model: Endereco,
    },{
      model: Perfil,
    }],
    limit: params.limit,
    offset: params.page
  });

  return resources;

}

export async function getOneItem(id) {
  const resources = await Usuario.findByPk(id, {
    where: {
      ativo: 1
    },
    include: [{
      model: Endereco,
    },{
      model: Perfil,
    }]
  });

  return resources;

}

export async function createItem(data) {
  const resources = await Usuario.create(data);

  return resources;

}

export async function updateItem(id, data) {
  const resources = await Usuario.findByPk(id)
    .then(res => res.update(data))
    .catch(error => error);

  return resources;

}

export async function deleteItem(id) {
  const resources = await Usuario.update({ ativo: false }, { where: { id } })

  return resources;

}