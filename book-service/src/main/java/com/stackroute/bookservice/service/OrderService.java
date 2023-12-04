package com.stackroute.bookservice.service;

import com.stackroute.bookservice.model.Order;

import java.util.List;

public interface OrderService {
    Order saveOrder(Order order);
    List<Order> getOrdersByUserEmailId(String userEmailId);
}
