
let eleNum = document.getElementsByName("elements")[0];
form = document.forms;
type = document.querySelector("select");
text = document.getElementsByName("texts")[0];
result = document.querySelector(".results");


form[0].onsubmit = function(el) {
  el.preventDefault();
  document.querySelectorAll(".box").forEach(el => el.remove())

  for(i = 1; i <= eleNum.value; i++ ) {
    let newEl = document.createElement(type.value);
    let newText = document.createTextNode(`و ${text.value} كمان بيحبك يروح قلب محمد`);

    newEl.className = "box";
    newEl.title = "element";
    newEl.id = `id ${i}`;

    newEl.style.width = "200px";
    newEl.style.backgroundColor = "red";
    newEl.style.color = "White";
    newEl.style.display = "inline-block";
    newEl.style.margin = "10px";
    newEl.style.padding = "20px";
    newEl.style.textAlign = "center";
    newEl.style.borderRadius = "0.5rem";
    newEl.appendChild(newText);
    result.appendChild(newEl);
  }
}
let input = document.querySelectorAll("input");
submit = document.querySelector("[type ='submit']");
box = document.querySelectorAll(".box");

for(i = 0; i <= input.length; i++) {
  input[i].style.display = "block";
  input[i].style.boxSizing = "border-box";
  input[i].style.width = "250px";
  input[i].style.padding = "10px";
  input[i].style.margin = "15px auto";
  input[i].style.borderRadius = "0.5rem";
  input[i].style.border = "1px solid black";
}

