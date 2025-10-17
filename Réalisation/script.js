let  input = document.getElementById("myInput");
let btn = document.getElementById("button"); 
let list = document.getElementById("mylist");


btn.onclick = function() {
 let text = input.value.trim();

  if (text === '') {
    
    alert("Veuillez saisir une tâche");
    return;
  }

  let x = 0;
  let Cn = "C" + x;
  const li = document.createElement('input');
  li.type = "checkbox";
  li.id = Cn;
  const lab = document.createElement('label');
  lab.textContent = text;
  lab.htmlFor = Cn;
  const cont = document.createElement('div');
  cont.className = Cn;
  list.appendChild(cont);
  cont.appendChild(li);
  cont.appendChild(lab);
  x++
  input.value = '';
  update();
  
};

function update(){
  const CB = document.querySelectorAll('input[type="checkbox"]');
  const CBC = document.querySelectorAll('input[type="checkbox"]:checked');
  const F1 = document.getElementById('F1');
  const F2 = document.getElementById('F2');
  
  F1.textContent = CBC.length;
  F2.textContent = CB.length;
}

list.addEventListener("change", function(e){
  if (e.target && e.target.type === "checkbox"){
    update();
  }
})