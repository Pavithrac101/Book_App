package com.stackroute.userservice.service;

import com.stackroute.userservice.config.Producer;
import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExitsException;
import com.stackroute.userservice.rabbitmq.domain.UserDTO;
import com.stackroute.userservice.repository.UserServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserServiceRepository userServiceRepository;
    @Autowired
    Producer producer;
    @Override
    public User registerUser(User user) throws UserAlreadyExitsException {
        UserDTO userdto=new UserDTO();
        userdto.setEmail(user.getEmail());
        userdto.setPassword(user.getPassword());

        if(userServiceRepository.findById(user.getEmail()).isPresent())
        {
            throw new UserAlreadyExitsException();
        }
        else {
            userServiceRepository.save(user);
            System.out.println("saved user in mongo");
            producer.sendMessageToRabbitMq(userdto);
        }
        return user;
    }


    @Override
    public User updateUser(User user) {
        return null;
    }
}
