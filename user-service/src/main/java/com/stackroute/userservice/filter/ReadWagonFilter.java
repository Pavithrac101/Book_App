package com.stackroute.userservice.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ReadWagonFilter extends GenericFilter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest; // HttpServletRequst is child
        HttpServletResponse response = (HttpServletResponse) servletResponse; //   HttpServletResponse is parnt

        //let read token frm Authorization.Authorization hearder is carrying a token
        String authHeader = request.getHeader("Authorization");
        System.out.println(authHeader);
        //Bearer (token)
//        if(request.getMethod().equals("OPTIONS")){
//            //if the method is options the request can pass through not validation of token is required
//            response.setStatus(HttpServletResponse.SC_OK);
//            filterChain.doFilter(request,response);
//        }
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new ServletException("Token is Missing.....");
        }
        String token = authHeader.substring(7); // (token)
        System.out.println("Token");
        System.out.println();
        Claims claims = Jwts.parser().setSigningKey("secretKeyWave47").parseClaimsJws(token).getBody();    //jwts. parser it will convert to singningkey.//getbody will ready from client.//this finly will retives the clams
        request.setAttribute("claims",claims);
        System.out.println("claims"+ claims);
        String email1=(String)claims.get("email");
        System.out.println("recived email"+email1);
        request.setAttribute("a",email1);

        filterChain.doFilter(request, response); //filter Chain==>will give a connecting filter and controller is called filter chain.



        //filter chain is interface
        //in productfilter class setAttributes
        //Controller cls getAttributes

    }
    }

