package com.stackroute.bookservice.service;

import com.stackroute.bookservice.exception.BookAlreadyExistsException;
import com.stackroute.bookservice.exception.BookNotFoundException;
import com.stackroute.bookservice.model.Book;
import com.stackroute.bookservice.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book addBook(Book book) throws BookAlreadyExistsException {
        if (bookRepository.existsById(book.getTitle())){
            throw new BookAlreadyExistsException();
        }
        return bookRepository.save(book);
    }

    @Override
    public void removeBook(String title) throws BookNotFoundException {
     Optional<Book> book=bookRepository.findById(title);
     if (book.isEmpty()){
         throw new BookNotFoundException();
     }
     Book book1=book.get();
     bookRepository.delete(book1);
    }

    @Override
    public List<Book> getAllBooks() throws BookNotFoundException {
       List<Book> books=bookRepository.findAll();
        if(books.isEmpty()){
            throw new BookNotFoundException();
        }
        return books;
    }

    @Override
    public Book updateBook(String title, Book book) {
        return null;
    }

    @Override
    public boolean returnBook(String bookId, String userId) {
        return false;
    }

    @Override
    public boolean sellBook(String bookId, String userId) {
        return false;
    }

    @Override
    public boolean rentBook(String bookId, String userId, Date acquisitionDate) {
        return false;
    }
}
