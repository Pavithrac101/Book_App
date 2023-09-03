package com.stackroute.bookservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(reason = "Book Not Found",code = HttpStatus.NOT_FOUND)
public class BookNotFoundException extends Exception{
}
