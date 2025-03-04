
let x = 100;  // Posição inicial do círculo
let y = 100;
let velocidadeX = 2;  // Velocidade do círculo na direção X
let velocidadeY = 3;  // Velocidade do círculo na direção Y

function setup() {
 // put setup code here
	createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  //background(220);
  
   ellipse(x, y, 50, 50);  // O último valor é o tamanho do círculo

  // Atualiza a posição do círculo
  x += velocidadeX;
  y += velocidadeY;

  // Verifica se o círculo bateu nas bordas da tela e inverte a direção
  if (x > width || x < 0) {
    velocidadeX *= -1;  // Inverte a direção horizontal
  }
  if (y > height || y < 0) {
    velocidadeY *= -1;  // Inverte a direção vertical
  }
  
}
