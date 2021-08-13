//if ternário
//condição (true ou false) ? expressão1 (verdade) : expressão2 (falso)
//let resp = cliente ? (idade > 18 ? "R$ 3.00" : "R$ 1.50") : "R$ 10.00"
//if(cliente)
//{
//    if(idade > 18)
//    {
//        resp = "R$ 3.00"
//    }else {
//        resp = "R$ 1.50"
//    }
//} else 
//{
//    resp = "R$ 10.00"
//}

// ctrl + k + c --- ctrl + k + u
// shift + alt + a
// mod = %
let cliente = false;
let resp = !cliente ? "R$ 5.00" : "R$ 10.00"
console.log("O cliente vai pagar: " + resp)

let testePI = Math.PI > 4 ? "Sim!" : "Não!"
console.log(`PI é maior que 4? ${testePI}`)

let numero = 6
console.log(`O numero ${numero} é ` + (numero % 2 == 0 ? "Par!" : "Impar!"))

//switch
let num1 = 10, num2 = 7
let op = "+"
switch(op)
{
    case "+":
        console.log(`A soma dos números é: ${num1 + num2}`)
        break
    case "-":
        console.log(`A subtração dos números é: ${num1 - num2}`)
        break
    case "/":
        console.log(`A divisão dos números é: ${num1 / num2}`)
        break
    case "*":
        console.log(`A multiplicação dos números é: ${num1 * num2}`)
        break
    default:
        console.log("Não é uma operação valida!")
}


//Boss ataque
let min = 1, max = 6
// console.log(~~(11/5))
// console.log(11/3 >> 0)
// console.log(11/3|0)
// console.log(~~(Math.random() * 6))
let comando = Math.floor(Math.random() * (max - min) + min)
console.log(comando)
switch(comando)
{
    case 1:
        console.log("Atacar!")
        break
    case 2:
        console.log("Defender!")
        break
    case 3:
        console.log("Usar a cura!")
        break
    case 4:
        console.log("Ataque supremo!")
        break
    case 5:
        console.log("Correr!")
        break
}