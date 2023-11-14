package com.stackroute.userauthentication.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@EqualsAndHashCode
public class UserDto {
    private String email;
    private String userId;
    private String userName;
    private String phoneNo,occupation;
    private String address;
}
