import { Categoria } from "./categoria.interface";

export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao?: string;
    categoria: Categoria;
}