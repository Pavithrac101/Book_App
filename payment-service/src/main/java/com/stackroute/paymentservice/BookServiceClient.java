package com.stackroute.paymentservice;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "book-service") // Replace "book-service" with the actual service name
public interface BookServiceClient {
    @PostMapping("/api/books/reserve")
    String reserveBook(@RequestBody BookReservationRequest request);
}
