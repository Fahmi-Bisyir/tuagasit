function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function calculateScore() {
    const mano = parseInt(document.getElementById("mano").value);
    const acaknomor = generateRandomNumber();
 
    document.getElementById("nomoracak").textContent = acaknomor ;
  
    if (mano === acaknomor) {
      const scoreElement = document.getElementById("score");
      let score = parseInt(scoreElement.textContent);
      score += 2;
      scoreElement.textContent = score;
    }
  }
  