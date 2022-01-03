console.log(typeof console)

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function OBj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()