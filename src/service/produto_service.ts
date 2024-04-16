import { Produto } from "../interface/produto.interface";

const produtoRepository = require('../data/repository/produto_repository')

async function listar() {
    return await produtoRepository.listar();
}

async function inserir(produto: Produto) {
    if(produto && produto.nome && produto.preco) {// produto != undefined
        await produtoRepository.inserir(produto);
    }
    else {
        throw {id:400, message:"Produto nao possui nome ou preco"};
    }
}

async function consultar(id: number) {
    if(id == 0 || id == null){
        throw new Error(`Id inválido: ${id}`)
    }
    const produto = await produtoRepository.buscarPorId(id);
    if(produto) {
        return produto;
    }
    else {
        throw {id:404, message:"Produto nao encontrado"};
    }
}

async function atualizar(id: number, produtoAtualizado: Produto) {
    const produto = await produtoRepository.buscarPorId(id);
    if(!produto) {
        throw {id: 404, message: "Produto nao encontrado"};
    }
    
    if(produtoAtualizado && produtoAtualizado.nome && produtoAtualizado.preco){
        await produtoRepository.atualizar(id, produtoAtualizado);
    }
    else {
        throw {id: 400, message: "Produto nao possui um dos campos obrigatorios"};
    }
}

async function deletar(id: number) {
    const produtoDeletado = await produtoRepository.deletar(id);
    if(produtoDeletado){
        return produtoDeletado;
    }
    else {
        throw {id: 404, message: "Produto nao encontrado"};
    }
}

module.exports = {
    listar,
    inserir,
    consultar,
    atualizar,
    deletar
}