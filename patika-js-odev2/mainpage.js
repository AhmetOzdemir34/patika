// ******* select items **********

const input = document.querySelector("#task");
const list = document.querySelector("#list");
let form = document.querySelector("form");
let submitBtn = document.querySelector(".button");

//********** event listeners ***********/

// display items onload
window.addEventListener("DOMContentLoaded", setupItems);

//submit form
form.addEventListener("submit", addItem);
form.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ***********functions *************

// add item
function addItem(event) {
  const value = input.value;
  const id = new Date().getTime().toString();
  event.preventDefault();

  if (value != "" && value.trim() !== "" && !editFlag) {
    const elemenet = document.createElement("li");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    elemenet.setAttributeNode(attr);
    elemenet.innerHTML += `<!-- edit btn -->
    <p class="title">${value}</p>
        <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
        </button>    
        <button type="button" id="deleteButton"  class="close">&times</button>`;

    // append child
    list.appendChild(elemenet);
    // set local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
    // display alert
    toastSucces();
  } else if (value !== "" && editFlag) {
    editElement.innerHTML = value;

    // edit local storage
    editLocalStorage(editID, value);
    toastSucces();
    setBackToDefault();
  } else {
    toastDanger();
  }
}

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.classList.contains("close")) {
    const element = e.target.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);

    // remove from local storage
    removeFromLocalStorage(id);
    setBackToDefault();
  } else {
    const element = e.target.parentElement;

    // set edit item
    editElement = e.target.parentElement.previousElementSibling;
    // console.log(e.target.parentElement.previousElementSibling)

    // set form value
    input.value = editElement.innerHTML;
    editFlag = true;
    editID = element.parentElement.dataset.id;
    submitBtn.textContent = "Edit Text";
  }
});

//********set back to defaults*********
function setBackToDefault() {
  input.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "ADD";
}

// ******************* set alert ************
function toastSucces() {
  let toastsuccesful = document.querySelector(".toast");
  let toastAlertsuccesful = new bootstrap.Toast(toastsuccesful);
  toastAlertsuccesful.show();
}
function toastDanger() {
  let toastfailed = document.querySelector(".error");
  let toastAlertfailed = new bootstrap.Toast(toastfailed);
  toastAlertfailed.show();
}

// ********* local storage ************

// add to local storage
function addToLocalStorage(id, value) {
  const temp = { id, value };
  let items = getLocalStorage();
  items.push(temp);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
//   SETUP LOCALSTORAGES.REMOVEITEM("LIST")

//  *********** setup items **********

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
  }
}

function createListItem(id, value) {
  const elemenet = document.createElement("li");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  elemenet.setAttributeNode(attr);
  elemenet.innerHTML += `<!-- edit btn -->
    <p class="title">${value}</p>
        <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
        </button>    
        <button type="button" id="deleteButton"  class="close">&times</button>`;

  // append child
  list.appendChild(elemenet);
}
