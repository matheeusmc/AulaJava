let aspasSimples = 'Estamos criando uma String com aspas simples';
//String em resumo são texto que podem ser utilizados no Javascript
//e para utiliza-lo podemos usar com aspas simples, duplas, ou string template.

let aspasDuplas = "String com aspas Duplas";
//Exemplo de string com aspas Duplas

let templateLiteral = `String interpolation allows embedding expressions like ${1 + 1}.`;
//Essa é uma string template, basicamente usados em casos onde há a mecessidade de
//realizar uma ação aritimetica (como no exemplo) ou quando guardamos alguma variavel dentro dela.
//O simbolo ${} em JavaScript é usado para interpolar variaveis, ou seja para retornar o valor dela

//Veja a baixo exemplo de como e quando usar as crases
let nome = 'Igor'
let idade = 24; //Numero usados sem aspas (Simples ou duplas),

let menssagem = `Olá, meu nome é ${nome}e tenho ${idade} anos`;

console.log(menssagem);

console.log(templateLiteral);

let primeiroNome = 'Jonh';
let ultimoNome = 'Doe';
let nomeCompleto = primeiroNome + '  ' + ultimoNome; // Usando o +
let nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`; //Using template literal

console.log(nomeCompletoTemplate);
//console.log é a impressão do codigo, sem ele não aparece no terminal a impressão