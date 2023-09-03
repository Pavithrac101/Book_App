package com.stackroute.bookservice.service;

import com.stackroute.bookservice.exception.BookAlreadyExistsException;
import com.stackroute.bookservice.exception.BookNotFoundException;
import com.stackroute.bookservice.model.Book;

import java.util.Date;
import java.util.List;

public interface BookService {

    Book addBook(Book book) throws BookAlreadyExistsException;
    void removeBook(String title) throws BookNotFoundException;
    List<Book> getAllBooks() throws BookNotFoundException;
    Book updateBook(String title,Book book);
    boolean returnBook(String bookId, String userId);
    boolean sellBook(String bookId, String userId);
    boolean rentBook(String bookId, String userId, Date acquisitionDate);

}
