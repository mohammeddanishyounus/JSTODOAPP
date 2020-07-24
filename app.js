var list = document.getElementById("list");

function addItem(){
var addItem=document.getElementById("input");
var li=document.createElement("li");
var liText=document.createTextNode(input.value);
li.setAttribute("id","li");
li.appendChild(liText);

var delBtn=document.createElement("button");
var delBtnText=document.createTextNode("Delete");
delBtn.setAttribute("id","btnSmall");
delBtn.setAttribute("onclick","delItem(this)");
delBtn.appendChild(delBtnText);
li.appendChild(delBtn);

var editBtn=document.createElement("button");
var editBtnText=document.createTextNode("Edit");
editBtn.setAttribute("id","btnSmall");
editBtn.setAttribute("onclick","editItem(this)");
editBtn.appendChild(editBtnText);
li.appendChild(editBtn);

list.appendChild(li);
input.value="";


}

function editItem(e){
    var value=e.parentNode.firstChild.nodeValue;
    var editValue=prompt("Enter edit value: ", value);
    e.parentNode.firstChild.nodeValue=editValue;
}

function delItem(e){
    e.parentNode.remove();

}

function delAllItem(){
    list.innerHTML="";

}