package com.stackroute.bookservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(reason = "User Already exist!", code = HttpStatus.CONFLICT)
public class UserAlreadyExistException extends Exception {
}
