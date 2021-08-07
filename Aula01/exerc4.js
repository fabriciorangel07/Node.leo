// Salario + 25%

let sal, novosal;

sal = 1500;

//maneiras de fazer porcentagem
novosal = sal + (sal * 0.25);
novosal = sal + sal * 25/100;
novosal = sal * 1.25;
novosal = sal * ( 1 + 0.25);

console.log ("O novo salario é: " + novosal);