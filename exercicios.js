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



// Soma dos Elementos de um Array
// Crie um programa que receba um array de números e exiba a soma de todos os elementos.

function somarArray(numeros) {
    // Use reduce para somar os elementos do array
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    console.log(`A soma de todos os elementos do array é: ${soma}`);
}

// Exemplo de uso
const numeros = [10, 20, 30, 40];
somarArray(numeros);



// Maior Número em um Array
// Dado o array [3, 8, 1, 20, 15], exiba o maior número contido nele.

const numeros = [3, 8, 1, 20, 15];
const maior = Math.max(...numeros);
console.log(`O maior número é: ${maior}`);

// Inverter um Array
// Peça ao usuário para digitar uma lista de números separados por vírgulas, transforme-os em um array e exiba o array invertido.

const entrada = prompt("Digite números separados por vírgula:");
const array = entrada.split(",").map(Number);
console.log(`Array invertido: ${array.reverse()}`);


// Contar Caracteres em uma String
// Solicite ao usuário uma palavra e exiba quantos caracteres ela possui.

const palavra = prompt("Digite uma palavra:");
console.log(`A palavra "${palavra}" tem ${palavra.length} caracteres.`);

// Número Aleatório
// Gere um número aleatório entre 1 e 100 e peça ao usuário para adivinhar. Diga se o número é maior ou menor até que ele acerte.

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativa;

do {
    tentativa = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));
    if (tentativa > numeroAleatorio) {
        console.log("Tente um número menor.");
    } else if (tentativa < numeroAleatorio) {
        console.log("Tente um número maior.");
    }
} while (tentativa !== numeroAleatorio);

console.log("Parabéns! Você acertou.");


// Remover Elementos Repetidos
// Dado o array [1, 2, 2, 3, 4, 4, 5], crie um programa que remova os elementos repetidos e exiba o array resultante.

const numeros = [1, 2, 2, 3, 4, 4, 5];
const unicos = [...new Set(numeros)];
console.log("Array sem repetidos:", unicos);


// Converter Temperatura
// Crie um programa que converta uma temperatura de graus Celsius para Fahrenheit. A fórmula é: F = C * 1.8 + 32.

const celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
const fahrenheit = celsius * 1.8 + 32;
console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}°F`);


// Palíndromo
// Peça ao usuário para digitar uma palavra e verifique se ela é um palíndromo (lê-se igual de trás para frente).

const palavra = prompt("Digite uma palavra:");
const ehPalindromo = palavra === palavra.split("").reverse().join("");
console.log(`A palavra "${palavra}" ${ehPalindromo ? "é" : "não é"} um palíndromo.`);


// Contar Vogais
// Solicite ao usuário uma frase e conte quantas vogais ela contém.

const frase = prompt("Digite uma frase:");
const vogais = frase.match(/[aeiouáéíóúãõâêîôû]/gi) || [];
console.log(`A frase contém ${vogais.length} vogais.`);


// Ordenar Números
// Solicite ao usuário uma lista de números separados por vírgulas, transforme-os em um array e exiba os números em ordem crescente.

const entrada = prompt("Digite números separados por vírgula:");
const numeros = entrada.split(",").map(Number);
numeros.sort((a, b) => a - b);
console.log("Números em ordem crescente:", numeros);
