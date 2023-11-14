package com.stackroute.userservice.service;

//import com.stackroute.userservice.config.Producer;
import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.exception.UserAlreadyExitsException;
import com.stackroute.userservice.rabbitmq.domain.UserDTO;
import com.stackroute.userservice.repository.UserServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserServiceRepository userServiceRepository;
//    @Autowired
//    Producer producer;
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
//            producer.sendMessageToRabbitMq(userdto);
        }
        return user;
    }
    @Override
    public User viewUserProfile(String email) {
        return this.userServiceRepository.findByEmail(email);
    }



    @Override
    public User updateUser(User user,String email) {
        Optional<User> optUser=userServiceRepository.findById(user.getEmail());
        if (optUser.isEmpty())
        {
            return  null;
        }
        User existingUser = optUser.get();
        if(user.getUserName()!= null){
            existingUser.setUserName(user.getUserName());
        }
        if(user.getPhoneNo()!= null){
            existingUser.setPhoneNo(user.getPhoneNo());
        }
        if(user.getAddress()!=null){
            existingUser.setAddress(user.getAddress());
        }
        if(user.getOccupation()!=null){
            existingUser.setOccupation(user.getOccupation());
        }

        return this.userServiceRepository.save(existingUser);
    }
}
