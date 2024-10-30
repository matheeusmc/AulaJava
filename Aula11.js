//getAttribute - obeter o valor do atributo/elemento (valor da linha).

//setAttribute - Definir ou modificar o valor.

function changeImagem () {
    const img = document.getElementById ("myImg");
    //Aqui conseguimos amazenar o conteudo da imagem

    const observImage = img.getAttribute("src")
    //Aqui pegamos o atributo SRC da img que basicamente diz p caminho da origem da imagem.,
    
    if (observImage === "GitHub2.png") {
        //Se a origem atual da imagem for igual a "GitHub2.png"

        img.setAttribute("src", "gitHub1.jpg");  //Usando o SetAtt
        img.setAttribute("alt", "Imagem gitHub 1");
    } else {  //Caso contrario fazer o processo inverso.
        img.setAttribute("src", "GitHub2.png");
        img.setAttribute("alt", "Imagem gitHub 1");

    }
    
}