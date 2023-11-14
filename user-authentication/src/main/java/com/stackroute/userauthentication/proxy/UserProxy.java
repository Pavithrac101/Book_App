package com.stackroute.userauthentication.proxy;

import com.stackroute.userauthentication.domain.UserDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
@FeignClient(name ="user-service")

public interface UserProxy {
    @PostMapping("/api/v1/adduser")
    public ResponseEntity sendUserDtoToProductApp(@RequestBody UserDto userDto);
}
