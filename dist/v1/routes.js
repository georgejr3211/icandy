"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ctrl = _interopRequireDefault(require("./categorias/ctrl"));

var _ctrl2 = _interopRequireDefault(require("./cupons/ctrl"));

var _ctrl3 = _interopRequireDefault(require("./enderecos/ctrl"));

var _ctrl4 = _interopRequireDefault(require("./estoques/ctrl"));

var _ctrl5 = _interopRequireDefault(require("./formasPagamentos/ctrl"));

var _ctrl6 = _interopRequireDefault(require("./lojas/ctrl"));

var _ctrl7 = _interopRequireDefault(require("./pedidos/ctrl"));

var _ctrl8 = _interopRequireDefault(require("./pedidosProdutos/ctrl"));

var _ctrl9 = _interopRequireDefault(require("./perfis/ctrl"));

var _ctrl10 = _interopRequireDefault(require("./precos/ctrl"));

var _ctrl11 = _interopRequireDefault(require("./produtos/ctrl"));

var _ctrl12 = _interopRequireDefault(require("./produtosCategorias/ctrl"));

var _ctrl13 = _interopRequireDefault(require("./statusPedidos/ctrl"));

var _ctrl14 = _interopRequireDefault(require("./telefonesLojas/ctrl"));

var _ctrl15 = _interopRequireDefault(require("./telefonesUsuarios/ctrl"));

var _ctrl16 = _interopRequireDefault(require("./unidadeMedidas/ctrl"));

var _ctrl17 = _interopRequireDefault(require("./usuarios/ctrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use('/categorias', _ctrl.default);
router.use('/perfis', _ctrl9.default);
router.use('/enderecos', _ctrl3.default);
router.use('/formas-pagamentos', _ctrl5.default);
router.use('/lojas', _ctrl6.default);
router.use('/usuarios', _ctrl17.default);
router.use('/unidade-medidas', _ctrl16.default);
router.use('/precos', _ctrl10.default);
router.use('/produtos', _ctrl11.default);
router.use('/telefones-usuarios', _ctrl15.default);
router.use('/produtos-categorias', _ctrl12.default);
router.use('/estoques', _ctrl4.default);
router.use('/telefones-lojas', _ctrl14.default);
router.use('/status-pedidos', _ctrl13.default);
router.use('/cupons', _ctrl2.default);
router.use('/pedidos', _ctrl7.default);
router.use('/pedidos-produtos', _ctrl8.default);
router.get('/routes', (req, res, next) => {
  const routes = ['/categorias', '/perfis', '/enderecos', '/formas-pagamentos', '/lojas', '/usuarios', '/unidade-medidas', '/precos', '/produtos', '/telefones-usuarios', '/produtos-categorias', '/estoques', '/telefones-lojas', '/status-pedidos', '/cupons', '/pedidos', '/pedidos-produtos'];
  return res.json({
    routes
  });
});
var _default = router;
exports.default = _default;