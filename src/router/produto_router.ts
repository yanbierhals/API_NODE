import express from 'express';
const router = express.Router()
const produtoController = require('../controller/produto_controller')

//router: /api/produtos
router.get('/', produtoController.listar);
router.post('/', produtoController.inserir);
router.get('/:id', produtoController.consultar);
router.put('/:id', produtoController.atualizar);
router.delete('/:id', produtoController.deletar);

module.exports = router;