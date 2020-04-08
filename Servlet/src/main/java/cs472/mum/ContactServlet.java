
package cs472.mum;

        import javax.servlet.RequestDispatcher;
        import javax.servlet.ServletContext;
        import javax.servlet.ServletException;
        import javax.servlet.http.HttpServlet;
        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpServletResponse;
        import java.io.IOException;
        import java.io.PrintWriter;

public class ContactServlet extends HttpServlet {
    private int hitcounter;
    private int totalHit;
    private String errorMessage="";

    public void init() {
        hitcounter = 0;
        totalHit=0;
    }
    public void setTotalHit()
    {
        totalHit++;
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if((String)request.getAttribute("msg")=="")
        {
            //            response.sendRedirect("web/thankyou.jsp");
            ServletContext servletContext = getServletContext();
            RequestDispatcher requestDispatcher = servletContext.getRequestDispatcher("/thankyou");
            requestDispatcher.forward(request, response);
        }
        else{
            totalHit++;
            PrintWriter out = response.getWriter();
            out.print(generateHTML( hitcounter,(String)request.getAttribute("msg"),totalHit));        }

    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        totalHit++;
        hitcounter++;
        PrintWriter out = response.getWriter();
        response.setContentType("text/html");
        out.print(generateHTML(hitcounter,errorMessage,totalHit));
    }
    protected String generateHTML(int hitcounter, String errorMessage, int totalHit){
        return "<html>\n" +
                "<head>\n" +
                "    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css'>\n" +
                "    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>\n" +
                "    <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'></script>\n" +
                "    <title>Contact us</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "<nav class='navbar navbar-inverse bg-primary'>\n" +
                "    <div class='container-fluid'>\n" +
                "        <div class='navbar-header'>\n" +
                "            <a class='navbar-brand' href=hello>CS472-WAP ::: Lab11</a>\n" +
                "        </div>\n" +
                "        <ul class='nav navbar-nav'>\n" +
                "            <li class='active'><a href=hello>Home</a></li>\n" +
                "            <li><a href='#'>About us</a></li>\n" +
                "            <li><a href=contact>Contact Us</a></li>\n" +
                "        </ul>\n" +
                "        <form class='navbar-form navbar-lfeft'>\n" +
                "            <div class='form-group'>\n" +
                "                <input type='text' class='form-control' placeholder='Search' name='search'>\n" +
                "            </div>\n" +
                "            <button type='submit' class='btn btn-default'>Submit</button>\n" +
                "        </form>\n" +
                "    </div>\n" +
                "</nav>\n" +
                "\n" +
                "<div class='container'>\n" +
                "<p style='color:red'> " + errorMessage + "<p>\n" +
                "    <h2>Customer Contact Form</h2>\n" +
                "    <form  action='validate' method='post'>\n" +
                "        <div class='form-group'>\n" +
                "            <label for='name'>*Name:</label>\n" +
                "            <input type='text' class='form-control' id='name' placeholder='e.g John Smith' name='name''>\n" +
                "            <small>Enter your full name.</small>\n" +
                "        </div>\n" +
                "        <div class='form-group'>\n" +
                "            <label>*Gender:</label>\n" +
                "            <div class='radio'>\n" +
                "            <label><input type='radio' name='gender' id='male' value='male' >Male</label>\n" +
                "        </div>\n" +
                "        <div class='radio'>\n" +
                "            <label><input type='radio' name='gender' id='female' value='female'>Female</label>\n" +
                "        </div>\n" +
                "        </div>\n" +
                "\n" +
                "        <div class='form-group'>\n" +
                "            <label for='category'>*Category:</label>\n" +
                "            <select class='form-control' id='category' name='category'>\n" +
                "                <option value='null' disabled selected>Selected...</option>\n" +
                "                <option value='feedback'>Feedback</option>\n" +
                "                <option value='inquiry'>Inquiry</option>\n" +
                "                <option value='complaint'>Complaint</option>\n" +
                "            </select>\n" +
                "        </div>\n" +
                "        <div class='form-group'>\n" +
                "            <label for='message'>*Message:</label>\n" +
                "            <textarea class='form-control' rows='5' id='message' name='message'></textarea>\n" +
                "        </div>\n" +
                "        <button type='submit' class='btn btn-default'>Submit</button>\n" +
                "    </form>\n" +
                "<p> Hit Count for this page: " + hitcounter + "<p>\n" +
                "<p> Total hit for the entire webapp: " + totalHit + "<p>\n" +

                "\n" +
                "</div>\n" +
                "</body>\n" +
                "</html>\n";
    }
}
