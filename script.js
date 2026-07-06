document.addEventListener('DOMContentLoaded', () => { // Aquarda que todos os elementos da página estejam carregados

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const cores = [
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'Purple',
    'Orange',
    'Pink',
    'Indigo',
    'White',
    'Gray'
];

// Estado do personagem
const dvd = {
    x: canvas.width / 4,
    y: canvas.height / 3,
    width: 90,
    height: 50,
    color: 'Indigo',
    speedx: 2,
    speedy: 2
};

function gerarCorAleatoria() {
  // Math.random() gera um número entre 0 (inclusivo) e 1 (exclusivo), ex: 0.123...
  // Multiplicamos por 10 para expandir o alcance para 0 a 9.999...
  // Math.floor() arredonda o número para baixo, removendo a parte decimal.
  return cores[Math.floor(Math.random() * 10)];
}

function draw() {
  // Limpa o canvas a cada quadro
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenha o personagem
  ctx.fillStyle = dvd.color;
  ctx.fillRect(dvd.x, dvd.y, dvd.width, dvd.height);
}

function update(){
  dvd.x += dvd.speedx;
  dvd.y += dvd.speedy;
  
  if(dvd.y > canvas.height - dvd.height){
    dvd.speedy *= -1;
    dvd.color = gerarCorAleatoria();
  }
  
  if(dvd.x > canvas.width - dvd.width){
    dvd.speedx *= -1;
    dvd.color = gerarCorAleatoria();
  }
  
  if(dvd.y == 0){
    dvd.speedy *= -1;
    dvd.color = gerarCorAleatoria();
  }
  
  if(dvd.x == 0){
    dvd.speedx *= -1;
    dvd.color = gerarCorAleatoria();
  }
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop()
});
