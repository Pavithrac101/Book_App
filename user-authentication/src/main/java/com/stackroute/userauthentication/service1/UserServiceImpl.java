package com.stackroute.userauthentication.service1;

import com.stackroute.userauthentication.domain.User;
import com.stackroute.userauthentication.exception.InvalidCredentialException;
import com.stackroute.userauthentication.exception.UserAlreadyExitsException;
import com.stackroute.userauthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;



    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Override
    public User saveUser(User user) throws UserAlreadyExitsException {
        if(userRepository.findById(user.getEmail()).isPresent())
        {
            throw new UserAlreadyExitsException();
        }
        System.out.println(user);
        return userRepository.save(user);
    }

    @Override
    public User findByEmailAndPassword(String email, String password) throws InvalidCredentialException {
        System.out.println("email"+email);
        System.out.println("password"+password);
        User loggedInUser = userRepository.findByEmailAndPassword(email,password);
        System.out.println(loggedInUser);
        if(loggedInUser == null)
        {
            throw new InvalidCredentialException();
        }

        return loggedInUser;

    }
    }

