function alertar(){
    window.alert('Hello, World!')
}
// Apresentação
function mostrarSaudacao() {
    let nome = window.prompt('Qual é seu nome?');
    let idade = window.prompt('Quantos anos você tem?');
    let altura = window.prompt('Qual é sua atura?');

    // let nome = document.getElementById('nome').value;

    console.log(`Olá ${nome}, você tem ${idade} anos e ${altura} de altura`)

    // console.log('Olá', nome, ', você tem', idade, 'anos e', altura,'de altura');
    //  window.alert('Olá', nome, ', você tem', idade, 'anos e', altura,'de altura');
    // window.alert(`Olá ${nome}`);
}
// Função de somas
function somar(){
    let valor1 = Number(window.prompt('Digite o valor 1'));
    let valor2 = Number(window.prompt('Digite o valor 2'));
    
    let resultado  = valor1 + valor2;
    window.alert(resultado)
}
// Cor do Body
function mudarCorBody(){
    let body = document.querySelector('body') ;
    let button = document.querySelector('#mudar-cor');

    console.log(body.getAttribute('style'))

    if(body.getAttribute('style') !== 'background-color: #0ff'){
        body.setAttribute('style', 'background-color: #0ff');
        button.innerHTML = 'Voltar para o original';
    }else{
        body.setAttribute('style', 'background-color: #fff')
        button.innerHTML = 'Mudar cor';
    }
}
// Quadrados
let alternarQuadrados = false;

function mostrarQuadrados(){
    let divs = document.querySelectorAll('.quadrado');
    let button = document.querySelector('#mostrar-quadrados');

    alternarQuadrados = !alternarQuadrados;

    if(alternarQuadrados === true){
        divs.forEach(div => {
            div.setAttribute('style','width: 100px; height: 100px; border: 3px solid #f00;');
        })
        button.innerHTML = 'Ocultar quadrados';
    }
    else{
        divs.forEach(div => {
            div.setAttribute('style',null);
        })
        button.innerHTML = 'Mostrar quadrados';
    }
}
// Limões
let alternarLimoes = false

function mostrarLimoes(){
    let divs = document.querySelectorAll('.limao');
    let button = document.querySelector('#mostrar-limoes');

   alternarLimoes = !alternarLimoes;

    if(alternarLimoes == true){
        divs.forEach(div => {
            div.setAttribute('style','width: 100px; height: 100px; background-color: #ff0; border-radius: 50% 0');
        })
       
        button.innerHTML = 'Ocultar limões';
        
    }
    else{
        divs.forEach(div => {
            div.setAttribute('style',null);
        })

        button.innerHTML = 'Mostrar limões';

    }
  
}