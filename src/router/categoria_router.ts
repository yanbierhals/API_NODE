import express from 'express';
const router = express.Router();

const categoriaController = require('../controller/categoria_controller');



// Roteamento: /api/produtos
router.get('/', categoriaController.listar);
router.post('/', categoriaController.inserir);
router.get('/:id', categoriaController.consultar);
router.put('/:id', categoriaController.atualizar);
router.delete('/:id', categoriaController.deletar);

module.exports = router;
