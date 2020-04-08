<%--
  Created by IntelliJ IDEA.
  User: leele
  Date: 4/8/2020
  Time: 4:12 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType='text/html;charset=UTF-8' language='java' %>
<html>
<head>
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
    <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script>
    <title>Lesson 11</title>
</head>
<body>
<nav class='navbar navbar-inverse bg-primary'>
    <div class='container-fluid'>
            <div class='navbar-header'>
                    <a class='navbar-brand' href=hello>CS472-WAP ::: Lab11</a>
                </div>
            <ul class='nav navbar-nav'>
                    <li class='active'><a href='index.jsp'>Home</a></li>
                    <li><a href='#'>About us</a></li>
                    <li><a href=contact>Contact Us</a></li>
                </ul>
            <form class='navbar-form navbar-left' action='#'>
                    <div class='form-group'>
                            <input type='text' class='form-control' placeholder='Search' name='search'>
                        </div>
                    <button type='submit' class='btn btn-default'>Submit</button>
                </form>
        </div>
</nav>

<div class='container'>
    <div class='jumbotron'>
            <h1>Thank you! Your message has been received as follows!</h1>
            <p>Name: ${name} </p>
            <hr>
            <p>It uses utility classes for typography and spacing to space content out within the large container.</p>
            <button>Learn More</button>
        </div>

</div>
</body>
</html>