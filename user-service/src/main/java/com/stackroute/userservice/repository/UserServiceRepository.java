package com.stackroute.userservice.repository;

import com.stackroute.userservice.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface UserServiceRepository extends MongoRepository<User,String> {
    User findByEmail(String email);
}
