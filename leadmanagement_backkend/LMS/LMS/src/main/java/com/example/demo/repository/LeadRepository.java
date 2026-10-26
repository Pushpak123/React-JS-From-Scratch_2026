package com.example.demo.repository;

import com.example.demo.entity.Lead;
import org.springframework.data.repository.CrudRepository;

public interface LeadRepository extends CrudRepository<Lead,Integer> {
}
