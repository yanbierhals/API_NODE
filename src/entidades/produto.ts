import { Categoria } from './categoria';

export class Produto {
  id: number;
  nome: string;
  preco: number;
  descricao?: string;
  categoria: Categoria;

  constructor(id: number, nome: string, preco: number, categoria: Categoria, descricao?: string) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
    if (descricao) {
      this.descricao = descricao;
    }
  }
}
