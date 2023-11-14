package com.stackroute.userauthentication.controller;

//import com.stackroute.userauthentication.config.Consumer;
import com.stackroute.userauthentication.domain.SignupData;
import com.stackroute.userauthentication.domain.User;
import com.stackroute.userauthentication.exception.InvalidCredentialException;
import com.stackroute.userauthentication.service1.UserService;
import com.stackroute.userauthentication.security.SecurityTokenGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
@RequestMapping("/api/auth/v1")

public class UserController {
    private UserService userService;
    private SecurityTokenGenerator securityTokenGenerator;

//    @Autowired
//    private Consumer consumer;

    @Autowired
    public UserController(UserService userService, SecurityTokenGenerator securityTokenGenerator) {
        this.userService = userService;
        this.securityTokenGenerator = securityTokenGenerator;
    }
    @PostMapping("/register")
    public ResponseEntity regisUser(@RequestBody SignupData signUpData) {
        System.out.println(signUpData);

//            signUpData.setRole("Admin_User");  //assign default value to the role
        return new ResponseEntity(userService.registerUserUsingFC(signUpData), HttpStatus.CREATED);


    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) throws InvalidCredentialException {
        User retrievedUser = userService.checkLogin(user.getEmail(), user.getPassword());
        if (retrievedUser == null) {
            throw new InvalidCredentialException();
        } else {

            return new ResponseEntity<>(securityTokenGenerator.createToken(retrievedUser), HttpStatus.OK);
        }
    }
}
