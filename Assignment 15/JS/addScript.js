$(document).ready(function(){
    // $("#addBookForm").on("submit", addBooks);
    $("#btn").click(addBooks);

});

function addBooks(event)
{
    // var bookId= Math.random();
    var isbn= $("#isbn").val();
    var title=$("#title").val();
    var overdueFee=$("#overdue").val();
    var publisher=$("#publisher").val();
    var datePublished=$("#date").val();
    console.log(isbn+" "+title+overdueFee+publisher+datePublished);

    var data= {
        "isbn" : isbn,
        "title" : title,
        "overdueFee": overdueFee,
        "publisher": publisher,
        "datePublished": datePublished 
        };

        $.ajax({
            url: "https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json",
            complete: successMessage
        });

        // $.post("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",
        // {
        //     "isbn" : isbn,
        //     "title" : title,
        //     "overdueFee": overdueFee,
        //     "publisher": publisher,
        //     "datePublished": datePublished 
        //     },
        //     function(result){
        //         alert(result)
        //     }, "application/json"
        // );
    // $.post("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", 
    // {
    //     data
    // },
    // function(data, status){
    //     alert("Data: " + data + "\nStatus: " + status); });


    // $.ajax("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
    //     type: "post",
    //     dataType: "json",
    //     header: {
    //         "Content-Type": "application/json"
    //     },
    //     data: JSON.stringify(data)
    // }).done(successMessage)
    // .fail(failMessage);

    // event.preventDefault();


    //   fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",
    //     {  headers: {
    //        'Content-Type': 'application/json'
    //     },
    //     method:"POST",
    //     body:JSON.stringify(data)       //'isbn='+isbn+'&title='+title+'&overdueFee='+overdueFee+'&publisher='+publisher+'&datePublished='+datePublished, 
    // }).then(response=>response.json())
    //    .then(response=>{console.log(JSON.stringify(response))
    // });


}

function successMessage(){
alert("Book Has been Successfully Added! ");
}
function failMessage(){
    alert("ERROR");
}