let body = document.querySelector("body");
let text = document.querySelector(".textarea");
let list = document.querySelector("#list");
let popup = document.querySelector(".popup");
let h1 = document.querySelector("h1");

text.addEventListener("mouseup", function () {
  let selection = window.getSelection();
  if (!selection.toString().trim()) return;
  let range = selection.getRangeAt(0);

  let span = document.createElement("span");
  span.style.backgroundColor = "yellow";
  span.classList.add("highlighted"); 
  range.surroundContents(span);
  let p3 = document.createElement("p");
  p3.textContent = "You selected: " + selection.toString();
  list.appendChild(p3);
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove");
  p3.appendChild(removeBtn)

  removeBtn.addEventListener("click", function(){
    p3.remove();
    span.style.backgroundColor = "white";
  });
});

body.addEventListener("keydown", function(){
    popup.style.display = "block";
});




function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
  
    let color = `rgb(${red}, ${green}, ${blue})`;
    console.log(color);
    return color;
  };

  setTimeout(() => {
    h1.style.color = getRandomColor(); 
  }, 2000);