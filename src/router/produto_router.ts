import express from 'express';
const produtoController = require('../controller/produto_controller');


const router = express.Router();

// Roteamento: /api/produtos
router.get('/', produtoController.listar);
router.post('/', produtoController.inserir);
router.get('/:id', produtoController.consultar);
router.put('/:id', produtoController.atualizar);
router.delete('/:id', produtoController.deletar);

module.exports = router;
