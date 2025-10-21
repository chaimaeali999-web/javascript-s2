let page = JSON.parse(localStorage.getItem("sharingan")) || [];

function add() {
  let lee = document.getElementById("sun");
  if (lee.value) {
    page.push({ text: lee.value, done: false });
    lee.value = "";
    show();
    save();
  }
}
function show() {
  let nihon = "";
  for (let n = 0; n < page.length; n++) {
    nihon += `
      <li>
        <input type="checkbox" ${page[n].done ? "checked" : ""} onchange="toggle(${n})">
        <span style="text-decoration:${page[n].done ? "line-through" : "none"}">
          ${page[n].text}
        </span>
        <button style="margin-left:10px;" onclick="del(${n})">Delete</button>
      </li>
    `;
  }
  document.getElementById("list").innerHTML = nihon;
}

function del(n) {
  page.splice(n, 1);
  show();
  save();
}

function toggle(n) {
  page[n].done = !page[n].done;
  show();
  save();
}

function save() {
  localStorage.setItem("sharingan", JSON.stringify(page));
}

show();
