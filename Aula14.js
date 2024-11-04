// Inicializando o efeito ScrollReveal na primeira seção (#section1)

ScrollReveal().reveal('#section-1', {
    duration: 2000, // Duração do efeito (em millisegundos), define a velocidade da transição
    origin: 'bottom', //Origem do efeito: o conteudo virá de baixo para cima
    distance: '50px', //Distancia que o elemento "viaja" antes de aparecer
});

// Configurando o efeito ScrollReveal na segunda seção (#section2)
ScrollReveal().reveal('#section-2', {
    duration: 1000, // Duração do efeito de revelação
    origin: 'right', //Origem do efeito: o conteudo virá da direita para a esquerda
    distance: '50px', //Distancia do movimento antes do elemento se revelar
});


const typed = new Typed('#Typed-text', {
    strings: ['EducaBank', 'EducaBank'],
    typedSpeend: 50,
    backSpeed: 25,
    loop: true,
    showCursor: false,
    fadeOut: true,
});