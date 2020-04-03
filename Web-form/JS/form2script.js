window.onload = function(){
    "use strict";


    function displayAlert() {
        let message = document.getElementById("prodNum").value + ", " + document.getElementById("name").value + ", " + document.getElementById("unit").value + ", " + document.getElementById("supplier").value + ", " + document.getElementById("date").value;
        window.alert(message);
    }

//using button
    // document.getElementById("prod").onclick = function()
    // {
    //     displayAlert();
    // }


//use a submit button
document.getElementById("form1").addEventListener(
    "submit",
    
        function(event){
            event.preventDefault();
            displayAlert(); 
        }
    
);

}
