package com.stackroute.userauthentication.service1;

import com.stackroute.userauthentication.domain.User;
import com.stackroute.userauthentication.exception.InvalidCredentialException;
import com.stackroute.userauthentication.exception.UserAlreadyExitsException;

public interface UserService {
    User saveUser(User user) throws UserAlreadyExitsException;
    User findByEmailAndPassword(String email,String password) throws InvalidCredentialException;
}
