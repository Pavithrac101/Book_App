package com.stackroute.paymentservice;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PayPalService {

    private final APIContext apiContext;

    public PayPalService(APIContext apiContext) {
        this.apiContext = apiContext;
    }

    @Value("${paypal.clientId}")
    private String clientId;

    @Value("${paypal.clientSecret}")
    private String clientSecret;

    public Payment createPayment(double total, String currency, String intent) throws PayPalRESTException {
        APIContext apiContext = new APIContext(clientId, clientSecret, "sandbox"); // Use "live" for production

        Amount amount = new Amount();
        amount.setCurrency(currency);
        amount.setTotal(String.format("%.2f", total));

        Transaction transaction = new Transaction();
        transaction.setAmount(amount);

        List<Transaction> transactions = new ArrayList<>();
        transactions.add(transaction);

        Payer payer = new Payer();
        payer.setPaymentMethod("paypal");

        Payment payment = new Payment();
        payment.setIntent(intent);
        payment.setPayer(payer);
        payment.setTransactions(transactions);

        RedirectUrls redirectUrls = new RedirectUrls();
        redirectUrls.setCancelUrl("YOUR_CANCEL_URL");
        redirectUrls.setReturnUrl("YOUR_RETURN_URL");
        payment.setRedirectUrls(redirectUrls);

        return payment.create(apiContext);
    }

    // Implement methods for handling payment execution, success, failure, etc.
}