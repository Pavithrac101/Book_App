package com.stackroute.bookservice.service;

import com.stackroute.bookservice.exception.BookAlreadyExistsException;
import com.stackroute.bookservice.exception.BookNotFoundException;
import com.stackroute.bookservice.exception.UserNotFoundException;
import com.stackroute.bookservice.model.Book;

import java.util.Date;
import java.util.List;

public interface BookService {

    Book addBook(Book book) throws BookAlreadyExistsException;
    boolean removeBook(int bookId) throws BookNotFoundException;
    List<Book> getAllBooks();
    List<Book> getBooksBySellerEmail(String sellerEmail);

    Book getBookByBookId(int bookId) throws BookNotFoundException;
    Book updateBook( int bookId,Book book) throws BookNotFoundException;
    boolean returnBook(int bookId) throws   BookNotFoundException;
    Book sellBook(Book book);
//    boolean rentBook(int bookId);

}
