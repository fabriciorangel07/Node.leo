// Faça uma função que leia cinco valores inteiros, determine e mostre
//o maior e o menor deles


function maiorMenor() {
    let maior = arguments[0]
    let menor = arguments[0]
    for(i in arguments)
    {
        if(arguments[i] > maior){
            maior = arguments[i]
        }

        if(arguments[i] < menor){
            menor = arguments[i]
        }
    }
    return console.log(maior, menor)
}

maiorMenor(1, 2, 3, 8, 10)

// Função this e bind
//-- ----------------------------------

NPC = {
    saudacao: 'Oi!!!',
    oi() {
      console.log(this.saudacao)  
    }
}
console.log(typeof NPC)
NPC.oi()

let oi2 = NPC.oi
oi2()

let oi3 = NPC.oi.bind(NPC)
oi3()

//-----------------------------------------------------

function Tempo()
{
    this.contador = 0

    setInterval(function () {
        this.contador++ 
        console.log(this.contador)
    }, 1000)
}

new Tempo()

function Tempo()
{
    this.contador = 0

    setInterval(function () {
        this.contador++ 
        console.log(this.contador)
    }.bind(this), 3000)
}

Tempo()

function Tempo(){
    this.contador = 0
    const self = this
    let teste = setInterval(function(){
        self.contador++
        console.log(self.contador)
        if(self.contador == 30)
        {
            clearInterval(teste)
        }
    }, 200)
    
}

new Tempo()

//----------------------------------------------

//Arrow
//função normal
let soma = function(a) {
    return 2 + a
}
console.log(soma(2))

//função arrow
somaArrow = (a) => {
    return 2 + a
}

console.log(somaArrow(2))

//sem parametro
hello = () => 'Hello world!!!'
hello = _ => 'Hello world!!!'

function Tempo()
{
    this.contador = 0

    setInterval(() => {
        this.contador++ 
        console.log(this.contador)
    }, 1000)
}

new Tempo()

//Função anônima

sub = (x, y) => {return x - y}

resultado = (a, b, operacao = sub) => {
    console.log(operacao(a, b))
}

soma = (x, y) => {
    return  x + y
}
resultado(3, 4)
resultado(3, 4, soma)
resultado(3, 4, (x, y) => x * y)