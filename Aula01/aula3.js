//Booleana
let teste = false
console.log(teste)

teste = true
console.log(teste)
console.log(typeof teste)

teste = 1
console.log(typeof teste)

console.log(!teste)
console.log(!!teste)

console.log('O valores verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!Infinity)
console.log(!!(teste = true))

console.log('Os valores falsos...')
console.log(!!0)
console.log(!!'')
console.log(!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(teste = false))

// Um supermercado deseja reajustar os preços usando o seguinte critério
// o produto poderá ter seu preço aumentado ou diminuido. Para o preço
// ser alterado, o produto deve preencher pelo menos um dos requisistos
// a seguir

// Venda média    |  preço atual        |  % aumento    | % dimunuição
//    <500             <R$30.00                10%              -
// >=500 E < 1200   >=R$30.00 E <R$80.00       15%              -
//    >=1200          >=R$80.00                -              20%

let ven_med, prec_atual, soma;

ven_med = 800;
prec_atual = 40;
soma = 0;

if ((ven_med < 500) || (prec_atual < 30))
{
    soma = prec_atual + (prec_atual * 0.10)
    console.log("O preco atual agora é: " + soma)
}
    else if ((ven_med >= 500 && ven_med < 1200) || (prec_atual >= 30.00 && prec_atual < 80.00))
    { 
        soma = prec_atual + (prec_atual * 0.15)
        console.log("O preco atual agora é: " + soma)
    }
        else if ((ven_med >= 1200) || (prec_atual>= 80.00))
        {
            soma = prec_atual - (prec_atual * 0.20)
            console.log("O preco atual agora é: " + soma)
        }
    