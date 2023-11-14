package com.stackroute.userservice.controller;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExitsException;
import com.stackroute.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


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
    @GetMapping("/user/{email}")
    public ResponseEntity<?> getUserDetails(@PathVariable String email){
        User user=userService.viewUserProfile(email);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }
    @PutMapping("/userdata/{email}")
    public ResponseEntity<?> updateUser(@RequestBody User user, @PathVariable String email){
        User user1 = userService.updateUser(user,email);
        return new ResponseEntity<>(user1, HttpStatus.OK);
    }
}
