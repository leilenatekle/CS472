"use strict";

window.onload= function()
{
    setInterval( clockFunction,1000);

    dateFunction();
}
function dateFunction(){
    let d = new Date();
    let date= (  d.getFullYear()  +" - " +d.getMonth() + " - " +d.getDate());
    document.getElementById("currentDate").innerHTML = date;
}
function clockFunction(){
    let d = new Date();
    let hour= d.getHours();
    if(hour<10)
    {
        hour= "0"+hour;
    }
    let minute= d.getMinutes();
    if(minute<10)
    {
        minute= "0"+minute;
    }
    let second= d.getSeconds();
    if(second<10)
    {
        second= "0"+second;
    }
    document.getElementById("hour").innerHTML=hour;
    document.getElementById("minute").innerHTML=minute;
    document.getElementById("second").innerHTML=second;
    if(hour==0 && minute==0&& second==0)
    {
        dateFunction();

    }
    //setTimeout(clockFunction, 1000);
    /** setTimeout compared to tge setTimeout function is aonly called once
     * therefore must be called in the function
     * */

}