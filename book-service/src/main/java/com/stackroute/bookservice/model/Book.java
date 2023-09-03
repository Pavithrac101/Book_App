package com.stackroute.bookservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode
@Document
public class Book {
    @Id
    private String title;
    private String isbn;
    private int publicationYear;
    private String genre;
    private String language;
    private int pageCount;
    private String description;
    private double price;
    private boolean available;
    private Date acquisitionDate;
    private String author;
    private String publisher;
}
