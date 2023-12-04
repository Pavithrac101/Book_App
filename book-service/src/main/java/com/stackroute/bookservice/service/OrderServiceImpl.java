package com.stackroute.bookservice.service;

import com.stackroute.bookservice.model.Order;
import com.stackroute.bookservice.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Order saveOrder(Order order) {

        return this.orderRepository.save(order);
    }

    @Override
    public List<Order> getOrdersByUserEmailId(String userEmailId) {
        return this.orderRepository.getOrdersByUserEmailId(userEmailId);
    }
}
