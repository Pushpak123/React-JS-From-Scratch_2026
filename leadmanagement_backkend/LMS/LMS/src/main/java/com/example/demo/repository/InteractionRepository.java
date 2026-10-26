package com.example.demo.repository;

import com.example.demo.entity.Interaction;
import org.springframework.data.repository.CrudRepository;

public interface InteractionRepository extends CrudRepository<Interaction,Integer> {
}
