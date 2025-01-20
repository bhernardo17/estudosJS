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

// Verificar Maioridade
// Solicite ao usuário sua idade e exiba uma mensagem dizendo se ele é maior de idade ou não (18 anos ou mais).

// Fatorial
// Crie uma função que calcule o fatorial de um número fornecido pelo usuário.

// Filtrar Valores Maiores que 10
// Dado o array [2, 5, 8, 12, 15, 20], crie um programa que filtre e exiba apenas os valores maiores que 10.

// Calculadora Simples
// Crie um programa que pergunte ao usuário dois números e a operação desejada (+, -, *, /) e exiba o resultado.