package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExitsException;

import java.util.List;

public interface UserService {
    User registerUser(User user) throws UserAlreadyExitsException;
    public  List<User> getAllUsers(String email);
    public User updateUser(User user,String email);
}
