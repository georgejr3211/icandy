import { Produto } from '../produtos/model';
import { Categoria } from './model';
import { Preco } from '../precos/model';

export async function getAllItems(params) {
  const resources = await Categoria.findAll({
      where: { ativo: 1 },
      order: [['id', 'DESC']],
      limit: params.limit,
      offset: params.page,
      include: [{
        model: Produto,
        required: false,
        through: { attributes: [] },
        include: [Preco]
      }]
    });

  return resources;
}

export async function getOneItem(id) {
  const resources = await Categoria.findAll({
      where: { ativo: 1 },
      include: [{
        model: Produto,
        required: true,
        where: {
          lojasid: id
        },
        through: { attributes: [] },
        include: [{
          model: Preco,
        }]
      }]
    });

  return resources;
}

export async function createItem(data) {
  const resources = await Categoria.create(data);

  return resources;
}

export async function updateItem(id, data) {
  const resources = await Categoria.findByPk(id)
      .then(res => res.update(data))
      .catch(error => error);

  return resources;
}

export async function deleteItem(id) {
  const resources = await Categoria.update({ ativo: false }, { where: { id } })

  return resources;
}