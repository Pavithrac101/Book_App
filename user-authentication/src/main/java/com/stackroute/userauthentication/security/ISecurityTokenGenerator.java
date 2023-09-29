package com.stackroute.userauthentication.security;

import com.stackroute.userauthentication.domain.User;

import java.util.Map;

public interface ISecurityTokenGenerator {
    Map<String, String> createToken(User user);
}
