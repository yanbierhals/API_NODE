import { StatusCodes } from "http-status-codes";
import { Request, Response } from 'express';

const produtoService = require('../service/produto_service')


async function listar(req: Request, res: Response) {
    const listaProdutos = await produtoService.listar();
    res.json(listaProdutos);
}

async function inserir(req: Request, res: Response) {
    let produto = req.body;
    try {
        const prodInserido = await produtoService.inserir(produto);
        res.status(StatusCodes.OK).json(prodInserido);
    }
    catch(err: any) {
        //id-> 400 / msg -> msg de erro
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message});
    }
}


async function consultar(req: Request, res: Response): Promise<void> {
    const id = +req.params.id;
    try {
      const prod = await produtoService.buscarPorId(id);
      res.json(prod);
    }
    catch(err: any) {
      //id-> 404 / msg -> msg de erro
      res.status(err.id).json({msg: err.message});
    }
}

async function atualizar (req: Request, res: Response) {
    const id = +req.params.id;
    let produto = req.body;
  
    try{ 
      const produtoAtualizado = await produtoService.atualizar(id, produto);
      res.json(produtoAtualizado);
    }
    catch(err: any) {
      res.status(err.id).json({msg: err.message});
    }
}

async function deletar(req: Request, res: Response) {
    const id = +req.params.id;
    try{ 
      const produtoDeletado = await produtoService.deletar(id);
      res.json(produtoDeletado);
    }
    catch(err: any) {
      res.status(err.id).json({msg: err.message});
    }   
}

module.exports = {
    listar,
    inserir,
    consultar,
    atualizar,
    deletar
}