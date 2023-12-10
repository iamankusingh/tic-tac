// Preloading Animation
document.addEventListener("DOMContentLoaded", function () {
  // Simulate delay for demonstration purposes
  setTimeout(function () {
    // Remove loading animation
    document.getElementById("loading-animation").classList.add("fade-out");

    // Display website content
    // document.getElementById("website-content").style.display = "block";

    // Allow scrolling after content is loaded
    document.body.style.overflow = "auto";
  }, 4000); // x seconds delay, adjust as needed
});

// Mian Script
let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelectorAll("#rst-btn");
let msg = document.querySelector("#msg");

let turnO = true;

// wining patterns
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");

    if (turnO === true) {
      box.innerText = "O";
      box.style.color = "black";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `congratulation, ${winner} is our Winner`;
  msg.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner", pos1Val, "is winner");
        showWinner(pos1Val);
      }
    }
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msg.classList.add("hide");
};

const logo = document.querySelectorAll("#oxSvg path");
console.log(logo);

for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
