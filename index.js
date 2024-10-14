const DOMSelectors = {
  Inputname: document.querySelector("#moviename"),
  Inputactor: document.querySelector("#movieactor"),
  Inputimage: document.querySelector("#coverimg"),
  form: document.querySelector(".form"),
  box: document.querySelector("#container"),
  submitButton: document.querySelector("#submitBtn"),
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

// DOMSelectors.form.addEventListener("submit", function() {

//push input to html, and create an object(card), injects object into DOM

//create a button to clear input fields and delete object
