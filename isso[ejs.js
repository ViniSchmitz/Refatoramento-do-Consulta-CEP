// função para pesquisar o CEP via API

// verifica se o que foi digitado pelo usario é somente numeros
function eNumero(numero) {
    return /^[0-9]+$/.test(numero);
}

// verifica se o cep possui tamanho 8 e só possui numeros
function cepValido(cep) {
    return cep.length == 8 && eNumero(cep);
}


// função para pesquisar o CEP via API
// função assicrona ela da um pause nas execuções para esperar o valor da função ser retornada um valor para poder continuar a execução
async function pesquisarCEP() {
    const cep = document.getElementById('cep').value.replace("-", "");
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        console.log(endereco);

        document.getElementById('endereco').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;
        document.getElementById('ibge').value = endereco.ibge;
        document.getElementById('ddd').value = endereco.ddd;
        document.getElementById('siafi').value = endereco.siafi
        if (endereco.hasOwnProperty("erro")) {
            document.getElementById("endereco").value = "CEP NÂO ENCONTRADO!"
        } else {
            document.getElementById('endereco').value = endereco.logradouro;
            document.getElementById('bairro').value = endereco.bairro;
            document.getElementById('cidade').value = endereco.localidade;
            document.getElementById('estado').value = endereco.uf;
        }

    } else {
        document.getElementById("endereco").value = "CEP INCORRETO!"
        LimparCep
    }
}

document.getElementById("cep").addEventListener("focusout", pesquisarCEP);
// Foi criada a funcão limpar cep onde os valores do cep são zerados, essa função só sera chamada quando o cep for invalido
function LimparCep() {
    document.getElementById(`endereco`).value = ``
    document.getElementById(`bairro`).value = ``
    document.getElementById(`cidade`).value = ``
    document.getElementById(`estado`).value = ``
}

// cria-se a função limpar para restaurar todos os campos quando clicado o botão com id buttonLimpar 

function Limpar() {
    document.getElementById(`nome`).value = ``
    document.getElementById(`email`).value = ``
    document.getElementById(`cep`).value = ``
    document.getElementById(`numero`).value = ``
    document.getElementById(`endereco`).value = ``
    document.getElementById(`bairro`).value = ``
    document.getElementById(`cidade`).value = ``
    document.getElementById(`estado`).value = ``
    document.getElementById('ibge').value = ''
    document.getElementById('ddd').value = ''
    document.getElementById('siafi').value = ''
}

document.querySelector(`#buttonLimpar`).addEventListener(`click`, Limpar)
// criei a função alert onde seleciona os elementos e pega os valores de um por um, assim no final criando um alert com todos os elemntos 
function Alerta(){
    const nome = document.querySelector('#nome')
    const valueNome = nome.value
    const email = document.querySelector("#email")
    const valueEmail = email.value
    const cep = document.querySelector("#cep")
    const valueCep = cep.value
    const numero = document.querySelector("#numero")
    const valueNumero = numero.value
    const endereco = document.querySelector("#endereco")
    const valueEndereco = endereco.value
    const bairro = document.querySelector("#bairro")
    const valueBairro = bairro.value
    const cidade = document.querySelector("#cidade")
    const valueCidade = cidade.value
    const estado = document.querySelector("#estado")
    const valueEstado = estado.value
    const ibge = document.querySelector("#ibge")
    const valueIbge = ibge.value
    const ddd = document.querySelector("#ddd")
    const valueDdd = ddd.value
    const siafi = document.querySelector("#siafi")
    const valueSiafi = siafi.value
    
    alert("Nome: "+ valueNome + "\nEmail: " + valueEmail + "\nCEP: " + valueCep + "\nNumero: " + valueNumero + "\nEndereço: " + valueEndereco + "\nBairro: " + valueBairro + "\nCidade: " + valueCidade + "\nEstado: " + valueEstado + "\nIBGE: " + valueIbge + "\nDDD: " + valueDdd + "\nSiafi: " + valueSiafi )
}



document.querySelector('#buttonSalvar').addEventListener('click', Alerta)