package com.stackroute.bookservice.controller;

import com.stackroute.bookservice.model.Order;
import com.stackroute.bookservice.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/v3")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @PostMapping("/order")
    public ResponseEntity<?> saveOrder(@RequestBody Order order, HttpServletRequest request){
//        System.out.println("path variable"+bookId);
        String email=(String) request.getAttribute("a");
        order.setUserEmailId(email);
        System.out.println(order.getUserEmailId());
        System.out.println(email);
        order.setOrderDate(new Date());
        Order orderSaved = this.orderService.saveOrder(order);

        System.out.println("userEmail"+email);
        return new ResponseEntity<>(orderSaved, HttpStatus.CREATED);
    }
    @GetMapping("/orders")
    public ResponseEntity<?> userOrders(HttpServletRequest request){
        String email=(String) request.getAttribute("a");
        List<Order> orders=orderService.getOrdersByUserEmailId(email);
        return new ResponseEntity<>(orders,HttpStatus.OK);
    }
}
