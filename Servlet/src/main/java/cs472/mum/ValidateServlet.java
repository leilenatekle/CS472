package cs472.mum;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class ValidateServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String name = request.getParameter("name");
        String gender= request.getParameter("gender");
        String category= request.getParameter("category");
        String message= request.getParameter("message");
        String errorMessage="";
        if(name==""){
            errorMessage+="\n Name is missing.";
        }
        if(gender==null){
            errorMessage+="\n Gender is missing.";
        }
        if(category==null){
            errorMessage+="\n Categroy is missing";
        }
        if(message==""){
            errorMessage+= "\n Message is missing";
        }
        request.setAttribute("msg", errorMessage);
        request.setAttribute("name", name);
        request.setAttribute("gender", gender);
        request.setAttribute("category", category);
        request.setAttribute("message", message);


//        out.print(errorMessage);
        ServletContext servletContext = getServletContext();
        RequestDispatcher requestDispatcher = servletContext
                .getRequestDispatcher("/contact");
        requestDispatcher.forward(request, response);
        }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
