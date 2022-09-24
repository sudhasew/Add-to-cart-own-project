var btn = document.getElementsByClassName("btn");
var spanNumber = document.getElementById("spanNumber");
var fruitIn = document.getElementById("textIn");
const addToCart = document.querySelector("#addToCart");
var items = document.getElementsByTagName("li");
var itemList = document.querySelector("#addLi");

const emptyCartMessage = document.createElement("p");
emptyCartMessage.innerHTML = "Your cart is empty.";
addToCart.appendChild(emptyCartMessage);

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    cartNumbers();
    e.preventDefault();

    const cart = document.createElement("li");
    const buttonRemove = document.createElement("button");
    cart.classList.add("cartLi");
    buttonRemove.className = "remove";
    if (cart === textIn.value) {
      cart.appendChild(document.createTextNode(`${textIn.value}`));
    } else {
      cart.appendChild(
        document.createTextNode(
          `${e.target.parentElement.firstChild.textContent}`
        )
      );
    }
    cart.appendChild(document.createTextNode(`${textIn.value}`));
    buttonRemove.appendChild(document.createTextNode("Remove"));

    cart.appendChild(buttonRemove);
    addToCart.appendChild(cart);
    emptyCartMessage.className = "hide-empty-cart";
    textIn.value = "";
  });
}
// btn.addEventListener("click", addList);
itemList.addEventListener("click", removeItem);
addToCart.addEventListener("click", removeItem);

function removeItem(e) {
  if (e.target.classList.contains("remove")) {
    if (
      confirm(
        `Are you sure to delete "${e.target.parentElement.firstChild.wholeText.trim()}" from your cart`
      )
    ) {
      const li = e.target.parentNode;
      const ol = li.parentNode;
      ol.removeChild(li);
      decreaseCartNumbers();
      const currentCartItems = document.getElementsByClassName("cartLi");
      if (currentCartItems.length <= 0) {
        emptyCartMessage.classList.remove("hide-empty-cart");
      }
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
