//1º CRIAR UMA VARIÁVEL PARA CADA UMA DAS INFORMAÇÕES
let seuVotoPara = document.querySelector('.divisao1-1 span');
let cargo = document.querySelector('.divisao1-2 span');
let descricao = document.querySelector('.divisao1-4');
let aviso = document.querySelector('.divisao2');
let lateralTela= document.querySelector('.divisao1-rightImg');
let numeros = document.querySelector('.divisao1-3');

let etapaAtual = 0;
let numero = '';
function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numerosHtml = '';

    for(let i = 0; i < etapa.numeros; i++){
        if(i === 0){
            numerosHtml += '<div class="numero pisca"></div>'
        } else {
            numerosHtml += '<div class="numero "></div>'
        }
       
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateralTela.innerHTML = '';
    numeros.innerHTML = numerosHtml;
}
function atualizaInterface(){
    alert('Finalizou de digitar o voto!')
}

function clicou (n){
    let numeroCandidato = document.querySelector('.numero.pisca');
    if(numeroCandidato !== null){
        numeroCandidato.innerHTML = n;
        numero = `${numero}${n}`;

        numeroCandidato.classList.remove('pisca')
        if(numeroCandidato.nextElementSibling !== null){
            numeroCandidato.nextElementSibling.classList.add('pisca');
        }else{
            atualizaInterface();
        }
        
    }
}

function branco(){
    alert('Clicou em branco')
}


function corrige(){
    alert('Clicou em corrige')
}
function confirma(){
    alert('Clicou em confirma')
}
comecarEtapa();