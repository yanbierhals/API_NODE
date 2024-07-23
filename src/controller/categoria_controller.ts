import { StatusCodes } from "http-status-codes";
import { Request, Response } from 'express';
import { Categoria } from "../entidades/categoria";

const categoriaService = require('../service/categoria_service');

async function listar(req: Request, res: Response): Promise<Response> {
    try {
        const listaCategorias = await categoriaService.listar();
        return res.json(listaCategorias);
    } catch (err: any) {
        return res.status(err.id || StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
    }
}

async function inserir(req: Request, res: Response): Promise<Response> {
    const categoria: Categoria = req.body;
    try {
        const categoriaInserida = await categoriaService.inserir(categoria);
        return res.status(StatusCodes.CREATED).json(categoriaInserida);
    } catch (err: any) {
        return res.status(err.id || StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
    }
}

async function consultar(req: Request, res: Response): Promise<Response> {
    const id = +req.params.id; // Supondo que o id seja um número

    try {
        const categoria = await categoriaService.consultar(id);
        return res.json(categoria);
    } catch (err: any) {
        return res.status(err.id || StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
    }
}

async function atualizar(req: Request, res: Response): Promise<Response> {
    const id = +req.params.id;
    const categoria: Categoria = req.body;

    try {
        const categoriaAtualizada = await categoriaService.atualizar(id, categoria);
        return res.json(categoriaAtualizada);
    } catch (err: any) {
        return res.status(err.id || StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
    }
}

async function deletar(req: Request, res: Response): Promise<Response> {
    const id = +req.params.id;

    try {
        const categoriaDeletada = await categoriaService.deletar(id);
        return res.json(categoriaDeletada);
    } catch (err: any) {
        return res.status(err.id || StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message });
    }
}

module.exports = {
    listar,
    inserir,
    consultar,
    atualizar,
    deletar
};
