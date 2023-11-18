import Typed from "typed.js";
import confetti from "canvas-confetti";

const typed = new Typed('#element', {
  strings: [' Developer', ' Full Stack', 'n Engineer'],
  typeSpeed: 50,
  loop: true,
  loopCount: Infinity,
});

const appreciateBtn = document.getElementById("appreciate");
appreciateBtn.addEventListener("click", () => {
  const myCanvas = document.createElement("canvas");
  myCanvas.style.position = "fixed";
  myCanvas.style.inset = 0;
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.zIndex = -1;
  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
  });
});