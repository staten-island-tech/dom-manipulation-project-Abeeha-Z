const DOMSelectors = {
    input: document.querySelector(".input")
    submit_button = document.querySelector("#submit_btn")
    box = document.querySelector("#container")
}



// DOMSelectors.form.addEventListener("submit", function() {
//     let input = DOMSelectors.input.value;
//     console.log(input);
// });

DOMSelectors.form.addEventListener("submit", function() {
    background(DomSelectors.box)
});
//push input to html, and create an object(card), injects object into DOM

//create a button to clear input fields and delete object