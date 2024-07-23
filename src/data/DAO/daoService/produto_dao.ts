import { AppDataSource } from "..";
import { ProdutoMap } from "../entitys/produto.map";

const produtoRepository = AppDataSource.getRepository(ProdutoMap);

async function inserir(nome: string, descricao: string, preco: number): Promise<ProdutoMap> {
    const novoProduto = new ProdutoMap();
    novoProduto.nome = nome;
    novoProduto.descricao = descricao;
    novoProduto.preco = preco;

    const resultado = await produtoRepository.save(novoProduto);


    return resultado;
}


async function concultar(id: number): Promise<ProdutoMap | null> {
    return await produtoRepository.findOneBy({id: id })
}


async function atualizar(id: number, nome: string, descricao: string, preco: number): Promise<ProdutoMap | undefined> {
    const produto = await produtoRepository.findOneBy({id: id });
    if (produto) {
        produto.nome = nome;
        produto.descricao = descricao;
        produto.preco = preco;
        return await produtoRepository.save(produto);
    }
    return undefined;
}


async function deletar(id: number): Promise<boolean> {
    const produto = await produtoRepository.findOneBy({id: id });
    if (produto) {
        await produtoRepository.remove(produto);
        return true;
    }
    return false;
}


async function listar(): Promise<ProdutoMap[]> {
    try {
        const produtos = await produtoRepository.find();
        return produtos;
    } catch (error) {
        console.error('Error fetching products:', error);
        // You can throw the error or handle it accordingly
        throw new Error('Failed to fetch products');
    }
}

module.exports = {
    inserir,
    concultar,
    atualizar,
    deletar,
    listar
}