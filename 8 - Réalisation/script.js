let page = JSON.parse(localStorage.getItem("sharingan")) || []

function add(){

let lee=document.getElementById("myInput")

if(lee.value){
page.push(lee.value)
lee.value=""
show ()
save ()
}
}
function show(){
let nihon=""
 for (let n= 0 ; n<page.length; n++){
nihon+=`<li>${page[n]}<button style="margin-left:10px;" onclick="del(${n})">delete</button></li>`

 }

document.getElementById("list").innerHTML=nihon

}
function del(n){
page.splice(n,1)
show()
save()
}

function save(){
localStorage.setItem("sharingan" ,JSON.stringify(page))
}
show()