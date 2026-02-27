document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("projectCanvas5");
    const ctx = canvas.getContext("2d");
  
    const frames = [];
    let frameIndex = 0;
  
    // 🔢 nombre d'images de l'animation
    const totalFrames = 3;
  
    // 🎛️ vitesse contrôlable
    const fps = 10;
    const frameDuration = 1000 / fps;
    let lastTime = 0;
  
  
    // charger les frames
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const number = String(i).padStart(2, "0");
      img.src = `animation_nuages5/frame_${number}.png`;
      frames.push(img);
    }
  
    function animate(time) {
      if (time - lastTime > frameDuration) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
       
        // animation
        ctx.drawImage(frames[frameIndex], 0, 0, canvas.width, canvas.height);
  
        
  
        frameIndex = (frameIndex + 1) % frames.length;
        lastTime = time;
      }
  
      requestAnimationFrame(animate);
    }
  
    requestAnimationFrame(animate);
  
    // 🖱️ clic → redirection
    canvas.addEventListener("click", () => {
      const link = canvas.dataset.link;
      window.location.href = link;
    });
  
  });