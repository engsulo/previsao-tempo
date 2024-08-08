

const key = "8f6dda45833ce3d0b8fa0ce32cd9b0dd"

//Função de colocar os dados na tela

function colocarDadosNaTela(dados) {
    
    console.log(dados)
    
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = "graus: " + Math.floor(dados.main.temp) + "°C"
    document.querySelector(".nublado").innerHTML = dados.weather[0].description
    document.querySelector(".humidade").innerHTML = "humidade: " + dados.main.humidity +"%"
    document.querySelector(".nuvem").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

//Função de Buscar os dados no servidor da API

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    colocarDadosNaTela(dados)
}


//Função de Buscar a Cidade ao Clicar no Botão

function cliquei() {
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade)
}