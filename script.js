var btn = document.getElementsByClassName("btn");
var spanNumber = document.getElementById("spanNumber");
var textIn = document.getElementById("textIn");
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

    // for (let i = 0; i < cart.childNodes.length; i++) {
    //   if (cart.childNodes[i].className === "cartLi") {
    //     console.log("4444", cart.childNodes[i].firstChild.textContent.trim());
    //     if (
    //       e.target.parentElement.firstChild.textContent.trim() ===
    //       cart.childNodes[i].firstChild.textContent.trim()
    //     ) {
    //       alert("item already added to your cart");
    //     }
    //   }
    // }

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

    var itemNumbers = document.querySelector("#addToCart span");
    for (let i = 0; i < addToCart.childNodes.length; i++) {
      if (addToCart.childNodes[i].className === "cartLi") {
        console.log("4444", addToCart.childNodes[i].firstChild);
        if (
          e.target.parentElement.firstChild.textContent.trim() ===
          addToCart.childNodes[i].firstChild.textContent.trim()
        ) {
          alert(
            `"${e.target.parentElement.firstChild.textContent.trim()}" already added to your cart`
          );
          itemNumbers.textContent -= 1;
          return;
        }
      }
    }

    addToCart.appendChild(cart);

    textIn.value = "";
  });
}

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
    }
  }
}

function cartNumbers() {
  var itemNumbers = document.querySelector("#addToCart span");
  if (itemNumbers) {
    itemNumbers.textContent++;
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
