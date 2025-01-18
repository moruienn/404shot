const ducks = [
  document.getElementById("duck1"),
  document.getElementById("duck2"),
  document.getElementById("duck3"),
];

const tables = [
  document.getElementById("table1"),
  document.getElementById("table2"),
  document.getElementById("table3"),
];

let score = 0;

// Rastgele bir süre döner (1000 ms ile 3000 ms arasında)
function getRandomTime() {
  return Math.random() * 2000 + 1000;
}

// Ördekleri rastgele çıkarır
function showDuck(duck, table) {
  duck.style.display = "block";
  duck.style.bottom = `${table.offsetHeight + 10}px`; // Masanın arkasından çıksın
  duck.style.left = `${table.offsetLeft + table.offsetWidth / 2 - 25}px`;

  setTimeout(() => {
    duck.style.display = "none"; // Belirli bir süre sonra ördek kaybolur
  }, 1000); // Ördek 1 saniye boyunca görünecek
}

// Rastgele bir ördek çıkaran fonksiyon
function startGame() {
  const randomIndex = Math.floor(Math.random() * ducks.length);
  const selectedDuck = ducks[randomIndex];
  const selectedTable = tables[randomIndex];

  showDuck(selectedDuck, selectedTable);

  // Rastgele zamanla bir sonraki ördeği çıkar
  setTimeout(startGame, getRandomTime());
}

// Ördeğe tıklandığında skor artar
ducks.forEach((duck) => {
  duck.addEventListener("click", () => {
    score++;
    alert(`Vurdunuz! Skor: ${score}`);
    duck.style.display = "none"; // Vurulan ördek kaybolur
  });
});

// Oyunu başlat
startGame();
