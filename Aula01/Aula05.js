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

//------------------------------------------------------------

function Tempo ()
{
    this.contador = 0

    setInterval ( function () 
    {
        this.contador++
        console.log(this.contador)

    }.bind (this), 1000
    )
}

new Tempo

function Tempo ()
{
    this.contador = 0

    setInterval ( function () 
    {
        this.contador++
        console.log(this.contador)
        
    }.bind (this), 200
    )
}

Tempo ()

//Jeito de uma cambiarra
function Tempo ()
{
    this.contador = 0

    const selfie = this

    setInterval ( function () 
    {
        selfie.contador++
        console.log(selfie.contador)
        
    }, 200
    )
}

new Tempo ()

//------------------------------------------------------------------

//Arrow

let soma = function (a)
    {
        return 2 + a
    }
    
    console.log (soma(a))

//funcao Arrow

somaArrow = (a) => {
    return 2 + a
}
    
console.log (somaArrow(2))