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

function createObject() {
  const newCard = {
    name: DOMSelectors.Inputname.value,
    actor: DOMSelectors.Inputactor.value,
    image: DOMSelectors.Inputimage.value,
  };
  injectObject(newCard);
  clearInputs();
  DOMSelectors.Output.style.display = "block"; // Show output container
}

function injectObject(newCard) {
  const Card = document.createElement("div");
  Card.classList.add("moviecard");
  Card.style.backgroundImage = `url(${newCard.image})`;
  Card.style.alignSelf = "center";
  Card.style.Card.style.backgroundSize = "cover";
  Card.style.backgroundPosition = "center";
  Card.style.backgroundRepeat = "no-repeat"; // Prevent image repetition
  Card.style.width = "75%"; // Ensure it takes full width
  Card.style.height = "150%"; // Ensure it takes full height

  Card.innerHTML = `
  <h1>${newCard.name}</h1>
  <h3>Starring: ${newCard.actor}</h3>
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
  DOMSelectors.Output.style.display = "none";
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
