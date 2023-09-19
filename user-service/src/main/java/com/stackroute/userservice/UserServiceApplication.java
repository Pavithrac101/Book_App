package com.stackroute.userservice;

import com.stackroute.userservice.filter.ReadWagonFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@Configuration
public class UserServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}

   @Bean
   public FilterRegistrationBean jwtFilterBean() {
	   FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
	   filterRegistrationBean.setFilter(new ReadWagonFilter());
	   filterRegistrationBean.addUrlPatterns("/api/v2/user");
	   return filterRegistrationBean;
   }
}
