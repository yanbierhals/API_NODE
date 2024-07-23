import { Categoria } from "../entidades/categoria";

const categoriaRepository = require('../data/repository/categoria_repository')

async function listar() {
    return await categoriaRepository.listar();
}

async function inserir(categoria: Categoria) {
    if (categoria && categoria.nome && categoria.descricao) {
        await categoriaRepository.inserir(categoria);
    } else {
        throw { id: 400, message: "Categoria nao possui nome ou descricao" };
    }
}

async function consultar(id: number): Promise<Categoria> {
    if (id == 0 || id == null) {
        throw { id: 400, message: `Id inválido: ${id}` };
    }

    const categoria = await categoriaRepository.consultar(id);
    if (categoria) {
        return categoria;
    } else {
        throw { id: 404, message: "Categoria nao encontrada" };
    }
}

async function atualizar(id: number, categoriaAtualizada: Categoria) {
    const categoria = await categoriaRepository.consultar(id);
    if (!categoria) {
        throw { id: 404, message: "Categoria nao encontrada" };
    }

    if (categoriaAtualizada && categoriaAtualizada.nome && categoriaAtualizada.descricao) {
        await categoriaRepository.atualizar(id, categoriaAtualizada);
    } else {
        throw { id: 400, message: "Categoria nao possui um dos campos obrigatorios" };
    }
}

async function deletar(id: number) {
    const categoriaDeletada = await categoriaRepository.deletar(id);
    if (categoriaDeletada) {
        return categoriaDeletada;
    } else {
        throw { id: 404, message: "Categoria nao encontrada" };
    }
}

module.exports = {
    listar,
    inserir,
    consultar,
    atualizar,
    deletar
}
