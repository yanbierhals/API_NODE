import { Produto } from "../../interfaces/produto.interface";

let listaProdutos: Produto[] = [];
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

function buscarPorId(id: number){
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
    buscarPorId,
    atualizar,
    deletar,
    pesquisarPorCategoria,
    pesquisarPorLikeNome
}