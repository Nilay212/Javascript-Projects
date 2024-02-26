const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  if (height == null || height <= 0 || isNaN(height)) {
    result.innerHTML = "Please Enter Valid Height";
  } else if (weight == null || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Please Enter Valid weight";
  } else {
    const bmi = ((weight * 10000) / (height * height)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `Your BMI is ${bmi} and you are <span>UNDERWEIGHT</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `Your BMI is ${bmi} and your weight is <span>NORMAL</span`;
    } else {
      result.innerHTML = `Your BMI is ${bmi} and you are <span>OVERWEIGHT</span`;
    }
    const span = document.querySelector("#result>span");
    console.log(span);
    span.style.fontSize = "2rem";
    if (span.textContent === "NORMAL") {
      span.style.color = "green";
    } else {
      span.style.color = "red";
    }
  }
});
