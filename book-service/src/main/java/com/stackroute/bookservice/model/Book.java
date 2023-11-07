package com.stackroute.bookservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Date;
@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode
@Document
public class Book {
    @MongoId
    private int bookId;
    private String title;
    private String isbn;
    private int publicationYear;
    private String genre;
    private String language;
    private int pageCount;
    private String description;
    private float price;
    private boolean available;
    private RentalInfo rentalInfo;
    private String author;
    private String publisher;
    private boolean rented;
    private String imageURL;
}
