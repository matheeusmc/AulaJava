//array
let lista = ["Banana", 23, true, 'maça'];
//Usamos tipos diferentes dentro da variavel (String, number, boolean)

lista = ["Banana", "Maça", "pêra"];
//Por se tratar de uma variavel tipo let, conseguimos alterar as informaçoes que estão dentro dela
console.log(lista);

lista[0] = "Laranja";
//Aqui acessamos o indice 0 da lista e alteramos o valor para "Laranja".
lista [1] = "melancia"
//Aqui acessamos o indice 0 da lista e alteramos o valor para "Melancia".
lista [0] = "Uva"
console.log(lista);

console.log(lista[2]);
//Podemos imprimir no terminal o valor total da variavel lista, mas também 
//conseguimos utilizar o indice para uma especifica.