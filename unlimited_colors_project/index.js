const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const ind = Math.floor(Math.random() * 16);
    color += hex[ind];
  }
  return color;
};
let intervalId;

document.querySelector("#start").addEventListener("click", function () {
  if (!intervalId) intervalId = setInterval(changeBgColor, 1000);
  function changeBgColor() {
    let color = randomColor();
    document.body.style.backgroundColor = color;
  }
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
});
