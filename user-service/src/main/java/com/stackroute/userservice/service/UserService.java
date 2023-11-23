package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExitsException;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User registerUser(User user) throws UserAlreadyExitsException;
    public User getAllUsers(String email);
    public User updateUser(User user,String email);
}
