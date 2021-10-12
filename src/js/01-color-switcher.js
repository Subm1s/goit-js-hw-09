function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyNode = document.querySelector('body');
let newColor = null;

startBtn.addEventListener("click", () => {
  newColor = setInterval(() => {
    bodyNode.style.backgroundColor = getRandomHexColor();
  }, 1000);
    startBtn.disabled = true;
});


stopBtn.addEventListener("click", () => {
    clearInterval(newColor);
    startBtn.disabled = false;
});
