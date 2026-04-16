//example 1
let count = 0;
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    console.log(this);
    count++;
    let paragraph = document.getElementById("myParagraph");
    console.log(paragraph);
    if (count % 2 == 0) {
      paragraph.innerText = "changed";
    } else {
      paragraph.innerText = "reverted back";
    }
  });

// example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let cititesList = document.getElementById("citiesList");
    cititesList.firstElementChild.classList.add("highlight");
  });

// example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeStyle = document.getElementById("coffeeType");
  coffeStyle.textContent = "Espresso";
  coffeStyle.style.backgroundColor = "white";
  coffeStyle.style.color = "black";
  coffeStyle.style.padding = "5px";
  coffeStyle.style.display = "inline-block";
  coffeStyle.style.margin = "10px";
});

//example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

//example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskLIst = document.getElementById("taskList");
    taskLIst.lastElementChild.remove();
  });

// example 6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("interacted!!");
  });

//example7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    console.log(event.target.innerText);
  }
});

//example8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedBack = document.getElementById("feedbackInput").value;
    console.log(feedBack);
    document.getElementById("feedbackDisplay").textContent = feedBack;
  });

//example 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "dom fully loaded";
});

//example 10
let count1 = 0;
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    if (count1 % 2 == 0) {
      document.getElementById("descriptionText").style.color = "plum";
      count1++;
    } else {
      document.getElementById("descriptionText").style.color = "white";
      count1++;
    }
  });
