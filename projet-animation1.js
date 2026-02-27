document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("projectCanvas1"); // ✅ ID unique
    const ctx = canvas.getContext("2d");

    const frames = [];
    let frameIndex = 0;

    const totalFrames = 3;
    const fps = 10;
    const frameDuration = 1000 / fps;
    let lastTime = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const number = String(i).padStart(2, "0");
      img.src = `animation_nuages1/frame_${number}.png`;
      frames.push(img);
    }

    function animate(time) {
      if (time - lastTime > frameDuration) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(frames[frameIndex], 0, 0, canvas.width, canvas.height);
        frameIndex = (frameIndex + 1) % frames.length;
        lastTime = time;
      }
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    canvas.addEventListener("click", () => {
      window.location.href = canvas.dataset.link;
    });

});