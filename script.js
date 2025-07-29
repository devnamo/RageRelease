const tinda = document.getElementById('tinda');
const scoreBoard = document.getElementById('score');
let score = 0;

// Random position generator
function randomPosition() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 200);
  tinda.style.left = `${x}px`;
  tinda.style.top = `${y}px`;
}

// Tinda gets beaten
tinda.addEventListener('click', () => {
  score++;
  scoreBoard.textContent = `Score: ${score}`;
  tinda.src = 'assets/TaporiTindaDefeated.png';

  setTimeout(() => {
    tinda.src = 'assets/TaporiTinda.png';
    randomPosition();
  }, 300);
});

// Start position
randomPosition();

