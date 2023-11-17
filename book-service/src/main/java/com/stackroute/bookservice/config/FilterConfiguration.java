package com.stackroute.bookservice.config;

import com.stackroute.bookservice.filter.BookFliter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfiguration {
    @Bean
    public FilterRegistrationBean filterUrl()
    {
        System.out.println("created filter registration");
        FilterRegistrationBean filterRegistrationBean=new FilterRegistrationBean<>();

        //step 1 : location of filter
        filterRegistrationBean.setFilter(new BookFliter());
        //step 2: intercepted url on which filter has to be applied
        filterRegistrationBean.addUrlPatterns("/api/v2/sellBook");
        return filterRegistrationBean;
    }
}
