let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;
let lanternInterval;
let imageInterval;

document.getElementById("showButton").addEventListener("click", function () {
    let content = document.getElementById("content");
    content.style.display = "flex";  // Ensure it's visible

    setTimeout(() => {
        content.style.opacity = "1";  // Smooth fade-in
    }, 100);
    
    this.style.display = "none"; // Hide button

    let slideImage = document.getElementById("slideImage");
    slideImage.src = images[0]; // Reset slideshow

    playMusic();
    startSlideshow();
});

// Slideshow logic
function startSlideshow() {
    if (imageInterval) clearInterval(imageInterval);
    
    imageInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById("slideImage").src = images[currentIndex];
    }, 3000);
}

// Play music and start lanterns
function playMusic() {
    let song = document.getElementById("birthdaySong");
    song.play();
    song.onended = () => {
        song.currentTime = 0;
        song.play();
    };

    startLanterns();
}

// Lantern animations
function startLanterns() {
    if (lanternInterval) clearInterval(lanternInterval);

    lanternInterval = setInterval(createLantern, 1000);
}

function createLantern() {
    let lantern = document.createElement("div");
    lantern.classList.add("lantern");

    let container = document.getElementById("lantern-container");
    container.appendChild(lantern);

    let xPos = Math.random() * window.innerWidth;
    lantern.style.left = `${xPos}px`;

    let animationDuration = Math.random() * 5 + 5;
    lantern.style.animationDuration = `${animationDuration}s`;

    lantern.addEventListener("animationend", () => {
        lantern.remove();
    });
}
