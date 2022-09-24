function alertar(){
    window.alert('Hello, World!')
}

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
// mostrarSaudacao();
function somar(){
    let valor1 = Number(window.prompt('Digite o valor 1'));
    let valor2 = Number(window.prompt('Digite o valor 2'));
    
    let resultado  = valor1 + valor2;
    window.alert(resultado)
}
function mudarCorBody(){
    let body = document.querySelector('body') ;
    let button = document.querySelector('#mudar-cor');

    console.log(body.getAttribute('style'))

    if(body.getAttribute('style') === null || body.getAttribute('style') !== 'background-color: #0ff'){
        body.setAttribute('style', 'background-color: #0ff')
    }else{
        body.setAttribute('style', 'background-color: #fff')
    }

    

}