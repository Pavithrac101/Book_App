package com.stackroute.userservice;

import com.stackroute.userservice.filter.ReadWagonFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
@Configuration
//@EnableEurekaClient
public class UserServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}

   @Bean
   public FilterRegistrationBean jwtFilterBean() {
	   FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
	   filterRegistrationBean.setFilter(new ReadWagonFilter());
	   filterRegistrationBean.addUrlPatterns("/api/v1/user/userdata");
	   return filterRegistrationBean;
   }

}
