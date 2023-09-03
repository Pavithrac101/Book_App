package com.stackroute.bookservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(reason = "Book Already Exists Exception", code= HttpStatus.CONFLICT)
public class BookAlreadyExistsException extends  Exception{
}
