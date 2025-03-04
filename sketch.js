
let x = 100;  // Posição inicial do círculo
let y = 300;
let velocidadeX = 5;  // Velocidade do círculo na direção X
let velocidadeY = 5;  // Velocidade do círculo na direção Y

function setup() {
	createCanvas(900, 400);
}

function draw() {
  
   background(220);
   fill(0, 100, 255);

   ellipse(x, y, 30, 30);  // O último valor é o tamanho do círculo

   
   if (keyIsDown(LEFT_ARROW)) {
    x -= velocidadeX;
   }

   if (keyIsDown(RIGHT_ARROW)) {
    x += velocidadeX;
   }

   //Travas
   if (x <= 0) {
    x = 1;  // Não deixa passar do limete
   }
  
   if (x > width ) {
    x = width - 1;  
   }

  // Atualiza a posição do círculo
  //x += velocidadeX;
  //y += velocidadeY;

  // Verifica se o círculo bateu nas bordas da tela e inverte a direção
  // if (x > width || x < 0) {
  //   velocidadeX *= -1;  // Inverte a direção horizontal
  // }
  // if (y > height || y < 0) {
  //   velocidadeY *= -1;  // Inverte a direção vertical
  // }
  
}
