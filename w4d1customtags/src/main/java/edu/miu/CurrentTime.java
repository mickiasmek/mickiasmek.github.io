package edu.miu;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentTime extends SimpleTagSupport {
    String color;
    String size;

    //render custom tag
    public void doTag() throws JspException, IOException {
        Date dNow = new Date();
        SimpleDateFormat ft = new SimpleDateFormat("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
       // System.out.println("Current Date: " + ft.format(dNow));
        JspWriter out = getJspContext().getOut();
        if (color != null) {
            out.write(String.format("<span style='color:%s; font-size:%s'>%s</span>", color, size, ft.format(dNow)));
        } else {
            out.write(String.format("<span>%s</span>",ft.format(dNow)));
        }
    }
        public void setColor(String color){
            this.color = color;
        }
        public void setText(String size){
            this.size = size;


    }
}