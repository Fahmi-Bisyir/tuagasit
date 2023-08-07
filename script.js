
 function getDate() {
  const now = new Date();
  return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
}

function RandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function calculateScore() {
  const maxclick = 5;
  const jumlahclick = getClickCount();

  if (jumlahclick < maxclick) {
    const mano = parseInt(document.getElementById("mano").value);
    const acaknomor = RandomNumber();

    document.getElementById("nomoracak").textContent = acaknomor;

    if (mano === acaknomor) {
      const scoreElement = document.getElementById("score");
      let score = parseInt(scoreElement.textContent);
      score += 2;
      scoreElement.textContent = score;
    }

    setClickCount(jumlahclick + 1);
  } else {
    alert('gacha anda telah habis');
  }
}

function setClickCount(count) {
  localStorage.setItem('clickCount', count);
  localStorage.setItem('lastDate', getDate());
}

function getClickCount() {
  const lastdate = localStorage.getItem('lastDate');
  if (lastdate === getDate()) {
    return parseInt(localStorage.getItem('clickCount')) || 0;
  } else {
    return 0;
  }
}

const tmblcds = document.getElementById('cds');
    tmblcds.addEventListener('click', klaimcds);

    // Tambahkan event listener untuk tombol klaim Tokopedia
    const tmbltkp = document.getElementById('tkp');
    tmbltkp.addEventListener('click', klaimtkp);

function klaimcds() {
  const score = parseInt(document.getElementById("score").textContent);
  if (score >= 2) {
    alert('trimaksih sudah menukarkan point anda');
  } else {
    alert('minimal anda harus memiliki 2 point');
  }
}

// Fungsi untuk mengklaim hadiah Tokopedia
function klaimtkp() {
  const score = parseInt(document.getElementById("score").textContent);
  if (score >= 2) {
    alert('trimaksih sudah menukarkan point anda');
  } else {
    alert('minimal anda harus memiliki 2 point');
  }
}