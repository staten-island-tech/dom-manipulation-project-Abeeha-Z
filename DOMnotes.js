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
console.long(DOMSelectors.items)

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

const students= ["Peter", "Christina", "Kim"];
students[0] //number used to reference the first person in list 'students'
students.forEach(student) => console.log(student); //forEach is like for i in _____.
//this line of code is saying, for each studen, log the student.


const student = {
    name: "Christina",
    age:15,
    graduated: false,
}  //storing data in an object

//array of objects
const students = [{
        name: "Christina",
        age:15,
        graduated: false,
    }
    {
        name:"Eyad",
        age:15,
        graduated:true
    }
    {
        name: "Christina",
        age:15,
        graduated: false
    }
]

students.forEach((student) => console.log(student.name))  

const newArr = students.filter((student) => (student.graduated === false)) //or !== false
console.log(newArr);

//or say 
(student.graduated === false).forEach((student) => console.log(student.name))


//Other things

(function(a,b) {
    let a = 5;
    return a + b;
})
//instead of this:
(a,b) => (a + b)

for(let i = 0; i < 3) {
    console.log(i)
} //for loops in js
