# **Formulário de Cadastro de Endereço**
Este projeto é um slimpres formulário de cadastro de endereço contruído com HTML, Bootstrap e JavaScript. O formulário coleta informaçães como CEP, logradouro, número, bairro, complemento, cidade e estado, facilitando o preenchimento autómatico de dados de endereço.

![](img.png)

## **Lógica de Funcionamento**

1. O usuário insere o CEP no campo de entrada.

2. Após o usuário sair do campo de entrada (evento ``focusout``), a função ``pesquisarCep()`` é chamada.

3. O CEP é validado para ter certeza de que é um número com 8 dígitos.

4. Se válido, a aplicação faz uma requisição à API ViaCEP https://viacep.com.br/.

5. Se o CEP for encontrado, os campos de endereço no formulário são preenchidos. Se não for encontrado ou for inválido, uma mensagem de alerta é exibida.

## **Tecnologias Utilizadas**
<div style="display: inline_block"><br>
   <img align="center" alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
   <img align="center" alt="Rafa-HTML" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg">
   <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
 </div>
<br>

- ``HTML5:`` Estrutura do documento.
- ``Bootstrap 5.3.2:`` Utilizado para estilizar o formulário com uma aparência moderna e responsiva.
- ``JavaScript:`` (Opcional) Pode ser utilizado para preencher automaticamente os campos do formulário com base em dados fornecidos, como ao buscar o endereço via CEP.

## **Estrutura do Projeto**
- ``index.html:`` Arquivo principal contendo o formulário de cadastro.
- ``style.css:`` (Opcional) Arquivo CSS externo para estilização adicional.
- ``script.js:`` (Opcional) Arquivo JavaScript externo para funcionalidade dinâmica, como preenchimento automático com base no CEP.

### **Estrutura do Formulário:**
```html
<form>
  <div class="col-md-2">
    <label for="cep" class="form-label">CEP</label>
    <input type="text" class="form-control" id="cep">
  </div>
  <!-- Mais campos como Logradouro, Número, Bairro, Cidade, Estado -->
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Cadastrar</button>
  </div>
</form>
```

### **O formulário contém os seguintes campos:**
- ``CEP:`` Campo para inserir o Código de Endereçamento Postal.
- ``Logradouro (Rua):`` Nome da rua do endereço.
- ``Número:`` Campo para o número do endereço.
- ``Bairro:`` Nome do bairro
- ``Complemento:`` Informação extra opcional (exemplo: apartamento, bloco).
- ``Cidade:`` Nome da cidade.
- ``Estado (UF):`` Unidade Federativa (UF) do endereço. 
- ``Intergração com API:`` O formulário pode ser facilmente adaptado para preencher automaticamente os campos com dados fornecidos por uma API de consulta de CEP, como ViaCEP.
- ``Validação Simples:`` Validação pode ser facilmente adicionada aos campos para garantir que os dados estejam corretos.

### **Exemplo de Preenchimento Automático via API de CEP:**
 
```javascript
document.getElementById('cep').addEventListener('blur', function() {
  var cep = this.value.replace(/\D/g, ''); 
  if (cep.length === 8) {
fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(endereco => {
      if (!endereco.erro) {
        document.getElementById('logradouro').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('localidade').value = endereco.localidade;
        document.getElementById('uf').value = endereco.uf;
      } else {
        alert('CEP não encontrado.');
      }
    })
    .catch(error => console.error('Erro ao buscar CEP:', error));
  } else {
    alert('CEP inválido.');
  }
});
```

## **Estrutura do Código**

### **Funções Principais:**

1. ``limparFormulario():`` | Limpa os campos do formulário relacionados ao endereço (logradouro, bairro, localidade, estado).
2. ``preencherFormulario(endereco):`` | Preenche os campos do formulário com os dados recebidos da API (logradouro, bairro, localidade, estado).

3. ``eNumero(numero):`` | Verifica se a string fornecida contém apenas números, usando uma expressão regular.

4. ``cepValido(cep):`` | Verifica se o CEP possui exatamente 8 dígitos e é numérico.

5. ``pesquisarCep()`` | Existem necessidades, por exemplo um cadastramento online onde o cliente desconhece o CEP da sua rua e será necessário realizar uma pesquisa para verificar a existência de um CEP que corresponda ao endereço. Para consultar um CEP na base de dados são necessários três parâmetros obrigatórios (UF, Cidade e Logradouro), sendo que para Cidade e Logradouro também é obrigatório um número mínimo de três caracteres a fim de evitar resultados extremamente abrangentes.
 

 | Elementos: | Explicações: |
| --- | --- |
| ``await`` | O operador ``await`` é utilizado para esperar por uma ``Promise``. Ele pode ser usado apenas dentro de uma ``async function``.
| ``async function`` | A declaração ``async function`` define uma função assíncrona, que retorna um objeto.
| ``fetch`` | O método global ``fetch()`` inicia o processo de busca de um recurso da rede, retornando uma promessa que é cumprida assim que a resposta estiver disponível.
| ``json`` | O ``JSON`` objeto namespace contém métodos estáticos para analisar valores e convertê-los em ``JavaScript Object Notation`` ( ``JSON`` ).
| ``hasOwnProperty`` | O método ``hasOwnProperty()`` retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão (ao contrário de uma propriedade herdada).
| ``length`` | A propriedade ``length`` de um objeto ``String`` contém o comprimento da string. ``length`` é uma propriedade ``read-only`` (somente leitura) de instâncias de string.
| ``value`` | ``.value`` é uma propriedade em JavaScript que recupera o valor atual de um campo de entrada em um formulário . Essencialmente, ele retorna o valor inserido em um elemento de entrada HTML, como uma caixa de texto.

### **Exemplo de Resposta da API ViaCEP:**
```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```

### **Autores:**

[Nayra Vitória dos Santos](https://github.com/nayravsantos)

[Leonardo Santiago Sidon da Rocha](https://github.com/leonardossrocha)