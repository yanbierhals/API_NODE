import { ProdutoMap } from "../data/DAO/entitys/produto.map";
import { Categoria } from "../entidades/categoria";
import { Produto } from "../entidades/produto";

const produtoRepository = require('../data/repository/produto_repository')
const produtoDao = require('../data/DAO/daoService/produto_dao')

async function listar(): Promise<ProdutoMap[]> {
    return await produtoDao.listar();
}

async function inserir(produto: Produto): Promise<number> {
    if(produto && produto.nome && produto.preco) {
        return await produtoRepository.inserir(produto);
    }
    else {
        throw {id:400, message:"Produto nao possui nome ou preco"};
    }
}

async function consultar(id: number): Promise<ProdutoMap> {
   
    if(id == 0 || id == null){
        throw {id:400, message:`Id inválido: ${id}`};
    }

    try {
        const produto = await produtoRepository.consultar(id);
        if(produto) {
            return produto;
        }
        else {
            throw {id:404, message:"Produto nao encontrado"};
        }
      } catch (error: any) {
        // Handle or throw the error
        throw new Error(`Failed to consult product with ID ${id}: ${error.message}`);
      }
  
}

async function atualizar(id: number, produtoAtualizado: Produto): Promise<Produto> {
    const produto = await produtoRepository.consultar(id);
    if(!produto) {
        throw {id: 404, message: "Produto nao encontrado"};
    }
    
    if(produtoAtualizado && produtoAtualizado.nome && produtoAtualizado.preco){
        return await produtoRepository.atualizar(id, produtoAtualizado);
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