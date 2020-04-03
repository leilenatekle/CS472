window.onload = function(){
    "use strict";


    function displayAlert() {
        let message = $("#prodNum").val() + ", " + $("#name").val()  + ", " + $("#unit").val()  + ", " + $("#supplier").val()  + ", " + $("#date").val() ;
        window.alert(message);
    }

//using button
    // document.getElementById("prod").onclick = function()
    // {
    //     displayAlert();
    // }


//use a submit button
// document.getElementById("form1").addEventListener(
//     "submit",
    
//         function(event){
//             event.preventDefault();
//             displayAlert(); 
//         }
    
// );



$("form").submit(function(){
    // action goes here!!
        event.preventDefault();
        displayAlert();
  });


}
 