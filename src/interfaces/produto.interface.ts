export interface Produto {
    id: number;
    nome: string;
    preco: number;
    descricao?: string; // Opcional
    categoria: string;
}