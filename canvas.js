function desenharCanvas() {
  tela.lineWidth=8
  tela.lineCap="round"
  tela.lineJoin="round"
  tela.fillStyle= "#F3F5FC"
  tela.strokeStyle = "#0A3871"
  tela.fillRect(0,0,1200,800)
  tela.beginPath();
  tela.moveTo(650,500)
  tela.lineTo(900,500)
  tela.stroke()
  tela.closePath()
}

function desenharLinhas() {
  tela.lineWidth=6
  tela.lineCap="round"
  tela.lineJoin="round"
  tela.strokeStyle = "#0A3871"
  tela.beginPath()
  let largura=600/palavraSecreta.length
  for (let i=0;i<palavraSecreta.length;i++){
    tela.moveTo(500+(largura*i),640)
    tela.lineTo(550+(largura*i),640)
  }
  tela.stroke()
  tela.closePath()
}


function escreverLetraCorreta(index){
    tela.font = "bold 52px Inter"
    tela.lineCap = "round"
    tela.fillStyle = "#0A3871"
    tela.lineWidth = 6
    let largura= 600/palavraSecreta.length
    tela.fillText(palavraSecreta[index],505 + (largura * index),620 )
    
}

function escreverLetraIncorreta(letra, erros){
  tela.font = "bold 40px Inter"
  tela.lineCap = "round"
  tela.fillStyle = "#0A3871"
  tela.lineWidth = 6
  tela.fillText(letra,520 + (40 *(10 - erros)),720,40 )
}