
var list = document.getElementById('lists')


function additem(){
var ToDo_Item = document.getElementById("ToDo_Item");
var li = document.createElement('li');
li.classList.add("list-group-item")
var litext= document.createTextNode(ToDo_Item.value);
li.appendChild(litext)
list.appendChild(li)
ToDo_Item.value="";

var crt = document.createElement("button");
crt.classList.add("btns");
var deltex = document.createTextNode("Delete")
crt.setAttribute("onclick","deleteItem(this)");
crt.appendChild(deltex);
li.appendChild(crt)
var BtnEdit = document.createElement("button");
BtnEdit.classList.add("btnses");
var EditText = document.createTextNode("Edit")
BtnEdit.setAttribute("onclick","editItem(this)");
BtnEdit.appendChild(EditText);
li.appendChild(BtnEdit);

}

function deleteItem (e){

e.parentNode.remove();

}

function deleteAll(){

list.innerHTML = " ";

}

function editItem(e){
var  val = e.parentNode.firstChild.nodeValue;
var EditValues = prompt("Enter Value",val);
e.parentNode.firstChild.nodeValue = EditValues;


}