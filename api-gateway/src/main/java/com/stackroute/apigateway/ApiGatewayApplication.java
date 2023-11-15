package com.stackroute.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);

//	@Bean
//	public RouteLocator myRoutes(RouteLocatorBuilder routeLocatorBuilder){
//		System.out.println("api gateway started");
//		return routeLocatorBuilder.routes()
//				.route(p->p.path("/api/v2/**")
//						.uri("http://localhost:5555/"))
//				.route(p->p.path("/api/v1/**")
//						.uri("http://localhost:8081/"))
//				.route(predicateSpec -> predicateSpec.path("/api/auth/v1/**")
//						.uri("http://localhost:8085/"))
//				.build();
	}
	}

