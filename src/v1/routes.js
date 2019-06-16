import { Router } from 'express';
const router = Router();

import categoriasController from './categorias/ctrl';
import perfisController from './perfis/ctrl';
import enderecosController from './enderecos/ctrl';

router.use('/categorias', categoriasController);
router.use('/perfis', perfisController);
router.use('/enderecos', enderecosController);

export default router;