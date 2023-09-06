package com.stackroute.paymentservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    private final PayPalService payPalService;

    @Autowired
    public PaymentController(PayPalService payPalService) {
        this.payPalService = payPalService;
    }

    @PostMapping("/createPayment")
    public ResponseEntity<String> createPayment(@RequestParam double amount, @RequestParam String currency) {
        try {
            Payment payment = payPalService.createPayment(amount, currency, "sale");
            // Here, you can handle the payment response as needed, log it, or return it to the client.
            return ResponseEntity.ok(payment.toJSON());
        } catch (PayPalRESTException e) {
            // Handle PayPal API exceptions
            return ResponseEntity.status(500).body("Payment creation failed: " + e.getMessage());
        }
    }

    @PostMapping("/executePayment")
    public ResponseEntity<String> executePayment(@RequestParam String paymentId, @RequestParam String payerId) {
        try {
            Payment payment = payPalService.executePayment(paymentId, payerId);
            // Here, you can handle the payment execution response as needed, log it, or return it to the client.
            return ResponseEntity.ok(payment.toJSON());
        } catch (PayPalRESTException e) {
            // Handle PayPal API exceptions
            return ResponseEntity.status(500).body("Payment execution failed: " + e.getMessage());
        }
    }
}




