let input = document.querySelector(".input");
let ui = document.querySelector("ul");
let arr = JSON.parse(localStorage.getItem("arr")) || [];

function isHandleWatch(event) {
  let index = +event.target.classList.value;
  arr[index].isWatch = !arr[index].isWatch;
  localStorage.setItem("arr", JSON.stringify(arr));
  createUi(arr);
}

function createUi(arr) {
  ui.innerHTML = "";
  arr.forEach((element, index) => {
    let li = document.createElement("li");
    li.classList = "flex justify-between align-center";
    let p = document.createElement("p");
    let button = document.createElement("button");
    button.classList.add(`${index}`);
    button.innerText = element.isWatch ? "Watched" : "To Watch";
    p.innerText = element.name;
    li.append(p, button);
    ui.append(li);
    button.addEventListener("click", isHandleWatch);
  });
}

input.addEventListener("keyup", (event) => {
  let value = event.target.value;
  if (event.keyCode === 13 && value) {
    arr.push({ name: value, isWatch: false });
    localStorage.setItem("arr", JSON.stringify(arr));
    createUi(arr);
    event.target.value = "";
  }
});

createUi(arr);
