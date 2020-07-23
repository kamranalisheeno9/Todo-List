
    var listInput = document.getElementById("listName")
    var listBox=document.getElementById("listBox")

function addList(){
    
    var getLi= document.createElement("li")
    var getLiText=document.createTextNode(listInput.value)
    getLi.appendChild(getLiText)
    getLi.setAttribute("class","list")
    getLi.setAttribute("id","listNew")
    if(listInput.value === ""){
        alert("Please Enter The Task")
        getLi.style.display="none"   
    }
    var dltOne=document.createElement("button")
    var dltOneText =document.createTextNode("DELETE") 
    dltOne.appendChild(dltOneText)
    dltOne.setAttribute("class","btnListDlt")
    dltOne.setAttribute("onclick","deleteOne(this)")
    getLi.appendChild(dltOne)
    
    var editBtn=document.createElement("button")
    var editBtnText =document.createTextNode("EDIT") 
    editBtn.appendChild(editBtnText)
    editBtn.setAttribute("class","btnListDlt")
    editBtn.setAttribute("onclick","editBtn(this)")
    getLi.appendChild(editBtn)
    
    listBox.appendChild(getLi)
    listInput.value=""
}

function editBtn(editText){
   var textValue = prompt("Edit Task",editText.parentNode.firstChild.nodeValue) 
   editText.parentNode.firstChild.nodeValue = textValue

}

function deleteOne(item){
    item.parentNode.remove()
}

function deleteAll(){
    listBox.innerHTML=""
}



var backgroundColor=document.getElementById("backgroundChange")
function background(){
    backgroundColor.style.backgroundColor="black"
    var btnChange=document.getElementById("btncolor")
    btnChange.style.display="none"
    var btnChange=document.getElementById("firstBtncolor")
    btnChange.style.display="inline-block"
    var titleChange=document.getElementById("title")
    titleChange.style.backgroundColor="orange"
    var inpChange=document.getElementById("listName")
    inpChange.style.backgroundColor="#ECA54C"
    var listChange=document.getElementById("listBox")
    listChange.style.color="white"

}


function backgroundFirst(){
    backgroundColor.style.backgroundColor="white"
    var btnChange=document.getElementById("btncolor")
    btnChange.style.display="inline-block"
    var btnChange=document.getElementById("firstBtncolor")
    btnChange.style.display="none"
    var titleChange=document.getElementById("title")
    titleChange.style.backgroundColor=" rgb(0, 248, 132)"
    var inpChange=document.getElementById("listName")
    inpChange.style.backgroundColor="white"
    var listChange=document.getElementById("listBox")
    listChange.style.color="black"

}