var btn = document.getElementsByClassName("btn");
var spanNumber = document.getElementById("spanNumber");
var textIn = document.getElementById("textIn");
const addToCart = document.querySelector("#addToCart");
var items = document.getElementsByTagName("li");
var itemList = document.querySelector("#addLi");

const emptyCartMessage = document.createElement("p");
emptyCartMessage.innerHTML = "Empty cart";
addToCart.appendChild(emptyCartMessage);

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    cartNumbers();
    e.preventDefault();

    const cart = document.createElement("li");
    const buttonRemove = document.createElement("button");
    cart.classList.add("cartLi");
    buttonRemove.className = "remove";

    if (textIn.value) {
      cart.appendChild(document.createTextNode(`${textIn.value}`));
    } else {
      cart.appendChild(
        document.createTextNode(
          `${e.target.parentElement.firstChild.textContent}`
        )
      );
    }

    buttonRemove.appendChild(document.createTextNode("Remove"));
    cart.appendChild(buttonRemove);

    addToCart.appendChild(cart);
    // if (
    //   cart.firstChild.textContent ===
    //   e.target.parentElement.firstChild.textContent
    // ) {
    //   alert("Already added");
    // }
    // console.log(cart.firstChild.textContent);
    // console.log(e.target.parentElement.firstChild.textContent);
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

      var currentCartItems = document.getElementsByClassName("cartLi");
      if (currentCartItems.length <= 0) {
        emptyCartMessage.classList.remove("hide-empty-cart");
      }
    }
  }
}

var counter = 0;

function cartNumbers() {
  var itemNumbers = document.querySelector("#addToCart span");
  if (itemNumbers) {
    counter++;
    itemNumbers.textContent = counter;
    console.log(itemNumbers.textContent);
  }
}

function decreaseCartNumbers() {
  var itemNumbers = document.querySelector("#addToCart span");
  if (itemNumbers) {
    counter--;
    itemNumbers.textContent = counter;
    console.log(itemNumbers.textContent);
  }
}

const emptyCart = document.getElementById("delete");
var currentCartItems = document.getElementsByClassName("cartLi");
var itemNumbers = document.querySelector("#addToCart span");
emptyCart.addEventListener("click", () => {
  for (let i = 0; i < currentCartItems.length; i++) {
    currentCartItems[i].style.display = "none";
    counter = 0;
    itemNumbers.textContent = counter;
    emptyCartMessage.classList.remove("hide-empty-cart");
  }
});
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
