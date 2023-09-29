package com.stackroute.bookservice.repository;


import com.stackroute.bookservice.model.Book;
import com.stackroute.bookservice.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends MongoRepository<Book, Integer> {
//@Query("{'books.title' : {$in : [?0]}}")
//    List<User> findByTitle(String title);
//    Optional<User> findUserByUserName(String username);
@Query("{'bookId' : {$eq: [?0]}}")
List<Book> findBookByBookId(int bookId);
}
