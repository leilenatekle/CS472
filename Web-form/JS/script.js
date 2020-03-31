function display() {
    console.log(document.getElementById("email").value + " " + document.getElementById("password").value + " " + document.getElementById("website").value);
}
function displayAlert() {
    let message = document.getElementById("prodNum").value + ", " + document.getElementById("name").value + ", " + document.getElementById("unit").value + ", " + document.getElementById("supplier").value + ", " + document.getElementById("date").value;
    window.alert(message);
}

let submitButton= document.getElementById("sub");
submitButton.onclick= display();