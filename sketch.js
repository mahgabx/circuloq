let posicaoXbolinha=300//definea posicao x da bolinha 
let posicaoYbolinha=300//definea posicao y da bolinha 
let diametro=20// tamanho da bolinha
let cor //cor da bolinha 



function setup() {
  createCanvas(600,600);
  background(0,255,255);
  cor=color(random(0,255),random(0,255),random(0,255))  
}


function draw() {
  fill(cor)
  circle(posicaoXbolinha,posicaoYbolinha,diametro) 
   //posicaoXbolinha=posicaoXbolinha+1
  //posicaoYbolinha=posicaoYbolinha+1
  diametro=diametro+1
 if(mouseIsPressed){
  cor=color(random(0,255),random(0,255),random(0,255))
  diametro=0
}
}