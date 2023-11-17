package com.stackroute.userservice.controller;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExitsException;
import com.stackroute.userservice.service.UserService;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

//@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1")
public class UserServiceController {
    private ResponseEntity<?> responseEntity;
    @Autowired
    private UserService userService;
    @PostMapping("/adduser")
    public ResponseEntity<?> addUser(@RequestBody User user) throws UserAlreadyExitsException {
        System.out.println("User object printed successfully"+user);

        try {

            responseEntity =  new ResponseEntity<>(userService.registerUser(user), HttpStatus.CREATED);
        }
        catch(UserAlreadyExitsException e)
        {
            throw new UserAlreadyExitsException();
        }

        return responseEntity;

    }
    @GetMapping("/user/userdata")
    public ResponseEntity<?> getAllUsers(HttpServletRequest request) {
        System.out.println("header" +request.getHeader("Authorization"));


        Claims claims = (Claims) request.getAttribute("claims");
       System.out.println("email from claims :: " + claims.getSubject());
        String email = claims.getSubject();
//        String email=(String) request.getAttribute("email");
        System.out.println("email :: "+email);
        Optional<User> users=userService.getAllUsers(email);




        responseEntity = new ResponseEntity<>(users,HttpStatus.OK);
        return responseEntity;



    }
    @PutMapping("/userdata/{email}")
    public ResponseEntity<?> updateUser(@RequestBody User user, @PathVariable String email){
        User user1 = userService.updateUser(user,email);
        return new ResponseEntity<>(user1, HttpStatus.OK);
    }
}
