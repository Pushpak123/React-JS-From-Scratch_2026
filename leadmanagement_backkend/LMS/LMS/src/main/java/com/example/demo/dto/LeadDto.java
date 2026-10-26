package com.example.demo.dto;

import com.example.demo.entity.Lead;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LeadDto {
    private Iterable<Lead>leads;

}
