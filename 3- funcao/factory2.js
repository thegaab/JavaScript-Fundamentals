function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: preco * 0.1
    }
}
console.log(criarProduto('Notebook', 5699.45))
console.log(criarProduto('Macbook', 8699.45))