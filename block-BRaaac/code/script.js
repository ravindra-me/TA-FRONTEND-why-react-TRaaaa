let input = document.querySelector(".input");
let ui = document.querySelector("ul");
let arr = JSON.parse(localStorage.getItem("arr")) || [];

function createElement(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (const key in attr) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }

  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    } else if (typeof child === "string") {
      let node = document.createTextNode(child);
      console.log(node);
      element.append(node);
    }
  });
  return element;
}

function isHandleWatch(event) {
  let index = +event.target.getAttribute("data-id");
  arr[index].isWatch = !arr[index].isWatch;
  localStorage.setItem("arr", JSON.stringify(arr));
  createUi(arr);
}

function createUi(arr) {
  ui.innerHTML = "";
  arr.forEach((element, index) => {
    let li = createElement(
      "li",
      {
        className: "flex justify-between align-center",
      },
      createElement("p", { innerText: element.name }),
      createElement("button", {
        "data-id": index,
        innerText: element.isWatch ? "Watched" : "To Watch",
      })
    );
    // li.classList = "flex justify-between align-center";
    // let p = document.createElement("p");
    // let button = document.createElement("button");
    // button.classList.add(`${index}`);
    // button.innerText = element.isWatch ? "Watched" : "To Watch";
    // p.innerText = element.name;
    // li.append(p, button);
    li.children[1].addEventListener("click", isHandleWatch);
    ui.append(li);
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
