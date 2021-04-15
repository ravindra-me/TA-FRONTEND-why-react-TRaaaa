let input = document.querySelector(".input");
let ui = document.querySelector("ul");
let arr = JSON.parse(localStorage.getItem("arr")) || [];

function isHandleWatch(event) {
  let index = +event.target.getAttribute("data-id");
  arr[index].isWatch = !arr[index].isWatch;
  localStorage.setItem("arr", JSON.stringify(arr));
  createUi(arr);
}

// function createElement(type, attr = {}, ...children) {
//   let element = document.createElement(type);

//   for (const key in attr) {
//     if (key.startsWith("data-")) {
//       element.setAttribute(key, attr[key]);
//     } else if (key.startsWith("on")) {
//       let eventType = key.replace("on", "").toLocaleLowerCase();
//       element.addEventListener(eventType, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }
//   console.log({ children });
//   children.forEach((child) => {
//     if (typeof child === "object") {
//       console.log(child, "object");
//       element.append(child);
//     } else if (typeof child === "string") {
//       console.log(child, "child");
//       let node = document.createTextNode(child);
//       element.append(node);
//     }
//   });
//   return element;
// }

function createUi(arr) {
  let todoArray = arr.map((element, index) => {
    let li = React.createElement(
      "li",
      {
        className: "flex justify-between align-center",
      },
      React.createElement("p", null, element.name),
      React.createElement(
        "button",
        { "data-id": index, onClick: isHandleWatch },
        element.isWatch ? "Watched" : "To Watch"
      )
    );
    return li;
  });

  ReactDOM.render(todoArray, ui);
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
