import { Router } from 'express';

import categoriasController from './categorias/ctrl';
import cuponsController from './cupons/ctrl';
import enderecosController from './enderecos/ctrl';
import estoquesController from './estoques/ctrl';
import formasPagamentosController from './formasPagamentos/ctrl';
import lojasController from './lojas/ctrl';
import pedidosController from './pedidos/ctrl';
import pedidosProdutosController from './pedidosProdutos/ctrl';
import perfisController from './perfis/ctrl';
import precosController from './precos/ctrl';
import produtosController from './produtos/ctrl';
import produtosCategoriasController from './produtosCategorias/ctrl';
import statusPedidosController from './statusPedidos/ctrl';
import telefonesLojasController from './telefonesLojas/ctrl';
import telefonesUsuariosController from './telefonesUsuarios/ctrl';
import unidadeMedidasController from './unidadeMedidas/ctrl';
import usuariosController from './usuarios/ctrl';

const router = Router();

router.use('/categorias', categoriasController);
router.use('/perfis', perfisController);
router.use('/enderecos', enderecosController);
router.use('/formas-pagamentos', formasPagamentosController);
router.use('/lojas', lojasController);
router.use('/usuarios', usuariosController);
router.use('/unidade-medidas', unidadeMedidasController);
router.use('/precos', precosController);
router.use('/produtos', produtosController);
router.use('/telefones-usuarios', telefonesUsuariosController);
router.use('/produtos-categorias', produtosCategoriasController);
router.use('/estoques', estoquesController);
router.use('/telefones-lojas', telefonesLojasController);
router.use('/status-pedidos', statusPedidosController);
router.use('/cupons', cuponsController);
router.use('/pedidos', pedidosController);
router.use('/pedidos-produtos', pedidosProdutosController);

export default router;