import { Produto } from "../../entidades/produto";
import client from './postgres/dbConnection';


async function listar() {
    const query = 'SELECT * FROM public."PRODUTO"';
    const result = await client.query(query);
    return result.rows;
}

async function inserir(produto: Produto): Promise<number> {
    const query = 'INSERT INTO public."PRODUTO" ("NOME", "PRECO", "DESCRICAO", "CATEGORIA_ID") VALUES ($1, $2, $3, $4) RETURNING "ID"';
    const values = [produto.nome, produto.preco, produto.descricao, produto.categoria.id];
    const result = await client.query(query, values);
    produto.id = result.rows[0].ID;
    return produto.id;
}

async function consultar(id: number): Promise<Produto> {
    const query = 'SELECT * FROM public."PRODUTO" WHERE "ID" = $1';
    const values = [id];
    const result = await client.query(query, values);
    return result.rows[0];
}

async function atualizar(id: number, produto: Produto): Promise<Produto> {
    const query = 'UPDATE public."PRODUTO" SET "NOME" = $1, "PRECO" = $2, "DESCRICAO" = $3, "CATEGORIA_ID" = $4 WHERE "ID" = $5';
    const values = [produto.nome, produto.preco, produto.descricao, produto.categoria.id, id];
    await client.query(query, values);
    return produto;
}

async function deletar(id: number) {
    const query = 'DELETE FROM public."PRODUTO" WHERE "ID" = $1 RETURNING *';
    const values = [id];
    const result = await client.query(query, values);
    return result.rows[0]; // Retorna o produto deletado, se necessário
}

async function pesquisarPorCategoria(categoria: number) {
    const query = 'SELECT * FROM public."PRODUTO" WHERE "CATEGORIA_ID" = $1';
    const values = [categoria];
    const result = await client.query(query, values);
    return result.rows;
}

async function pesquisarPorLikeNome(nome: string) {
    const query = 'SELECT * FROM public."PRODUTO" WHERE UPPER("NOME") LIKE $1';
    const values = [`%${nome.toUpperCase()}%`];
    const result = await client.query(query, values);
    return result.rows;
}

module.exports = {
    listar,
    inserir,
    consultar,
    atualizar,
    deletar,
    pesquisarPorCategoria,
    pesquisarPorLikeNome
}