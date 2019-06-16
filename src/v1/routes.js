import { Router } from 'express';
const router = Router();

import categoriasController from './categorias/ctrl';

router.use('/categorias', categoriasController);

export default router;