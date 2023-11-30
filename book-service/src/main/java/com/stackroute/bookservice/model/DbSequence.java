package com.stackroute.bookservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

@AllArgsConstructor
@NoArgsConstructor
@Data
@EqualsAndHashCode
public class DbSequence {
    @MongoId
    private  String id;
    private int seqNo=11;
}
