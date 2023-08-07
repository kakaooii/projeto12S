var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  estrada = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
  jakeCorrendo = loadAnimate("jake1.png,jake2.png,jake3.png,jake4.png,jake5.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 var pista = createSprite(200,200);
//adicione uma imagem para a pista
 pista = addImage("estrada");
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
pista.scale=1.2;
if(estrada.y < 0){
  estrada.y = estrada.width/2;
}
  //crie um sprite de menino
  var boy = createSprite(200,200)
//adicione uma animação de corrida para ele
boy = addAnimation("jakeCorrendo")
boy.scale=0.08;


//crie um limite à esquerda


leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visibility(false)
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  if(mouseX(true)){
    boy.velocityX = 2
  }
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
