var btn = document.getElementsByClassName("btn");
var spanNumber = document.getElementById("spanNumber");
var fruitIn = document.getElementById("fruitIn");
const addToCart = document.querySelector("#addToCart");
var items = document.getElementsByTagName("li");
var itemList = document.querySelector("#addLi");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    cartNumbers();
    e.preventDefault();

    const cart = document.createElement("li");
    const buttonRemove = document.createElement("button");
    cart.classList.add("cartLi");
    buttonRemove.className = "remove";
    if (cart === fruitIn.value) {
      cart.appendChild(document.createTextNode(`${fruitIn.value}`));
    } else {
      cart.appendChild(
        document.createTextNode(
          `${e.target.parentElement.firstChild.textContent}`
        )
      );
    }
    cart.appendChild(document.createTextNode(`${fruitIn.value}`));
    buttonRemove.appendChild(document.createTextNode("Remove"));

    cart.appendChild(buttonRemove);
    addToCart.appendChild(cart);
    fruitIn.value = "";
  });
}
// btn.addEventListener("click", addList);
itemList.addEventListener("click", removeItem);
addToCart.addEventListener("click", removeItem2);

function removeItem(e) {
  //   items;
  if (e.target.classList.contains("remove")) {
    if (
      confirm(
        `Are you sure to delete ${e.target.parentElement.firstChild.textContent.trim()}`
      )
    ) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
      decreaseCartNumbers();
    }
  }
}

function removeItem2(e) {
  items;
  if (e.target.classList.contains("remove")) {
    if (
      confirm(
        `Are you sure to delete in cart ${e.target.parentElement.firstChild.wholeText.trim()}`
      )
    ) {
      var li = e.target.parentElement;
      addToCart.removeChild(li);
      decreaseCartNumbers();
    }
  }
}

function cartNumbers() {
  var itemNumbers = document.querySelector("#addToCart span");
  if (itemNumbers) {
    itemNumbers.textContent++;
    console.log(itemNumbers.textContent);
  }
}

function decreaseCartNumbers() {
  var itemNumbers = document.querySelector("#addToCart span");
  if (itemNumbers) {
    itemNumbers.textContent--;
    console.log(itemNumbers.textContent);
  }
}

// ------------ For LocalStorage ------------ //

// function onLoadCartNumbers() {
//   let itemNumbers = localStorage.getItem("cartNumbers");

//   if (itemNumbers) {
//     document.querySelector("#addToCart span").textContent = itemNumbers;
//   }
// }

// function cartNumbers() {
//   let itemNumbers = localStorage.getItem("cartNumbers");
//   itemNumbers = parseInt(itemNumbers);
//   if (itemNumbers) {
//     localStorage.setItem("cartNumbers", itemNumbers + 1);
//     document.querySelector("#addToCart span").textContent = itemNumbers + 1;
//   } else {
//     localStorage.setItem("cartNumbers", 1);
//     document.querySelector("#addToCart span").textContent = 1;
//   }
//   console.log(typeof itemNumbers);
// }

// onLoadCartNumbers();
