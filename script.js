<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

<script>
function celebrate() {

  // show message
  document.getElementById("message").style.display = "block";

  // confetti burst
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

  // play music
  const iframe = document.getElementById("music");
  iframe.src = "https://www.youtube.com/embed/ILRs2r6lcHY?autoplay=1";
}
</script>
