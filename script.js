let count = 0;
const counter = document.getElementById("counter");

const update = () => {
  counter.textContent = count;
  counter.style.color = count > 0 ? "#4caf50" : count < 0 ? "#f44336" : "#333";
};

document.getElementById("increment").onclick = () => { count++; update(); };
document.getElementById("decrement").onclick = () => { if (count > 0) count--; update(); };
document.getElementById("reset").onclick = () => { count = 0; update(); };

update();
