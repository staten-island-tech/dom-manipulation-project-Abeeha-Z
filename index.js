const DOMSelectors = {
    input: document.querySelector("#input")
}

DOMSelectors.form.addEventListener("submit", function() {
    let input = DOMSelectors.input.value;
    console.log(input);
});
