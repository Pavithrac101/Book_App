package com.stackroute.userauthentication.service1;

import com.stackroute.userauthentication.domain.SignupData;
import com.stackroute.userauthentication.domain.User;
import com.stackroute.userauthentication.exception.InvalidCredentialException;
import com.stackroute.userauthentication.exception.UserAlreadyExitsException;

public interface UserService {
    public User registerUserUsingFC(SignupData signUpData);

    public User registerUser(User user);
    public User checkLogin(String email,String password);
}
