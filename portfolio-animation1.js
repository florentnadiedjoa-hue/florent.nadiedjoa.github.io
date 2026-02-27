document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("portfolioCanvas");
    const ctx = canvas.getContext("2d");
  
    const frames = [];
    let frameIndex = 0;
  
    // 🔢 CHANGE ICI le nombre total d'images
    const totalFrames = 9;
  
    // 🎬 VITESSE (modifiable)
    const fps = 12; // ← change ce chiffre pour accélérer ou ralentir
    const frameDuration = 1000 / fps;
  
    let lastTime = 0;
  
    // Charger les images
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const number = String(i).padStart(2, "0");
      img.src = `animation_page_portfolio_1/frame_${number}.png`;
      frames.push(img);
    }
  
    function animate(time) {
      if (time - lastTime > frameDuration) {
  
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(frames[frameIndex], 0, 0);
  
        // 🔁 boucle infinie
        frameIndex = (frameIndex + 1) % frames.length;
  
        lastTime = time;
      }
  
      requestAnimationFrame(animate);
    }
  
    requestAnimationFrame(animate);
  
  });