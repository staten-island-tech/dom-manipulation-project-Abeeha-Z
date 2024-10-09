const DOMSelectors = {
    header: document.querySelector("h1"),
    items: document.querySelectorAll("li"),
    form: document.querySelector(".form"),
    //things being selected from the html file will be stores here
}

//Objects are dictionaries for js

let student = {
    name: "Ryan",
    age:15,
    girlfriend:true
};
//dictionary for instances of student
console.log(DOMSelectors.items)

DomSelectors/GamepadButton.addEventListener("click", function(event) {
    console.long(event.target.parentElement)
    EventSource.target.style.backgroundColor = "red";
    //OR
    EventSource.target.parentElement.style.backgroundColor = "red";

});

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log();
});
