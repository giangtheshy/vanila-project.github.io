let value = document.getElementById("input-value");
let form = document.querySelector(".form-input");
let submitBtn = document.getElementById("submit");
let clearBtn = document.getElementById("clear-btn");
let itemCenter = document.querySelector(".item-center");
let itemContainer = document.querySelector(".item-container");
let alert = document.querySelector(".alert");

form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItem);


window.addEventListener("DOMContentLoaded", setupItem);

let editElement;
let flagEdit = false;
let idEdit = "";



function addItem(e) {
    e.preventDefault();
    let id = new Date().getTime().toString();
    let itemValue = value.value;

    if (itemValue && !flagEdit) {

        // let element = document.createElement("div");
        // element.classList.add("item");
        // let attr = document.createAttribute("data-id");
        // attr.value = id;
        // element.setAttributeNode(attr);
        // element.innerHTML = ` <div class="item-title">${itemValue}</div>
        // <div class="btn-item">
        //     <button class="edit-btn"><i class="far fa-edit" ></i></button>
        //     <button class="delete-btn"><i class="fas fa-trash" ></i></button>
        // </div>`;
        // itemCenter.appendChild(element);
        // let deleteBtn = element.querySelector(".delete-btn");
        // let editBtn = element.querySelector(".edit-btn");
        // deleteBtn.addEventListener("click", deleteItem);
        // editBtn.addEventListener("click", editItem);


        createItem(id, itemValue);
        addToLocalStorage(id, itemValue);
        displayAlert("Add item success!", "success");
        itemContainer.classList.add("show-item-center");
        setBackDefault();



    } else if (itemValue && flagEdit) {
        editElement.innerHTML = itemValue;
        displayAlert("Changed success !", "success");

        editItemLocalStorage(idEdit, itemValue);
        setBackDefault();

    } else {
        displayAlert("Please Enter value", "danger");
    }



}

function deleteItem(e) {
    let element = e.currentTarget.parentElement.parentElement;
    let id = element.dataset.id;
    itemCenter.removeChild(element);

    if (itemCenter.children.length === 0) {

        itemContainer.classList.remove("show-item-center");
    }
    displayAlert("Delete Item success !", "danger");
    deleteItemLocalStorage(id);
    setBackDefault();
}

function editItem(e) {
    let element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    let txtElement = element.textContent.trim();

    value.value = txtElement;

    submitBtn.textContent = "Edit";
    flagEdit = true;
    idEdit = element.dataset.id;


}






function displayAlert(value, action) {

    alert.textContent = value;
    alert.classList.add(`alert-${action}`);
    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);

    }, 1000);

}

function clearItem() {
    let item = document.querySelectorAll(".item");
    if (item.length > 0) {
        item.forEach((item) => {
            itemCenter.removeChild(item);
        })
    }
    itemContainer.classList.remove("show-item-center");
    localStorage.removeItem("listItem");
    setBackDefault();
    displayAlert("Clear all item !", "danger");

}


function setBackDefault() {
    flagEdit = false;
    idEdit = "";
    value.value = "";
    submitBtn.textContent = "Submit";
}


// LocalStorage

function getItemLocalStorage() {
    return localStorage.getItem("listItem") ? JSON.parse(localStorage.getItem("listItem")) : [];
}


function addToLocalStorage(id, value) {
    let list = getItemLocalStorage();
    let item = {
        id,
        value
    };
    list.push(item);
    localStorage.setItem("listItem", JSON.stringify(list));
}

function editItemLocalStorage(id, value) {
    let list = getItemLocalStorage();
    list = list.map((item) => {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    })
    localStorage.setItem("listItem", JSON.stringify(list));
}

function deleteItemLocalStorage(id) {
    let list = getItemLocalStorage();
    list = list.filter((item) => item.id !== id)
    localStorage.setItem("listItem", JSON.stringify(list));
}

function setupItem() {
    let list = getItemLocalStorage();
    if (list.length > 0) {
        list.forEach((item) => {
            createItem(item.id, item.value);
        })
        itemContainer.classList.add("show-item-center");

    }
    
}

function createItem(id, value) {
    let element = document.createElement("div");
    element.classList.add("item");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = ` <div class="item-title">${value}</div>
    <div class="btn-item">
        <button class="edit-btn"><i class="far fa-edit" ></i></button>
        <button class="delete-btn"><i class="fas fa-trash" ></i></button>
    </div>`
    itemCenter.appendChild(element);
    let deleteBtn = element.querySelector(".delete-btn");
    let editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);


}