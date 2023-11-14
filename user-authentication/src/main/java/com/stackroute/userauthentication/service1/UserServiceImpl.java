package com.stackroute.userauthentication.service1;

import com.stackroute.userauthentication.domain.SignupData;
import com.stackroute.userauthentication.domain.User;
import com.stackroute.userauthentication.domain.UserDto;
import com.stackroute.userauthentication.exception.InvalidCredentialException;
import com.stackroute.userauthentication.exception.UserAlreadyExitsException;
import com.stackroute.userauthentication.proxy.UserProxy;
import com.stackroute.userauthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;



    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Autowired
    private UserProxy userProxy;
    @Override
    public User registerUserUsingFC(SignupData signUpData) {
        UserDto userDto = new UserDto(signUpData.getEmail(),signUpData.getUserId(),signUpData.getUserName(),signUpData.getAddress(),signUpData.getOccupation(),signUpData.getPhoneNo());
        User user = new User(signUpData.getEmail(),signUpData.getPassword());

        ResponseEntity response=userProxy.sendUserDtoToProductApp(userDto);
        System.out.println(response);
        User user1=userRepository.save(user);
        return user1;


    }

    @Override
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User checkLogin(String email, String password) {
        return userRepository.findByEmailAndPassword(email,password);
    }
    }

