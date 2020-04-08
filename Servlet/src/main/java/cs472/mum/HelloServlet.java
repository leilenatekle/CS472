package cs472.mum;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class HelloServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request,response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ContactServlet cs= new ContactServlet();
        cs.setTotalHit();
        PrintWriter out = response.getWriter();
        response.setContentType("text/html");
        out.print(generateHTML());
    }
    protected String generateHTML() {
        return "<html>\n" +
                "<head>\n" +
                "    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'>\n" +
                "    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>\n" +
                "    <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script>\n" +
                "    <title>Lesson 11</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "<nav class='navbar navbar-inverse bg-primary'>\n" +
                "    <div class='container-fluid'>\n" +
                "        <div class='navbar-header'>\n" +
                "            <a class='navbar-brand' href=hello>CS472-WAP ::: Lab11</a>\n" +
                "        </div>\n" +
                "        <ul class='nav navbar-nav'>\n" +
                "            <li class='active'><a href='index.jsp'>Home</a></li>\n" +
                "            <li><a href='#'>About us</a></li>\n" +
                "            <li><a href=contact>Contact Us</a></li>\n" +
                "        </ul>\n" +
                "        <form class='navbar-form navbar-left' action='#'>\n" +
                "            <div class='form-group'>\n" +
                "                <input type='text' class='form-control' placeholder='Search' name='search'>\n" +
                "            </div>\n" +
                "            <button type='submit' class='btn btn-default'>Submit</button>\n" +
                "        </form>\n" +
                "    </div>\n" +
                "</nav>\n" +
                "\n" +
                "<div class='container'>\n" +
                "    <div class='jumbotron'>\n" +
                "        <h1>Hello, world of HttpServlet 4.0!</h1>\n" +
                "        <h3>Welcome to Lab 11</h3>\n" +
                "        <p>This is a simple unit, a simple jumbotron-style component for calling wxtra attention to featured content or information. </p>\n" +
                "        <hr>\n" +
                "        <p>It uses utility classes for typography and spacing to space content out within the large container.</p>\n" +
                "        <button>Learn More</button>\n" +
                "    </div>\n" +
                "\n" +
                "</div>\n" +
                "</body>\n" +
                "</html>\n";
    }
}
