import { Loja } from '../lojas/model';
import { Preco } from '../precos/model';
import { Produto } from './model';
import { Endereco } from '../enderecos/model';

export async function getAllItems(params) {
  try {
    const resources = await Produto.findAndCountAll({
      order: [['id', 'DESC']],
      include: [{
        model: Loja,
      },{
        model: Preco,
      }]
    });

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getOneItem(id) {
  try {
    const resources = await Produto.findByPk(id, { include: [{
      model: Loja,
    },{
      model: Preco,
    }] });

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createItem(data) {
  try {
    const resources = await Produto.create(data, { include: [ Preco ] });

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateItem(id, data) {
  try {
    const resources = await Produto.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteItem(id) {
  try {
    const resources = await Produto.destroy({ where: { id } })

    return resources;
  } catch (error) {
    throw new Error(error);
  }
}