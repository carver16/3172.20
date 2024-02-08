
let submit = document.getElementById("button");

submit.addEventListener("click",display);

function display(e){
    e.preventDefault();
    console.log("function called");    
const fName = document.getElementById("firstName").value;
const lName = document.getElementById("lastName").value;
const gender = document.querySelector("").value;
document.getElementById("one").innerHTML = "<p>First Name: " + fName + "</p>" + "<p>Last Name: " + lName + "</p>" +
"<p>Gender: " + gender + "</p>";
}


