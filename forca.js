let palavras = ['ALURA', 'FORCA', 'HTML', 'ORACLE', 'JAVASCRIPT', 'LOGICA', 'PROGRAMA', 'DESAFIO'];
let tabuleiro = document.getElementById('forca').getContext('2d');
let palavraSecreta = "";


function escolherPalavraSecreta() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
    return palavra
  }

  function iniciaJogo(){
    document.getElementById("div-desaparece").style.display = 'none';
    escolherPalavraSecreta()
    
    desenharCanvas()
    desenharLinhas()
  }