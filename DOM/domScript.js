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
