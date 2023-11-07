package com.stackroute.bookservice.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class BookFliter extends GenericFilter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response= (HttpServletResponse) servletResponse;

        String authHeader = request.getHeader("Authorization");
        System.out.println(authHeader);
        if(request.getMethod().equals("OPTIONS")){
            response.setStatus(HttpServletResponse.SC_OK);
            filterChain.doFilter(request,response);
        }
        else if(authHeader == null || !authHeader.startsWith("Bearer ")){
            throw new ServletException("Token is Missing....");
        }
        String token = authHeader.substring(7);
        Claims claims = Jwts.parser().setSigningKey("secretKeyWave47").parseClaimsJws(token).getBody();
        request.setAttribute("claims",claims);
        filterChain.doFilter(request,response);
    }
}