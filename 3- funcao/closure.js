//closure é o escopo criado quando uma função é declarada
//Esse escorpo permite a fnução acessar e manipular varáveis externas à função

//Contexto léxico funcionando

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())