package com.example.demo.controller;

import com.example.demo.dto.LeadDto;
import com.example.demo.entity.Lead;
import com.example.demo.service.LeadService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/leads")
@AllArgsConstructor
public class LeadController {
    private LeadService leadService;

    @PostMapping()
    public ResponseEntity<Lead>save(@RequestBody Lead lead)
    {
        return ResponseEntity.ok(leadService.save(lead));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Lead>update(@PathVariable int id,@RequestBody Lead lead)
    {
        return ResponseEntity.ok(leadService.update(id,lead));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Lead>read(@PathVariable int id)
    {
        return ResponseEntity.ok(leadService.read(id));
    }

    @GetMapping
    public ResponseEntity<LeadDto> readAll() {
        return ResponseEntity.ok(leadService.readAll());
    }
}
