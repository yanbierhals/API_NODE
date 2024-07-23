import { AppDataSource } from "..";
import { ProdutoMap } from "../entitys/produto.map";

const produtoRepository = AppDataSource.getRepository(ProdutoMap);

async function inserirProduto(nome: string, descricao: string, preco: number): Promise<ProdutoMap> {
    const novoProduto = new ProdutoMap();
    novoProduto.nome = nome;
    novoProduto.descricao = descricao;
    novoProduto.preco = preco;

    const resultado = await produtoRepository.save(novoProduto);


    return resultado;
}


async function concultarProduto(id: number): Promise<ProdutoMap | null> {
    return await produtoRepository.findOneBy({id: id })
}


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


async function deletarProduto(id: number): Promise<boolean> {
    const produto = await produtoRepository.findOneBy({id: id });
    if (produto) {
        await produtoRepository.remove(produto);
        return true;
    }
    return false;
}


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