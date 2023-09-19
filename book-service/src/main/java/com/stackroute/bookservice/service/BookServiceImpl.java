package com.stackroute.bookservice.service;

import com.stackroute.bookservice.exception.BookAlreadyExistsException;
import com.stackroute.bookservice.exception.BookNotFoundException;
import com.stackroute.bookservice.exception.UserNotFoundException;
import com.stackroute.bookservice.model.Book;
import com.stackroute.bookservice.model.RentalInfo;
import com.stackroute.bookservice.model.User;
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
       if (this.bookRepository.findById(book.getBookId()).isPresent()){
           throw new BookAlreadyExistsException();
       }else {
        return this.bookRepository.save(book);}
    }

    @Override
    public boolean removeBook(int bookId) throws BookNotFoundException {
        if(this.bookRepository.findById(bookId).isEmpty()){
            throw new BookNotFoundException();
        } else {
            this.bookRepository.deleteById(bookId);
            return true;
        }
    }

    @Override
    public List<Book> getAllBooks() {
        return this.bookRepository.findAll();
    }

    @Override
    public List<Book> getBookByBookId(int bookId) throws BookNotFoundException {
       if (this.bookRepository.findBookByBookId(bookId).isEmpty()){
           throw new BookNotFoundException();
       }else {
        return this.bookRepository.findBookByBookId(bookId);}
    }

    @Override
    public Book updateBook(int bookId, Book book) throws BookNotFoundException{
       Optional<Book> optionalBook=bookRepository.findById(bookId);
       if (optionalBook.isPresent()){
           Book retrivedBook = optionalBook.get();
       if (book.getTitle()!=null){
           retrivedBook.setTitle(book.getTitle());
       }if (book.getGenre()!=null){
            retrivedBook.setGenre(book.getGenre());
        }if (book.getIsbn()!=null){
            retrivedBook.setIsbn(book.getIsbn());
        }if (book.getAuthor()!=null){
            retrivedBook.setAuthor(book.getAuthor());
        }if (book.getLanguage()!=null){
            retrivedBook.setLanguage(book.getLanguage());
        }if (book.getPublisher()!=null){
            retrivedBook.setPublisher(book.getPublisher());
        }if (book.getDescription()!=null){
            retrivedBook.setDescription(book.getDescription());
        }if (book.getPageCount() != -1) {
           retrivedBook.setPageCount(book.getPageCount());
       }
           if (book.getPrice() != -1.0f) {
               retrivedBook.setPrice(book.getPrice());
           }
//           if (book.isAvailable()) {
//               retrivedBook.setAvailable(true);
//           }
        return bookRepository.save(retrivedBook);}else {
           throw new BookNotFoundException();
    }}

    @Override
    public boolean returnBook(int bookId) throws BookNotFoundException{
        Optional<Book> optionalBook = bookRepository.findById(bookId);

        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();

            // Check if the book is currently rented
            if (book.isRented()) {
                // Update the book status to available
                book.setRented(false);

                // Save the updated book

                bookRepository.save(book);

                return true; // Return true to indicate successful return
            } else {
                return false;

        } } else {
            throw new BookNotFoundException();  }}





    @Override
    public boolean sellBook(int bookId) {
        Optional<Book> optionalBook = bookRepository.findById(bookId);

        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();

            // Check if the book is available for sale
            if (book.isAvailable()) {
                // Update the book status to sold
                book.setAvailable(false);

                // Save the updated book
                bookRepository.save(book);

                return true; // Return true to indicate successful sale
            }
        }

        // If the book is not found or not available for sale, return false
        return false;

    }

    @Override
    public boolean rentBook(int bookId) {
        Optional<Book> optionalBook = bookRepository.findById(bookId);

        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();

            // Check if the book is available for rent
            if (book.isAvailable()) {
                // Update the book status to rented
                book.setAvailable(false);

                // Create and set the acquisition date for the rental
                RentalInfo rentalInfo = new RentalInfo();
                rentalInfo.setAcquisitionDate(new Date());
                book.setRentalInfo(rentalInfo);

                // Save the updated book
                bookRepository.save(book);

                return true; // Return true to indicate successful rental
            }
        }

        // If the book is not found or not available for rent, return false
        return false;
    }
}
