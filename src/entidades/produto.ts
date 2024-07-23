import { Categoria } from './categoria';

export class Produto {
  id: number;
  nome: string;
  preco: number;
  descricao?: string;
  categoria: number;

  constructor(id: number, nome: string, preco: number, categoria: number, descricao?: string) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }
}
