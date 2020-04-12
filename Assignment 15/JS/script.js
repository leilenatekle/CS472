    $(document).ready(function(){

        $.get("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
        .done(display)
        .fail(errorFunction)
        .always(function(){
            console.log("So, this happened.");
        });
        $("#btn-NewBook").on("click",myFunction);

});

function display(data){
    // console.log(JSON.stringify(myJson));
    let bookList="<tr>";
    var i=0;
    for(let temp of data){
        i++;
        bookList+="<td>" + i + "</td>" + "<td>" + temp.bookId+ "</td>" + "<td>" + temp.title+ "</td>"+ "<td>" + temp.overdueFee+ "</td>"+ "<td>" + temp.publisher+ "</td>"+ "<td>" + temp.datePublished+ "</td>"+  "</tr>";
    }
    $("#tbody").html(bookList);
}
function errorFunction(){
    console.log("hi")
}
function myFunction()
{
    location.replace("addNewBooks.html");
}