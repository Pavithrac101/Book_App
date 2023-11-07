package com.stackroute.userservice.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class User {
    @Id
    private String email;
    private String userId;
    private String userName;
    private String password,phoneNo,occupation;
    private String address;
}
