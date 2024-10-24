let matrizVendas = [
   [100, 200, 300], //Loja A
   [400, 500, 50], //Loja B
   [700, 400, 450], //Loja C

]

//console.log(matrizVendas);
//console.log(matrizVendas[0]);
//matrizVendas[0][1] = 800;
//console.log(matrizVendas[0]);


matrizVendas[1][2] = 1000;
//Indo no indice 0 (Loja A) e buscando o indice interno do elemento.
console.log(matrizVendas[1]);
//Fazendo a impressão da loja A no terminal 



matrizVendas[2][2] = 850;
console.log(matrizVendas[2]);

let resultadoLojaB = matrizVendas[1][0] + matrizVendas[1][1] + matrizVendas[1][2];
console.log(resultadoLojaB);