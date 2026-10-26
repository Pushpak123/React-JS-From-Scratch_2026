package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "leads")
public class Lead {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    public String name;
    private Long mobileNumber;
    private String email;
    private String status;//new, processing, rejected, closed
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "lead")
    private List<Interaction>interactions;
}
