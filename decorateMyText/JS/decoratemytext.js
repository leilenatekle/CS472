window.onload = function(){
    "use strict";
    // put all of your code here
    let myText= document.getElementById("myText");

        let decorationsButton= document.getElementById("decorationButton");
        decorationsButton.onclick= function (){
                let style= myText.style.fontSize;
                let size=parseInt(style);
                console.log("dsd "+size);
                // myText.style.fontSize="" +size+"pt";
        };

        let bling= document.getElementById("bling");
        bling.onchange= function(){
            if(bling.checked)
            {
                myText.className="boldText green underlined";
                let body= document.getElementById("body");
                body.style.backgroundImage= 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")';
            }
            else
            {
                myText.className="noDecoration ";
            }

        }
    }