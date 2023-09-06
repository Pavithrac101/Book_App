package com.stackroute.bookservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Data
@EqualsAndHashCode
public class RentalInfo {
    @MongoId
    private Date acquisitionDate;
}
