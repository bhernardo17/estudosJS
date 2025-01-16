const listaDeCompras = [
    'maçã',
    'gengibre',
    'miojo',
    'biscoito/bolacha',
    'banana',
    'feijão carioquinha',
    'pasta de dente',
  ];
  const carrinho = [];
  
  for (let posicaoNaLista = 0; posicaoNaLista < listaDeCompras.length; posicaoNaLista = posicaoNaLista + 1) {
    if (listaDeCompras[posicaoNaLista] === 'maçã' || listaDeCompras[posicaoNaLista] === 'banana') {
      carrinho.push(listaDeCompras[posicaoNaLista]);
    }
  }
  
  console.log(carrinho); // ['maçã', 'banana']

  //Precisamos verificar se o item é uma fruta e, se for, adicionamos no carrinho. Dessa forma, vamos precisar usar uma estrutura condicional. Ao pegarmos o item pelo índice usando listaDeCompras[posicaoNaLista], perguntamos “é uma fruta da nossa lista?”. Se for, colocamos no nosso carrinho; se não for, não fazemos nada.

  //Relembrando 🧠 : Para adicionar um item em um array, podemos usar o .push(). 😉
 // Precisamos verificar se o item é uma fruta e, se for, adicionamos no carrinho. Dessa forma, vamos precisar usar uma estrutura condicional. Ao pegarmos o item pelo índice usando listaDeCompras[posicaoNaLista], perguntamos “é uma fruta da nossa lista?”. Se for, colocamos no nosso carrinho; se não for, não fazemos nada.

  //Relembrando 🧠 : Para adicionar um item em um array, podemos usar o .push(). 😉



  //Primeiro: Simule as listas de amizades de duas pessoas para poder realizar as comparações.
  //Segundo: Percorra o primeiro array (amizadesDaJuliana) para conseguir realizar as comparações. Você irá dar um console.log para verificar que está percorrendo o array corretamente. 
  //Terceiro: Neste momento, você já está percorrendo o primeiro array (amizadesDaJuliana). Agora precisa percorrer também o segundo array (amizadesDoAdilson). 
  //Você precisa realizar as comparações entre os amizadesDaJuliana e os amizadesDoAdilson. Para que isso seja feito, é necessário que o segundo for esteja dentro do primeiro. Você irá pegar um amigo da Juliana e comparar com todas as amizades do Adilson em cada repetição do primeiro for.
  // Note que, a cada iteração do primeiro for, o segundo for percorre cada elemento do array amizadesDoAdilson.
  //Com isso, você pode realizar a comparação dos amizadesDaJuliana com os amizadesDoAdilson, já que para cada pessoa amiga da Juliana você percorre todas as pessoas amigas do Adilson, podendo comparar um a um e verificar se eles são iguais. Caso sejam iguais, você irá armazenar essa pessoa amiga na lista amizadesEmComum.
  //

const amizadesDaJuliana = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const amizadesDoAdilson = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
const amizadesEmComum = [];

for (let indexDaJuliana = 0; indexDaJuliana < amizadesDaJuliana.length; indexDaJuliana = indexDaJuliana + 1) {
  for (let indexDoAdilson = 0; indexDoAdilson < amizadesDoAdilson.length; indexDoAdilson = indexDoAdilson + 1) {
    if (amizadesDaJuliana[indexDaJuliana] === amizadesDoAdilson[indexDoAdilson]){
      amizadesEmComum.push(amizadesDoAdilson[indexDoAdilson]);
    }
  }
}

console.log(amizadesEmComum);



// For loop
// Exercício 48 - Multiplique números: faça a tabuada do 3 e do 7 🧑‍🏫

// João precisa ajudar sua filha Maria a estudar a tabuada do 3 e do 7, e teve a ideia de usar a tecnologia ao seu favor, 
// contudo precisa da sua ajuda:

// Desenvolva um algoritmo que multiplique os números de 1 a 9 pelos números 3 e 7. 
// Você terá como multiplicando os números 3 e 7 e como multiplicadores os números de 1 a 9.

// Exiba todas as operações com seus respectivos resultados no console do seu navegador.

// De olho na dica 👀 : Para exibir as operações no console do seu navegador, 
// você pode utilizar duas estruturas de repetição for aninhadas, que vão percorrer item a item.
//  Para começar, você pode usar a constante multiplicador dada a seguir: 

const multiplicador = [3, 7];
/***** Escreva seu código nas linhas abaixo *****/
let resultado;

for (let index = 0; index < multiplicador.length; index = index + 1) {
  for(let index2 = 1; index2 <= 9; index2 = index2 + 1) {
    resultado = multiplicador[index] * index2;
    console.log(multiplicador[index] + ' x ' + index2 + ' = ' + resultado)
  }
}



// Qual das estruturas de repetição abaixo percorre o array de nomes

// de forma correta e atribui à variável maiorNome

// o nome com o maior número de caracteres?


const nomes = ['João', 'Lucas', 'Juliana', 'Amanda', 'Guilherme'];
let maiorNome = '';

for (let index = 0; index < nomes.length; index = index + 1) {
  if (nomes[index].length > maiorNome.length) {
    maiorNome = nomes[index];
  }
}



// Qual das alternativas abaixo atribui, de forma correta, os valores do array numeros

// para os arrays numerosPares

// , caso o número seja par, e para o array numerosImpares

// , caso o número seja ímpar?

const numeros = [1, 33 ,103, 132, 270, 1320, 75];
const numerosPares = [];
const numerosImpares = [];

for (let index = 0; index < numeros.length; index = index + 1) {
  if (numeros[index] % 2 === 0) {
    numerosPares.push(numeros[index]);
  } else {
    numerosImpares.push(numeros[index]);
  }
}
console.log(numerosPares, numerosImpares);




// Qual estrutura abaixo conta de forma correta a quantidade de cores iguais que Marcelo e Julia possuem? - indexJ

// vai percorrer todas as posições do array coresJulia

// ; - indexM

// vai percorrer todas as posições do array coresMarcelo

// .

const coresMarcelo = ['azul', 'vermelho', 'preto', 'rosa', 'dourado', 'verde', 'cinza'];
const coresJulia = ['branco', 'marrom', 'rosa', 'dourado', 'verde', 'cinza'];

let contador = 0;

for (let indexJ = 0; indexJ < coresJulia.length; indexJ = indexJ + 1) {
  for (let indexM = 0; indexM < coresMarcelo.length; indexM = indexM + 1) {
    if (coresJulia[indexJ] === coresMarcelo[indexM]) {
      contador = contador + 1;
    }
  }
}
console.log(contador);



//função 
function imprimeSaudacao(nome, sobrenome, idade) {
  const saudacao = 'Olá, ' + nome + ' ' + sobrenome + '!';
  const exibeIdade = 'Você tem ' + idade + ' anos.';

  return saudacao + ' ' + exibeIdade;
}

console.log(imprimeSaudacao('Alberto', 'Cavalcanti', 85));
console.log(imprimeSaudacao('Cleyton', 'Oliveira', 32));
console.log(imprimeSaudacao('Sandra', 'Cardoso', 58));

//
function calculaDespesa(luz, internet) {
  const despesaTotal = luz + internet;

  return 'Esse mês, a despesa foi de: R$ ' + despesaTotal;
}

console.log(calculaDespesa(230, 125));

Saudação, terráqueo 🛸

// Crie uma função saudacao que recebe um parâmetro nome e mostre uma mensagem de saudação, 
// por exemplo: 'Olá, Julia!'.

function saudacao(nome) {
  return 'Olá, ' + nome + '!';
}

Funções
Gabarito: Funções
Crie uma função que exiba a frase: Vamo que vamo! 🚀

Crie uma função mostrarFrase que retorne a frase ‘Vamo que vamo!’ quando chamada.

Solução

Primeiro passo: Crie uma função chamada mostrarFrase.

function mostrarFrase() {


}

Segundo passo: Dentro da função, retorne a frase 'Vamo que vamo!'.

function mostrarFrase() {

  return 'Vamo que vamo!';

}

// Saudação, terráqueo 🛸

// Crie uma função saudacao que recebe um parâmetro nome e mostre uma mensagem de saudação, por exemplo: 'Olá, Julia!'.

// Solução

// Primeiro passo: Crie uma função chamada saudacao e passe nome como parâmetro.


function saudacao(nome) {

  return 'Olá, ' + nome + '!';

}

// Pedido na pizzaria 🍕

// Crie uma função clientePedido que receba um parâmetro numeroPedido. Considere as condições a seguir:

//     Se numeroPedido for igual a 1, retorne a mensagem 'Pizza de Calabresa';
//     Se numeroPedido for igual a 2, retorne a mensagem 'Pizza de Quatro Queijos';
//     Se numeroPedido for igual a 3, retorne a mensagem 'Pizza de Frango com Catupiry';
//     Se numeroPedido for igual a 4, retorne a mensagem 'Pizza de Brigadeiro';
//     Se numeroPedido não entrar nas condições acima, retorne a mensagem 'Número do pedido inválido!'.

function clientePedido(numeroPedido) {
  if (numeroPedido === 1) {
    return 'Pizza de Calabresa';
  } else if (numeroPedido === 2) {
    return 'Pizza de Quatro Queijos';
  } else if (numeroPedido === 3) {
    return 'Pizza de Frango com Catupiry';
  } else if (numeroPedido === 4) {
    return 'Pizza de Brigadeiro';
  } else {
    return 'Número do pedido inválido!';
  }
}

//Crie uma função chamada mediaDosNumeros que recebe como pararâmetro um array de números chamado arrayNumeros e 
// retorna a média desses números. use uma estrutura for para percorrer o array

function mediaDosNumeros(arrayNumeros) {
  let soma = 0;
  let media = 0;

  for (let index = 0; index < arrayNumeros.length; index = index + 1) {
    soma = soma + arrayNumeros[index];
  }

  media = soma / arrayNumeros.length;

  return media;
}




//A função imprimeItens está percorrendo um array e imprimindo cada elemento dele no console.
function imprimeItens(array) {
  for (let index = 0; index < array.length; index = index + 1) {
    console.log(array[index]);
  }
}

//Qual função abaixo mostra a soma de todos os números de um Array

function somaArray(array) {
  let soma = 0;

  for (let index = 0; index < array.length; index = index + 1) {
    soma = soma + array[index];
  }

  return soma;

}



//