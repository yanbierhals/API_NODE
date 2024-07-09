import { AppDataSource } from "..";
import { ProdutoMap } from "../entitys/produto.map";

const produtoRepository = AppDataSource.getRepository(ProdutoMap);

// Função para criar um novo produto
async function inserirProduto(nome: string, descricao: string, preco: number): Promise<ProdutoMap> {
    const novoProduto = new ProdutoMap();
    novoProduto.nome = nome;
    novoProduto.descricao = descricao;
    novoProduto.preco = preco;

    // Salve o novo produto no banco de dados e retorne o produto inserido
    const resultado = await produtoRepository.save(novoProduto);

    // Retorne o produto inserido
    return resultado;
}

// Função para obter um produto pelo ID
async function concultarProduto(id: number): Promise<ProdutoMap | null> {
    return await produtoRepository.findOneBy({id: id })
}

// Função para atualizar um produto
async function atualizarProduto(id: number, nome: string, descricao: string, preco: number): Promise<ProdutoMap | undefined> {
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
async function listarProdutos(): Promise<ProdutoMap[]> {
    return await produtoRepository.find();
}

module.exports = {
    inserirProduto,
    concultarProduto,
    atualizarProduto,
    deletarProduto,
    listarProdutos
}