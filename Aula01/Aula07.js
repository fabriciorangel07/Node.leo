//Função em JS First-class object (Citizens)
//Higher-order function

// criar uma função literal 
function fun1() { }

// Armazenar em uma variavel
const fun2 = function () { }

// Armezenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em objeto
const obj = {}
obj.oi = function () {return 'Olá'}
console.log(obj.oi())

// Passar função como param
function run(fun){
    fun()
}

run(function() {console.log('Tamo na area....')})

// Uma função que pode retornar/conter outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)

//---------------------------------------------------------------
//params e retorno são opcionais

function area(largura, altura)
{
    const area = largura * altura
    if(area > 20)
    {
        console.log(`Valor acima do permitido: ${area}m2`)
    }else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22))
console.log(area(5, 5))

// Params com variaveis 
function soma1() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma1())
console.log(soma1(1))
console.log(soma1(1.1, 2.2, 3.3)) 

console.log(soma1(1.1, 2.2, 'Teste')) 
console.log(soma1('a', 'b', 'c')) 

// Gerar valores padrões -----------------------------------------
// estrategia 1 para gerar valor padrão
function soma2(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// estrategia 2, 3, 4 para gerar valor padrão
function soma3(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))

// padrão es2015 ECMAScript 6, está hoje na ecma2021
function soma4(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma4(), soma4(3), soma4(1, 2, 3), soma4(0, 0, 0))


//---------------------------------------------------------------
// Comando this

// this pode variar! 
