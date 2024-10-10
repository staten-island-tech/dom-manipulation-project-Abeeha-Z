const DOMSelectors = {
    input: document.querySelector("#input")
}

DOMSelectors.form.addEventListener("submit", function() {
    let input = DOMSelectors.input.value;
    console.log(input);
});
//push input to html, and create an object(card), injects object into DOM

//create a button to clear input fields and delete object