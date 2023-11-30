package com.stackroute.bookservice.repository;

import com.stackroute.bookservice.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface OrderRepository extends MongoRepository<Order, Integer> {
    @Query("{userEmailId: ?0}")
    List<Order> getOrdersByUserEmailId(String userEmailId);
}
