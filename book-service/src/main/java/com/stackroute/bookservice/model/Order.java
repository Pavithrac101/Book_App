package com.stackroute.bookservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Date;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode
@Document
public class Order {
 @MongoId
 private String orderId= UUID.randomUUID().toString();
 private int bookId;
 private String userEmailId;
 private String addressLine1;
 private String addressLine2;
 private String city;
 private String state;
 private long pinCode;
 private String landMark;
 private Date orderDate;
}

