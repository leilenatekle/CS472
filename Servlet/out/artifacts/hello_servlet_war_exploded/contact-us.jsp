<%--
  Created by IntelliJ IDEA.
  User: leele
  Date: 4/7/2020
  Time: 9:58 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType='text/html;charset=UTF-8' language='java' %>
<html>
<head>
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
    <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script>
    <title>Contact us</title>
</head>
<body>
<nav class='navbar navbar-inverse bg-primary'>
    <div class='container-fluid'>
        <div class='navbar-header'>
            <a class='navbar-brand' href='index.jsp'>CS472-WAP ::: Lab11</a>
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
    <h2>Customer Contact Form</h2>
    <form action='/action_page.php'>
        <div class='form-group'>
            <label for='name'>*Name:</label>
            <input type='text' class='form-control' id='name' placeholder='e.g John Smith' name='name'>
            <small>Enter your full name.</small>
        </div>
        <div class='form-group'>
            <label>*Gender:</label>
            <div class='radio'>
            <label><input type='radio' name='gender' id='male' checked>Male</label>
        </div>
        <div class='radio'>
            <label><input type='radio' name='gender' id='female'>Female</label>
        </div>
        </div>

        <div class='form-group'>
            <label for='category'>*Category:</label>
            <select class='form-control' id='category'>
                <option value='feedback'>Feedback</option>
                <option value='inquiry'>Inquiry</option>
                <option value='complaint'>Complaint</option>
            </select>
        </div>
        <div class='form-group'>
            <label for='message'>*Message:</label>
            <textarea class='form-control' rows='5' id='message'></textarea>
        </div>
        <button type='submit' class='btn btn-default'>Submit</button>
    </form>

</div>
</body>
</html>
