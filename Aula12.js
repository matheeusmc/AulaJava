const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");

//Aqui estamos criando uma função para ser atribuida dentro do Botão Adicionar Tarefas.
function addTask() {
    if (input.value !== "")  //Aqui informamos que se (if) o input for diferent de vazio (==""), ele ira criar um elemento (createElement) de 'li', o texto que ele possui é igual o unput value, ou seja o input que sera digitado.

    {
        const li = document.createElement("li");
        li.textContent = input.value;  //Traduzindo esta linha estamos criando um texto para lista, e este texto
        //sera o valor preenchido pelo uruario dentro do input.


        //Aqui estamos criando um botão (button) para remover esses itens de (li)
        const removerBotao = document.createElement("button");

        //Chamamos nossa const removerBotao e inserindo um texto chamado "remover"
        removerBotao.textContent = "Remover";
        
        //Criamos aqui uma função que ao clicar neste botão ele ira executar uma função de Remover o filho da nossa ul ou seja a "li"
        removerBotao.onclick = function() {

            //A função é pegar  o elemento filho da UL, que no caso é a nossa "li" e remove-la
            ul.removeChild(li);
        };

        ul.appendChild(li); // Estamos adicionando um filho para a nossa (il).
        li.appendChild(removerBotao); //Aqui, chamamos nossa const "li" e estamos adicionando a ela um filho (appendChild).

        input.value = ""; //Usado para limpar o campo de input após ter adicionado o item da lista.

    } else { //Caso o campo input estiver vazio, ele ira aparecer está mensagem de alerta
        alert("Por favor, insira uma tarefa.");

        
    };
};