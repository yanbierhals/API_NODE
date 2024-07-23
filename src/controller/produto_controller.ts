import { StatusCodes } from "http-status-codes";
import { Request, Response } from 'express';
import { Categoria } from "../entidades/categoria";
import { Produto } from "../entidades/produto";

const produtoService = require('../service/produto_service')

async function listar(req: Request, res: Response): Promise<Response> {
    

    try {
      const listaProdutos = await produtoService.listar();
      return res.json(listaProdutos);
    }
    catch(err: any) {
      return res.status(err.id).json({msg: err.message});
    }
}

async function inserir(req: Request, res: Response): Promise<Response> {
    let produto = req.body;
    try {
        const prodInserido = await produtoService.inserir(produto);
        return res.status(StatusCodes.OK).json(prodInserido);
    }
    catch(err: any) {
      return res.status(err.id).json({msg: err.message});
    }
}


async function consultar(req: Request, res: Response): Promise<Response> {
    const id = +req.params.id; // Supondo que o id seja um número

    try {
        const produto = await produtoService.consultar(id);
        return res.json(produto);
      } catch (err: any) {
        // Retornar o erro original na resposta
        return res.status(500).json({ message: err.message });
    }
}


async function atualizar (req: Request, res: Response): Promise<Response> {
    const id = +req.params.id;
    let produto = req.body;
  
    try{ 
      const produtoAtualizado = await produtoService.atualizar(id, produto);
      return res.json(produtoAtualizado);
    }
    catch(err: any) {
      return res.status(err.id).json({msg: err.message});
    }
}

async function deletar(req: Request, res: Response): Promise<Response> {
    const id = +req.params.id;
    try{ 
      const produtoDeletado = await produtoService.deletar(id);
      return res.json(produtoDeletado);
    }
    catch(err: any) {
      return res.status(err.id).json({msg: err.message});
    }   
}

module.exports = {
    listar,
    inserir,
    consultar,
    atualizar,
    deletar
}