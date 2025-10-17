let btn = document.getElementById("btn");
let result = document.getElementById("result");
let checkboxes = document.querySelectorAll(".t");

btn.onclick = function () {
  let choix = [];

  checkboxes.forEach(function (box) {
    if (box.checked) {
      choix.push(box.nextSibling.textContent.trim());
    }
  });
 
  if (choix.length > 0) {
    result.textContent = "Vous avez choisi : " + choix.join(", ")+ " (" + choix.length + " sélection(s))";
    result.classList.add("highlight"); د
    result.textContent = "Aucun choix sélectionné.";
    result.classList.remove("highlight"); 
  }
};
