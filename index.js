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
function backgroundAndText(background, text) {
  background.style.backgroundColor = "pink";
  text.innerHTML = "Tester";
  text.
}

backgroundAndText(DOMSelectors.box, DOMSelectors.Output);

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
}
//Event listener to create movie card

DOMSelectors.resetButton.addEventListener("click", function () {
  removeObject();
});

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  createObject();
});

//create a reset button in the card to activate  removeObject
