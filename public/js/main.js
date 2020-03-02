const app = document.querySelector("#app");

const a = ["Java", "JS", "C", "CPP", "Haskell"];
const unorderdlist = document.createElement("ul");

for (let i = 0; i <= 4; i++) {
  const lable = a[i];
  const radio = document.createElement("input");
  radio.type = "radio";
  const span = document.createElement("span");
  span.textContent = lable;
  const lableEl = document.createElement("label");
  lableEl.appendChild(radio);
  lableEl.appendChild(span);
  const li = document.createElement("li");
  li.appendChild(lableEl);
  unorderdlist.appendChild(li);
}
app.appendChild(unorderdlist);
app.appendChild();
