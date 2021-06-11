let sign = document.getElementById("sign");

sign.onclick = () => {
  document.querySelector("select").classList.toggle("disabled");
  if (document.querySelector("select").classList.contains("disabled")) {
    document.querySelector("select").value = 2;
    document.querySelector("select").disabled = true;
  } else {
    document.querySelector("select").disabled = false;
  }
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
  convertPositive();
  let negative_1 = document.getElementById("result").textContent.split("");

  console.log(negative_1); // 0 0

  if (negative_1.length === 2) {
    negative_1.unshift(0);
  }

  let negative = negative_1.map((digit) =>
    digit == "0" ? (digit = 1) : (digit = 0)
  );

  console.log("before adding 1", negative); // 0 0 0

  for (let i = negative.length - 1; i >= 0; i--) {
    if (negative[i] == 1) {
      negative[i] = 0;
    } else {
      negative[i] = 1;
      break;
    }
  }

  console.log("after adding 1", negative); // 1 0 0

  negative.unshift(" ");
  negative.unshift(1);
  document.getElementById("result").textContent = "";
  negative.forEach((digit) => {
    document.getElementById("result").textContent += digit;
  });
}
