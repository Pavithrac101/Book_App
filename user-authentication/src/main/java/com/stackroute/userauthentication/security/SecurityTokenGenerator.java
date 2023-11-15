package com.stackroute.userauthentication.security;

import com.stackroute.userauthentication.domain.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class SecurityTokenGenerator implements ISecurityTokenGenerator{
    User data;
    @Override
    public Map<String, String> createToken(User user) {
        data=user;
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", user.getEmail());

        return generateToken(claims,user.getEmail());
    }
    public Map<String, String> generateToken(Map<String,Object> claims,String subject) {
        //function signature
        Map<String, String> result=new HashMap<>(); //store the data

        String myToken= Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS512,"secretKeyWave47")
                .compact(); //compressed

        result.put("Token",myToken);
        result.put("Message","User Logged in successfully");
//        result.put("email", data.getEmail());

        return result;

    }
}
