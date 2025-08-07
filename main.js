const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuirTamanho(){
    if(tamanhoSenha > 1){
        tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.textcontent = tamanhoSenha;
}

function diminuirTamanho(){
    if(tamanhoSenha > 20){
        tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textcontent = tamanhoSenha;
}

const campoSenha = document.querySelector('campo-senha');
const letrasMaiusculas = 'abcdefghijklmnopqrstuvwxyz';
geraSenha();

function geraSenha();{
    let  senha  =  '';
    for (let i = 0 ; i < tamanhoSenha; i++){
        let nummeroAleatorio = Math.random() *  letrasMaiusculas.length;
    }
}