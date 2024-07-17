import { Categoria } from "../../entidades/categoria";
import { Produto } from "../../entidades/produto";

// Definindo categorias
const categoriaEletronicos = new Categoria(1, 'Eletrônicos');
const categoriaRoupas = new Categoria(2, 'Roupas');
const categoriaAlimentos = new Categoria(3, 'Alimentos');

// Criando lista de produtos
let listaProdutos: Produto[] = [
  new Produto(1, 'Smartphone2', 999.99, categoriaEletronicos, 'Um smartphone moderno'),
  new Produto(2, 'Camiseta', 29.99, categoriaRoupas, 'Camiseta de algodão'),
  new Produto(3, 'Maçã', 1.99, categoriaAlimentos, 'Maçãs frescas'),
];

let idGerador = 1;

function listar() {
    return listaProdutos;
}

function geraId() {
    return idGerador++;
}

function inserir(produto:Produto) {
    produto.id = geraId();
    listaProdutos.push(produto);
}

function consultar(id: number){
    return listaProdutos.find(function(produto) {
        return(produto.id === id);        
    })   
}


function atualizar(id:number , produto:Produto) {
    for(let ind in listaProdutos) {
        if(listaProdutos[ind].id === id) {
            listaProdutos[ind] = produto;
            listaProdutos[ind].id = id;
            return;
        }
    }
}

function deletar(id: number) {
    for(let ind in listaProdutos) {
        if(listaProdutos[ind].id === id) {
            return listaProdutos.splice(parseFloat(ind),1)[0];
        }
    }
}

function pesquisarPorCategoria(categoria: any) {//TODO typar
    return listaProdutos.filter(
        (produto) => {
            return produto.categoria === categoria;
        }
    );
}

function pesquisarPorLikeNome(nome: string) {
    return listaProdutos.filter(
        (produto) => {
            return produto.nome.toUpperCase().includes(nome.toUpperCase());
        }
    )
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