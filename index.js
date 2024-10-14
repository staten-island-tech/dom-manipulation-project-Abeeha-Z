const DOMSelectors = {
  Inputname: document.querySelector("#moviename"),
  Inputactor: document.querySelector("#movieactor"),
  Inputimage: document.querySelector("#coverimg"),
  form: document.querySelector(".form"),
  box: document.querySelector("#container"), //use for style
  submitButton: document.querySelector("#submitBtn"), //use for style
  Output: document.querySelector(".outputcard"),
};
//pushed input to html
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
  <span>${newCard.name}, Starring: ${newCard.actor}, ${newCard.image} </span>
  `;
  <span>${}</span>;
  DOMSelectors.Output.appendChild(Card);
}

function clearInputs() {
  DOMSelectors.Inputname.value = "";
  DOMSelectors.Inputactor.value = "";
  DOMSelectors.Inputimage.value = "";
}

function removeObject(Card) {
  DOMSelectors.Output.removeChild(Card);
}
//Event listener to create movie card

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  createObject();
});

//create a reset button in the card to activate  removeObject
