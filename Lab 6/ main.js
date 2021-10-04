function addNewList() {
    alert('hello world!');
    console.log('hello world console');
}

function addListItem() {
    console.log('hello world!');
    let list = document.getElementById("grocery-list");
    let itemInput = document.getElementById("new-list-item");
}

function createElement(){
    let newItem = document.createElement("li");
    newItem.appendChild(document.createTextNote(intemInput.value));
    list.appendChild(newItem);
}

function deleteListItem(item) {
    // remove li element (item) from ol element (item.parentNode)
     item.parentNode.removeChild(item);
}

function completeListItem(item){
    if(item.checked){
        item.parentNode.style.textDecoration = "line-through";
    }
    else{
        item.parentNode.style.textDorartion = "none";

    }
    }
}