// $(document).ready: função que garante que o codigo dentro dela execute
//Somente apos HTML completo da pagina esta carregando

$(document).ready(function() {

    // Seleciona o container .carousel e aplica a função slick()
    // Que ativa o carrossel com as configuraçoes abaixo
    $('.carousel').slick({

        //slidesToshow: número de cards exibidos ao mesmo tempo no carrossel
        slidesToShow: 3,  //Exibe 3 cards ao mesmo tempo


        //SlidesToScroll: define quantos cards serão deslizados ao mover o carrossel
        slidesToScroll: 1, //Move 1 card por vez ao deslizar

        //Infinite: quando true, o carrossel retorna ao inicio automaticamente
        infinite: true, //Mantém o carrossel em rotação continua

        //dots: quando true, ativa os pontos de navegação abaixo do carrosel
        dots: true, //Adiciona pontos de navegação para os usuarios

        // arrows: exibe setas de navegação nas laterais do carrosel
        arrows: true //Ativa as setas para navegar entre os cards

    });
});