let page = JSON.parse(localStorage.liste || "[]");

function keep (){
    localStorage.setItem("liste", JSON.stringify(page));
}
const list = () => document.getElementById("list").innerHTML = page.map((t,i)=>

`<li><input type="checkbox"${t.done?" checked":""} onchange="toggle(${i})">${t.text}<button onclick="del(${i})">supprimer</button></li>`).join("")

function add(){
  let val = sun.value.trim();
  if(!val) return;
  page.push({text:val,done:false});
  sun.value = "";
  keep(); list ();
}

const del = i => (page.splice(i,1), keep(), list());
const changer = i => (page[i].done=!page[i].done,keep(), list ());

list();