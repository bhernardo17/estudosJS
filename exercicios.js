// Soma de Dois Números
// Crie um programa que solicite ao usuário dois números e exiba a soma deles.

const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));
alert(`A soma é: ${num1 + num2}`);


// Verificação de Par ou Ímpar
// Peça ao usuário um número e informe se ele é par ou ímpar.

const num = parseInt(prompt("Digite um número:"));
if (num % 2 === 0) {
    alert("O número é par.");
} else {
    alert("O número é ímpar.");
}


// Tabuada
// Solicite ao usuário um número e exiba a tabuada desse número (do 1 ao 10).

const numero = parseInt(prompt("Digite um número para a tabuada:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}


// Array de Nomes
// Crie um array com 5 nomes e exiba o terceiro nome do array.

const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
console.log(`O terceiro nome é: ${nomes[2]}`);


// Contador de Números Pares
// Escreva um programa que conte e exiba a quantidade de números pares entre 1 e 20.

let contador = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        contador++;
    }
}
console.log(`Há ${contador} números pares entre 1 e 20.`);


// Reverso de String
// Peça ao usuário uma palavra e exiba essa palavra ao contrário.

const palavra = prompt("Digite uma palavra:");
const reverso = palavra.split("").reverse().join("");
console.log(`A palavra ao contrário é: ${reverso}`);


// Verificar Maioridade
// Solicite ao usuário sua idade e exiba uma mensagem dizendo se ele é maior de idade ou não (18 anos ou mais).

const idade = parseInt(prompt("Digite sua idade:"));
if (idade >= 18) {
    alert("Você é maior de idade.");
} else {
    alert("Você é menor de idade.");
}


// Fatorial
// Crie uma função que calcule o fatorial de um número fornecido pelo usuário.

function calcularFatorial(n) {
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}
const numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
console.log(`O fatorial de ${numero} é: ${calcularFatorial(numero)}`);


// Filtrar Valores Maiores que 10
// Dado o array [2, 5, 8, 12, 15, 20], crie um programa que filtre e exiba apenas os valores maiores que 10.

const numeros = [2, 5, 8, 12, 15, 20];
const maioresQue10 = numeros.filter(num => num > 10);
console.log("Números maiores que 10:", maioresQue10);


// Calculadora Simples
// Crie um programa que pergunte ao usuário dois números e a operação desejada (+, -, *, /) e exiba o resultado.

const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação (+, -, *, /):");

let resultado;
switch (operacao) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
    default:
        resultado = "Operação inválida!";
}
console.log(`O resultado é: ${resultado}`);
