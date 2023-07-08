// var secao1 = document.getElementById('section1');
//         var secao2 = document.getElementById('section2');
//         var secao3 = document.getElementById('section3');
//         var proximoBotao = document.querySelector('.proximo');

//         // Adiciona um evento de clique ao botão "Próximo"
//         proximoBotao.addEventListener('click', function() {
//             // Remove a classe "section--active" da seção atual
//             if (secao1.classList.contains('section--active')) {
//                 secao1.classList.remove('section--active');
//             } else if (secao2.classList.contains('section--active')) {
//                 secao2.classList.remove('section--active');
//             } else if (secao3.classList.contains('section--active')) {
//                 secao3.classList.remove('section--active');
//             }

//             // Adiciona a classe "section--active" à próxima seção
//             if (!secao2.classList.contains('section--active')) {
//                 secao2.classList.add('section--active');
//             } else if (!secao3.classList.contains('section--active')) {
//                 secao3.classList.add('section--active');
//             }
//         });

// Captura o botão "Próximo" pelo seu ID
var proximoBotao = document.querySelector('.proximo');

// Captura todas as seções pelos seus IDs
var secoes = [document.getElementById('section1'), document.getElementById('section2'), document.getElementById('section3')];
var secaoAtual = 0;

// Adiciona um evento de clique ao botão "Próximo"
proximoBotao.addEventListener('click', function() {
    // Oculta a seção atual
    secoes[secaoAtual].style.display = 'none';

    // Incrementa o índice da seção atual
    secaoAtual++;

    // Verifica se alcançou o final do array de seções e reinicia se necessário
    if (secaoAtual >= secoes.length) {
        secaoAtual = 0;
    }

    // Mostra a próxima seção
    secoes[secaoAtual].style.display = 'flex';
});