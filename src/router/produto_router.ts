const produtoController = require('../controller/produto_controller.ts')
//const express = require('express');
const router = express.Router()

//router: /api/produtos
router.get('/', produtoController.listar);
router.post('/', produtoController.inserir);
router.get('/:id', produtoController.consultar);
router.put('/:id', produtoController.atualizar);
router.delete('/:id', produtoController.deletar);

module.exports = router;