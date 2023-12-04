package com.stackroute.bookservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Date;
@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode
@Document /*to map a class to noSQL database */
public class Book {
    @Transient
    public static final String SEQUENCE_NAME="user_sequence";
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
    private String author;
    private String publisher;
    private boolean rented;
    private String imageURL;
    private String sellerEmailId;
}
