
let submit = document.getElementById("button");

submit.addEventListener("click",display);

function display(e){
    e.preventDefault();
    console.log("function called");    
const fName = document.getElementById("firstName").value;
const lName = document.getElementById("lastName").value;
const gender = document.querySelector('input[name="gender"]:checked').value;
const country = document.getElementById("con").value;
document.getElementById("one").innerHTML = "<p>First Name: " + fName + "</p>" + "<p>Last Name: " + lName + "</p>" +
"<p>Gender: " + gender + "</p>" + "<p>Country: " + country + "</p>";
}



// What does preventDefault do?
// PreventDefault method stops the page from refreshing when someone clicks a submit button inside a form. So the
// the java script can perform actions before the page is refreshed.

// What changes require in code to keep previous data on the page? (Write the code line that requires to modify)
// You could use innerHTML += to keep whatever you had in that element, but then also add new text to that element.

