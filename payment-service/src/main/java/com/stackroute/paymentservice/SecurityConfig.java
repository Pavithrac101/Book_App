package com.stackroute.paymentservice;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/api/payments/createPayment").authenticated()
                .antMatchers("/api/payments/executePayment").authenticated()
                .anyRequest().permitAll()
                .and()
                .httpBasic()
                .and()
                .csrf().disable(); // Disable CSRF for simplicity; enable in production
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // Configure your authentication provider here (e.g., in-memory, database, LDAP)
        auth.inMemoryAuthentication()
                .withUser("username")
                .password("{noop}password") // Use {noop} for plain text password (not recommended for production)
                .roles("USER");
    }
}