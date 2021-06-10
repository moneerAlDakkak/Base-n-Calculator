let sign = document.getElementById("sign");

sign.onclick = () => {
  sign.textContent === "+"
    ? (sign.textContent = "-")
    : (sign.textContent = "+");
};

document.getElementById("convert").onclick = () => {
  if (sign.textContent === "+") {
    convertPositive();
  } else {
    convertNegative();
  }
};

function convertPositive() {
  document.getElementById("result").textContent = "";

  let x = document.getElementById("unconverted").value,
    y = document.querySelector("select").value,
    z,
    i;

  if (x >= 1) {
    for (i = 0; i < 10; i++) {
      z = x % y;

      if (x > 10) {
        z = z
          .toString()
          .replace("10", "A")
          .replace("11", "B")
          .replace("12", "C")
          .replace("13", "D")
          .replace("14", "E")
          .replace("15", "F");
      }

      document.getElementById("result").textContent += z;

      x = Math.floor(x / y);

      if (x === 0) {
        break;
      }
    }

    document.getElementById("result").textContent = document
      .getElementById("result")
      .textContent.toString()
      .split("")
      .reverse()
      .join("");
  } else if (x < 1) {
    document.getElementById("result").textContent = "0.";

    for (i = 0; i < 10; i++) {
      z = Math.floor(x * y);

      document.getElementById("result").textContent += z;

      x = x * y - z;

      if (x === 0) {
        break;
      }
    }
  }
}

function convertNegative() {
  console.log("good");
}
