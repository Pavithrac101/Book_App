package com.stackroute.bookservice.controller;

import com.stackroute.bookservice.exception.BookAlreadyExistsException;
import com.stackroute.bookservice.exception.BookNotFoundException;
import com.stackroute.bookservice.model.Book;
import com.stackroute.bookservice.service.BookService;
import com.stackroute.bookservice.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static com.stackroute.bookservice.model.Book.SEQUENCE_NAME;

@RestController
//@CrossOrigin("*")
@RequestMapping("/api/v2")
public class BookController {
    @Autowired
    private BookService bookService;
    @Autowired
    private SequenceGeneratorService sequenceGeneratorService;
// http://localhost:5555/api/v1/bookService/add
//    @PostMapping("/bookService/add")
//    public ResponseEntity<?> addBook(@RequestBody Book book) throws BookAlreadyExistsException{
//       if (book != null){
//          try{ Book saveBook = bookService.addBook(book);
//           return  new ResponseEntity<>(saveBook, HttpStatus.CREATED);
//       } catch(BookAlreadyExistsException exception){
//              throw exception;
//          } catch (Exception e){
//              return new ResponseEntity<>("Error ! try after sometimes",HttpStatus.NOT_FOUND);
//          } }else {
//           return new ResponseEntity<>("Book Object Null",HttpStatus.NOT_FOUND);
//       }
//    }
    // http://localhost:5555/api/v1/bookService/remove/{id}
    @DeleteMapping("/bookService/remove/{id}")
    public ResponseEntity<?> removeBookById(@PathVariable int id,HttpServletRequest request) throws BookNotFoundException {
        System.out.println("entering the seller handler method");
        String email = (String) request.getAttribute("a");
            if (id != -1) {
                try {
                    this.bookService.removeBook(id);
                    return ResponseEntity.ok().build();
                } catch (BookNotFoundException ex) {
                    throw new BookNotFoundException();
                }
            } else {
                return new ResponseEntity<>("Book Object Null", HttpStatus.NOT_FOUND);
            }

     }

    // http://localhost:5555/api/v1/books
    @GetMapping("/books/all")
    public ResponseEntity<?> getAllBooks(){
        System.out.println("The get all books being called");
        List<Book> books =bookService.getAllBooks();
        if (books != null){
        return new ResponseEntity<>(books,HttpStatus.OK);}
      else {
          return new ResponseEntity<>("Book Object Null",HttpStatus.NOT_FOUND);
        }
    }
    // http://localhost:5555/api/v1/book/{bookId}
    @GetMapping("/book/{bookId}")
    public ResponseEntity<?> getBookById(@PathVariable int bookId) throws BookNotFoundException{
        if( bookId != -1){
        try {
            Book book = this.bookService.getBookByBookId(bookId);
            return ResponseEntity.ok(book);
        } catch (BookNotFoundException ex) {
            throw new BookNotFoundException();
        } } else {
            return new ResponseEntity<>("Book Object Null",HttpStatus.NOT_FOUND);
        }
    }
    // http://localhost:5555/api/v1/updateBook/{bookId}
    @PutMapping("/updateBook/{bookId}")
    public ResponseEntity<?> updateBook(@PathVariable int bookId,@RequestBody Book book) throws BookNotFoundException{
     try {Book book1= bookService.updateBook(bookId, book);
     return new ResponseEntity<>(book1,HttpStatus.OK);
    } catch (BookNotFoundException ex){
     throw new BookNotFoundException();
     }
    }
    // http://localhost:5555/api/v1/returnBook/{bookId}
    @PutMapping("/returnBook/{bookId}")
    public ResponseEntity<?> returnBook(@PathVariable int bookId) throws BookNotFoundException {
        try {
            boolean success = this.bookService.returnBook(bookId);
            if (success) {
                return ResponseEntity.ok("Book returned successfully.");
            } else {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Book is not currently rented.");
            }
        } catch (BookNotFoundException ex) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found with ID: " + bookId, ex);
        }
    }
    // http://localhost:5555/api/v1/sellBook

    // Controller method for selling a book
    @PostMapping("/sellBook")
    public ResponseEntity<?> sellBook( @RequestBody Book book, HttpServletRequest request) {
        System.out.println("entering the handler method");
        String email=(String)request.getAttribute("a");
        book.setSellerEmailId(email);
        book.setBookId(sequenceGeneratorService.getSequenceNumber(SEQUENCE_NAME));
        Book success = this.bookService.sellBook(book);
        System.out.println(email);

        if (success!=null) {
            return new ResponseEntity<>(bookService.sellBook(book),HttpStatus.OK);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Book not found or not available for sale.");
        }
    }
    @GetMapping("/books")
    public ResponseEntity<?> sellerBooks(HttpServletRequest request){
        System.out.println("entering the seller handler method");
        String email=(String) request.getAttribute("a");
        System.out.println("email as seller books"+email);
        List<Book> books=bookService.getBooksBySellerEmail(email);
        return new ResponseEntity<>(books,HttpStatus.OK);
    }
//     http://localhost:5555/api/v1/rentBook/{bookId}

    // Controller method for renting a book
//    @PutMapping("/rentBook/{bookId}")
//    public ResponseEntity<?> rentBook(@PathVariable int bookId) {
//        boolean success = this.bookService.rentBook(bookId);
//        if (success) {
//            return ResponseEntity.ok("Book rented successfully.");
//        } else {
//            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Book not found or not available for rent.");
//        }
//    }
}







