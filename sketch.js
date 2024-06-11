function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  fill("red");
  textSize(60);
  textAlign(CENTER,CENTER);
  textFont("verdana");
  
  
  let maximo= width;
  let mimimo=0;
  
  console.log("Comida".length);
  let palavra="Comida";
  
  let quantidade=map(mouseX,0,width,1,palavra.length);
  let parcial=palavra.substring(0,quantidade);
  text(parcial,200,200);
}