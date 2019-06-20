import { Usuario } from '../usuarios/model';
import { TelefoneUsuario } from './model';

export async function getAllItems(params) {
  const resources = await TelefoneUsuario.findAndCountAll({
    order: [['id', 'DESC']],
    include: [{
      model: Usuario,
    }]
  });

  return resources;
}

export async function getOneItem(id) {
  const resources = await TelefoneUsuario.findByPk(id, { include: Usuario });

  return resources;
}

export async function createItem(data) {
  const resources = await TelefoneUsuario.create(data);

  return resources;
}

export async function updateItem(id, data) {
  const resources = await TelefoneUsuario.findByPk(id)
    .then(res => res.update(data))
    .catch(error => error);

  return resources;
}

export async function deleteItem(id) {
  const resources = await TelefoneUsuario.destroy({ where: { id } })

  return resources;
}