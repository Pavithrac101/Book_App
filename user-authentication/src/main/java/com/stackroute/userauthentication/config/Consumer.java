//package com.stackroute.userauthentication.config;
//
//import com.stackroute.userauthentication.domain.User;
//import com.stackroute.userauthentication.exception.UserAlreadyExitsException;
//import com.stackroute.userauthentication.rabittmq.domain.UserDTO;
//import com.stackroute.userauthentication.service1.UserServiceImpl;
//import org.springframework.amqp.rabbit.annotation.RabbitListener;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
//@Component
//public class Consumer {
//    @Autowired
//    private UserServiceImpl userService;
//
//    @RabbitListener(queues="user_queue")
//    public void getUserDtoFromRabbitMq(UserDTO userDto) throws UserAlreadyExitsException
//    {
//        System.out.println(userDto.toString());
//        User user=new User();
//        user.setEmail(userDto.getEmail());
//        user.setPassword(userDto.getPassword());
//        userService.saveUser(user);
//    }
//}
