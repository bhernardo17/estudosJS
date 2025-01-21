// Exercícios de JavaScript

// 1. Manipulação de Strings

// Escreva uma função chamada reverterString que recebe uma string como parâmetro e retorna a string invertida.
// Exemplo:
// Entrada: "javascript"
// Saída: "tpircsavaj"


function reverterString(str) {
    return str.split('').reverse().join('');
}
console.log(reverterString("javascript")); // Saída: "tpircsavaj"


// 2. Cálculo de Fatorial

// Crie uma função chamada calcularFatorial que calcula o fatorial de um número inteiro positivo.
// Exemplo:
// Entrada: 5
// Saída: 120 (pois 5! = 5 × 4 × 3 × 2 × 1)

function calcularFatorial(n) {
    if (n === 0) return 1;
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}
console.log(calcularFatorial(5)); // Saída: 120


// 3. Números Pares

// Escreva uma função chamada numerosPares que recebe um número inteiro n e retorna um array com os primeiros n números pares.
// Exemplo:
// Entrada: 5
// Saída: [0, 2, 4, 6, 8]

function numerosPares(n) {
    let pares = [];
    for (let i = 0; pares.length < n; i++) {
        if (i % 2 === 0) pares.push(i);
    }
    return pares;
}
console.log(numerosPares(5)); // Saída: [0, 2, 4, 6, 8]



// 4. Verificar Palíndromo

// Crie uma função chamada ehPalindromo que verifica se uma palavra é um palíndromo (lê-se igual de trás para frente).
// Exemplo:
// Entrada: "ana"
// Saída: true
// Entrada: "casa"
// Saída: false


function ehPalindromo(palavra) {
    const invertida = palavra.split('').reverse().join('');
    return palavra === invertida;
}
console.log(ehPalindromo("ana")); // Saída: true
console.log(ehPalindromo("casa")); // Saída: false



// 5. Ordenação de Números

// Escreva uma função chamada ordenarNumeros que recebe um array de números como parâmetro e retorna o array ordenado em ordem crescente.
// Exemplo:
// Entrada: [4, 2, 7, 1, 9]
// Saída: [1, 2, 4, 7, 9]


function ordenarNumeros(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(ordenarNumeros([4, 2, 7, 1, 9])); // Saída: [1, 2, 4, 7, 9]



// 6. Números FizzBuzz

// Crie uma função chamada fizzBuzz que recebe um número inteiro n e retorna um array com números de 1 até n, mas com as seguintes condições:

//     Para múltiplos de 3, adicione "Fizz".
//     Para múltiplos de 5, adicione "Buzz".
//     Para múltiplos de 3 e 5, adicione "FizzBuzz".
//     Exemplo:
//     Entrada: 5
//     Saída: [1, 2, "Fizz", 4, "Buzz"]


function fizzBuzz(n) {
    let resultado = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultado.push("FizzBuzz");
        } else if (i % 3 === 0) {
            resultado.push("Fizz");
        } else if (i % 5 === 0) {
            resultado.push("Buzz");
        } else {
            resultado.push(i);
        }
    }
    return resultado;
}
console.log(fizzBuzz(5)); // Saída: [1, 2, "Fizz", 4, "Buzz"]




// 7. Soma de Elementos

// Escreva uma função chamada somarElementos que recebe um array de números e retorna a soma de todos os elementos.
// Exemplo:
// Entrada: [1, 2, 3, 4]
// Saída: 10


function somarElementos(arr) {
    return arr.reduce((soma, num) => soma + num, 0);
}
console.log(somarElementos([1, 2, 3, 4])); // Saída: 10



// 8. Maior e Menor Número

// Crie uma função chamada maiorMenor que recebe um array de números e retorna um objeto com o maior e o menor número do array.
// Exemplo:
// Entrada: [4, 2, 7, 1, 9]
// Saída: { maior: 9, menor: 1 }

function maiorMenor(arr) {
    return {
        maior: Math.max(...arr),
        menor: Math.min(...arr)
    };
}
console.log(maiorMenor([4, 2, 7, 1, 9])); // Saída: { maior: 9, menor: 1 }



// 9. Remover Duplicados

// Escreva uma função chamada removerDuplicados que recebe um array e retorna um novo array sem valores duplicados.
// Exemplo:
// Entrada: [1, 2, 2, 3, 4, 4, 5]
// Saída: [1, 2, 3, 4, 5]

function removerDuplicados(arr) {
    return [...new Set(arr)];
}
console.log(removerDuplicados([1, 2, 2, 3, 4, 4, 5])); // Saída: [1, 2, 3, 4, 5]



// 10. Contagem de Vogais

// Crie uma função chamada contarVogais que recebe uma string e retorna o número de vogais (a, e, i, o, u) na string.
// Exemplo:
// Entrada: "javascript"
// Saída: 3

function contarVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').filter(char => vogais.includes(char)).length;
}
console.log(contarVogais("javascript")); // Saída: 3
