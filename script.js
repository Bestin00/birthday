let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;
let lanternInterval;

document.getElementById("showButton").addEventListener("click", function () {
  // Show everything
  document.getElementById("content").style.display = "block";
  this.style.display = "none"; // Hide the button itself

  playMusic();
});

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slideImage").src = images[currentIndex];
}

setInterval(changeImage, 3000);

function playMusic() {
  let song = document.getElementById("birthdaySong");
  song.play();
  song.onended = () => {
    song.currentTime = 0;
    song.play();
  };
  startLanterns();
  growRose("left");
  growRose("right");
  
}

// 🌹 Function to grow a rose from both sides
function growRose(side) {
  let rose = document.createElement("div");
  rose.classList.add("rose-container", side);

  let stem = document.createElement("div");
  stem.classList.add("rose-stem");

  let leaf1 = document.createElement("div");
  leaf1.classList.add("rose-leaf", "leaf1");

  let leaf2 = document.createElement("div");
  leaf2.classList.add("rose-leaf", "leaf2");

  let petals = document.createElement("div");
  petals.classList.add("rose-petals");

  rose.appendChild(stem);
  rose.appendChild(leaf1);
  rose.appendChild(leaf2);
  rose.appendChild(petals);

  document.body.appendChild(rose);

  // Animate the rose growth
  setTimeout(() => {
    rose.classList.add("rose-grow");
  }, 100);
}

// 🌟 Floating Lanterns
function startLanterns() {
  // Immediately create multiple lanterns
  for (let i = 0; i < 10; i++) { // Increase the number if needed
    createLantern();
  }

  // Continue generating lanterns at an interval
  if (!lanternInterval) {
    lanternInterval = setInterval(createLantern, 300); // Reduce interval to speed up appearance
  }
}

function createLantern() {
  let lantern = document.createElement("div");
  lantern.classList.add("lantern");
  document.body.appendChild(lantern);

  let xPos = Math.random() * window.innerWidth;
  lantern.style.left = `${xPos}px`;

  let animationDuration = Math.random() * 5 + 5;
  lantern.style.animationDuration = `${animationDuration}s`;

  lantern.addEventListener("animationend", () => {
    lantern.remove();
  });
}

