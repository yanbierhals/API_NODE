import { AppDataSource } from "..";
import { Produto } from "../entitys/produto.map";


const produtoRepository = AppDataSource.getRepository(Produto);

// Função para criar um novo produto
async function inserirProduto(nome: string, descricao: string, preco: number): Promise<Produto> {
    const novoProduto = new Produto();
    novoProduto.nome = nome;
    novoProduto.descricao = descricao;
    novoProduto.preco = preco;
    return await produtoRepository.save(novoProduto);
}

// Função para obter um produto pelo ID
async function concultarProduto(id: number): Promise<Produto | null> {
    return await produtoRepository.findOneBy({id: id })
}

// Função para atualizar um produto
async function atualizarProduto(id: number, nome: string, descricao: string, preco: number): Promise<Produto | undefined> {
    const produto = await produtoRepository.findOneBy({id: id });
    if (produto) {
        produto.nome = nome;
        produto.descricao = descricao;
        produto.preco = preco;
        return await produtoRepository.save(produto);
    }
    return undefined;
}

// Função para excluir um produto
async function deletarProduto(id: number): Promise<boolean> {
    const produto = await produtoRepository.findOneBy({id: id });
    if (produto) {
        await produtoRepository.remove(produto);
        return true;
    }
    return false;
}

// Função para listar todos os produtos
async function listarProdutos(): Promise<Produto[]> {
    return await produtoRepository.find();
}

module.exports = {
    inserirProduto,
    concultarProduto,
    atualizarProduto,
    deletarProduto,
    listarProdutos
}