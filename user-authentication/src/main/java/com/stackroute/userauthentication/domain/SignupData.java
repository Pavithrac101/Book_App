package com.stackroute.userauthentication.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import javax.persistence.Entity;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode

public class SignupData {

    private String email;
    private String userId;
    private String userName;
    private String password,phoneNo,occupation;
    private String address;
}
