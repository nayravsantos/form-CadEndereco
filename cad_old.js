'use strict'; // Modo restrito
 
// Este metódo faz com que o JavaScript opere de forma mais segura e rigorosa,
// Consumo de API - https://viacep.com.br/

// Função para limpar formulário
const limparFormulario = ()=> {
    document.getElementById("cep").value = "";
    document.getElementById("logradouro").value = ""; //Rua
    document.getElementById("localidade").value = ""; //C
    document.getElementById("Uf").value = ""; //E
    document.getElementById("bairro").value = ""; // P  
   
}
 
// Função de preenchimento de formulário com os dados de cep, buscado da API
const preencherFormulario = (endereco) => {
    document.getElementById('cep').value = endereco.cep;
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('Uf').value = endereco.uf;
    document.getElementById('bairro').value = endereco.bairro;
}  
 

// cria regra de expressão regular (Regex) para testar o valor informado pelo usuário
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
// length é uma propriedade que verifica a quantidade de caracteres do argumento cep

// Função de consumo de API  ViaCep
// função assincrona
const pesquisarCep = async() => {
    limparFormulario();
    // Url do tipo JSON
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
 
    // Estrutura de condição
    // Verifica se os argumentos são verdadeiros
    if(cepValido(cep.value)){
        // Retorna os todos dados do cep digitado pelo usuário
        // await busca e retorna sem erros os dados
        // fetch pesquisa no navegar
        const dados = await fetch(url);
        const addres = await dados.json();
 
        if(addres.hasOwnProperty('erro')){
            // O método hasOwnProperty()
            // retorna um booleano indicando se o objeto possui a propriedade especificada como uma
            // propriedade definida no próprio objeto em questão (ao contrário de uma propriedade herdada).
        alert("CEP não encontrado");
 
        } else{
            preencherFormulario(addres);
        }
 
    } else{
        alert("CEP incorreto...");
    }
 
}
// Adicionar escutador para executar consumo de API da ViaCEP
document.getElementById("cep").addEventListener("focusout", pesquisarCep); //adicionando escutador de evento