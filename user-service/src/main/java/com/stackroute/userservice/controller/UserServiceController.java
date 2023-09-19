package com.stackroute.userservice.controller;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExitsException;
import com.stackroute.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v2")
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
}
