package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExitsException;

public interface UserService {
    User registerUser(User user) throws UserAlreadyExitsException;
    User updateUser(User user);
}
