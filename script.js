let yesSize = 18;

// NO button → makes YES bigger
function growYes() {
  const yesBtn = document.getElementById("yesBtn");

  yesSize += 10;

  yesBtn.style.fontSize = yesSize + "px";
  yesBtn.style.padding = (yesSize / 2) + "px " + yesSize + "px";
}

// YES button → full celebration
function celebrate() {

  // show message
  document.getElementById("message").style.display = "block";

  // 🎉 load confetti library
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
  document.body.appendChild(script);

  script.onload = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 6,
        spread: 80,
        origin: { y: 0.6 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  // 🎵 play "I See the Light" at 2:34 (154s)
  const music = document.getElementById("music");
  music.src = "https://www.youtube.com/embed/ILRs2r6lcHY?autoplay=1&start=154";
}
