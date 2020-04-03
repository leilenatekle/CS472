window.onload = function(){
    "use strict";

    function display() {
        console.log(document.getElementById("email").value + " " + document.getElementById("password").value + " " + document.getElementById("website").value);
    }


//usning submit button

    // document.getElementById("sub").addEventListener("click", function(event){
    //     event.preventDefault();
    //     console.log(document.getElementById("email").value + " " + document.getElementById("password").value + " " + document.getElementById("website").value);
    // });

//use a submit button
document.getElementById("formLogin").addEventListener(
    "submit",
    
        function(event){
            event.preventDefault();
            display(); 
        }
    
);

}
