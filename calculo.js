let notas = [];

function adicionarNota() {
    let nota = document.getElementById('nota').value;
    if (nota) {
        notas.push(parseFloat(nota));
        atualizarListaNotas();
    }
    document.getElementById('nota').value = '';
}

function atualizarListaNotas() {
    let lista = document.getElementById('notas');
    lista.innerHTML = '';
    for (let i = 0; i < notas.length; i++) {
        let li = document.createElement('li');
        li.textContent = `Nota ${i + 1}: ${notas[i]}`;
        lista.appendChild(li);
    }
}

// 1. Criar uma calculadora
// 2. Permitir ler cada uma das notas (5, 6, 10)
// 3. Calcular a media das notas = 5 + 6 + 10 = 21 / 3 = 7
// 4. Se a media for > 6 = a pessoa estudante está aprovada
// 5. Se a media for < 6 = a pessoa estudante está reprovada

// funcionalidade = FUNCTION calcularMedia
// SE = IF-ELSE
// LOOP = FOR = PARA

function calcularMedia() {
    let somatorioNotas = 0;
    let media = 0;

    for (let index = 0; index < notas.length; index += 1) {
        somatorioNotas = somatorioNotas + notas[index];
    }

    media = somatorioNotas / notas.length;

    if (media > 6) {
        // Também podemos mover o document.getElementById('resultado') para uma variável
        // ao invés de repetir todo o texto "document.getElementById('resultado')"
        const elementoResultado = document.getElementById('resultado');

        elementoResultado.textContent = `Média: ${media.toFixed(2)} - Pessoa estudante APROVADA`;
        elementoResultado.className = 'aprovada';
    } else {
        document.getElementById('resultado').textContent = `Média: ${media.toFixed(2)} - Pessoa estudante REPROVADA`;
        document.getElementById('resultado').className = 'reprovada';
    }
}

window.onload = () => {
    const btnAdicionarNota = document.querySelector('#adicionarNota');
    const btnCalcularMedia = document.querySelector('#calcularMedia');

    btnAdicionarNota.addEventListener('click', adicionarNota);
    btnCalcularMedia.addEventListener('click', calcularMedia);
}