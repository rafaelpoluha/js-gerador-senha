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
    geraSenha();
}

function diminuirTamanho(){
    if(tamanhoSenha > 20){
        tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textcontent = tamanhoSenha;
    geraSenha
}

const campoSenha = document.querySelector('campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%¨&*';
geraSenha();

function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checkbox){
        alfabeto = alfabeto + letrasMaisculas
    }
    if (checkbox[0].checkbox){
        alfabeto = alfabeto + letrasMinusculas
    }
    if (checkbox[0].checkbox){
        alfabeto = alfabeto + numeros
    }
    if (checkbox[0].checkbox){
        alfabeto = alfabeto + simbolos
    }
    let  senha  =  '';
    for (let i = 0 ; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random() *  letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}
