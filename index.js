const DOMSelectors = {
  Inputname: document.querySelector("#moviename"),
  Inputactor: document.querySelector("#movieactor"),
  Inputimage: document.querySelector("#coverimg"),
  form: document.querySelector(".form"),
  box: document.querySelector("#container"), //use for style
  submitButton: document.querySelector("#submitBtn"), //use for style
  Output: document.querySelector("#outputcontainer"),
  resetButton: document.querySelector("#reset"),
};
// function formStyling(page) {
//   page.style.backgroundColor = "pink";
//   page.textContent.fontsize = "110px";
// }

// formStyling(DOMSelectors.box);

// function cardStyling(moviecard) {
//     moviecard.innerHTML.fontsize = "16px";
// }

// cardStyling(DOMSelectors.Output);

function createObject() {
  const newCard = {
    name: DOMSelectors.Inputname.value,
    actor: DOMSelectors.Inputactor.value,
    image: DOMSelectors.Inputimage.value,
  };
  injectObject(newCard);
  clearInputs();
}

function injectObject(newCard) {
  const Card = document.createElement("div");
  Card.classList.add("moviecard");

  Card.innerHTML = `
  <h3>${newCard.name}</h3>
  <p>Starring: ${newCard.actor}</p>
  <img src = "${newCard.image}"/>
  `;
  DOMSelectors.Output.appendChild(Card);
}

function clearInputs() {
  DOMSelectors.Inputname.value = "";
  DOMSelectors.Inputactor.value = "";
  DOMSelectors.Inputimage.value = "";
}

function removeObject() {
  const lastCard = DOMSelectors.Output.lastChild;
  if (lastCard) {
    DOMSelectors.Output.removeChild(lastCard);
  }
  else 
  {null}
}
//Event listener to create movie card


DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  createObject();
});

DOMSelectors.resetButton.addEventListener("click", function () {
    removeObject();
  });

//create a reset button in the card to activate  removeObject
