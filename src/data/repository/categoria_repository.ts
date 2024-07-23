import { Categoria } from "../../entidades/categoria";
import client from './postgres/dbConnection';

async function listar() {
    const query = 'SELECT * FROM public."CATEGORIA"';
    const result = await client.query(query);
    return result.rows;
}


async function inserir(categoria: Categoria) {
    const query = 'INSERT INTO public."CATEGORIA" ("NOME", "DESCRICAO") VALUES ($1, $2) RETURNING "ID"';
    const values = [categoria.nome, categoria.descricao];
    const result = await client.query(query, values);
    categoria.id = result.rows[0].ID;
}



async function consultar(id: number) {
    const query = 'SELECT * FROM public."CATEGORIA" WHERE "ID" = $1';
    const values = [id];
    const result = await client.query(query, values);
    return result.rows[0];
}




async function atualizar(id: number, categoria: Categoria) {
    const query = 'UPDATE public."CATEGORIA" SET "NOME" = $1, "DESCRICAO" = $2 WHERE "ID" = $3';
    const values = [categoria.nome, categoria.descricao, id];
    await client.query(query, values);
}



async function deletar(id: number) {
    const query = 'DELETE FROM public."CATEGORIA" WHERE "ID" = $1 RETURNING *';
    const values = [id];
    const result = await client.query(query, values);
    return result.rows[0]; // Retorna a categoria deletada, se necessário
}


module.exports = {
    listar,
    inserir,
    consultar,
    atualizar,
    deletar
}