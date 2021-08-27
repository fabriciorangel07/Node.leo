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