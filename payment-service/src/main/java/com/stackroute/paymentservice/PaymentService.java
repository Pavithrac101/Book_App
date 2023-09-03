package com.stackroute.paymentservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {
    private final BookServiceClient bookServiceClient;

    @Autowired
    public PaymentService(BookServiceClient bookServiceClient) {
        this.bookServiceClient = bookServiceClient;
    }

    public String makePayment(PaymentRequest paymentRequest) {
        // Process payment with PayPal or your chosen gateway
        // ...

        // Reserve the book by calling the Book Service
        BookReservationRequest reservationRequest = new BookReservationRequest(paymentRequest.getBookId(), paymentRequest.getUserId());
        String reservationStatus = bookServiceClient.reserveBook(reservationRequest);

        // Handle the reservationStatus and return an appropriate response
        return "Payment successful. Book reserved: " + reservationStatus;
    }
}
