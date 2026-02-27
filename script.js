const canvas = document.getElementById("scene");
const ctx = canvas.getContext("2d");

const frames = [];
let frameIndex = 0;

// ⚠️ adapte le nombre d'images ici
const totalFrames = 45;

// charger les images
for (let i = 1; i <= totalFrames; i++) {
  const img = new Image();
  const number = String(i).padStart(2, "0");
  img.src = `animation/animation_${number}.png`;
  frames.push(img);
}

const btn = document.getElementById("portfolio-btn");
const transition = document.getElementById("transition");

btn.addEventListener("click", () => {
  // lancer la transition
  transition.classList.add("active");

  // changer de page après l'animation
  setTimeout(() => {
    window.location.href = "portfolio.html";
  }, 800); // doit correspondre au CSS (0.8s)
});


// animation contrôlée
let lastTime = 0;
const fps = 12;
const frameDuration = 1000 / fps;

function animate(time) {
  if (time - lastTime > frameDuration) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(frames[frameIndex], 0, 0);

    // avancer tant qu'on n'est pas à la fin
    if (frameIndex < frames.length - 1) {
      frameIndex++;
    } else {
      // 🎉 FIN DE L'ANIMATION
      btn.classList.add("show");
      return; // on arrête l'animation
    }

    lastTime = time;
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
