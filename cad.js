'use strict'; // Modo restrito
// Este modo faz com que JavaScript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/* Consumo de API - https://viacep.com.br/ */

// Função para limpar formulário
const limparFormulario = () =>{
    document.getElementById('cep').value = '';
    document.getElementById('logradouro').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
}

 //cria regra de expressão regular (Regex) para testar valor informado pelo usuário
const eNumero = (numero) => /^[0-9]+$/.test(numero); // É uma função que verifica o campo de cep que possui números de 0 a 9

// 
const cepValido = (cep) => cep.length == 8 && eNumero(cep); // Length verificação a quantidade de caracteres do campo cep

// Função para preencher formulário como campos da API
const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}