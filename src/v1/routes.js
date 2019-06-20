import { Router } from 'express';

import categoriasController from './categorias/ctrl';
import enderecosController from './enderecos/ctrl';
import formasPagamentoController from './formasPagamento/ctrl';
import lojasController from './lojas/ctrl';
import perfisController from './perfis/ctrl';
import precosController from './precos/ctrl';
import produtosController from './produtos/ctrl';
import unidadeMedidasController from './unidadeMedidas/ctrl';
import usuariosController from './usuarios/ctrl';
import telefonesUsuarioController from './telefonesUsuario/ctrl';

const router = Router();

router.use('/categorias', categoriasController);
router.use('/perfis', perfisController);
router.use('/enderecos', enderecosController);
router.use('/formas-pagamento', formasPagamentoController);
router.use('/lojas', lojasController);
router.use('/usuarios', usuariosController);
router.use('/unidade-medidas', unidadeMedidasController);
router.use('/precos', precosController);
router.use('/produtos', produtosController);
router.use('/telefones-usuario', telefonesUsuarioController);

export default router;