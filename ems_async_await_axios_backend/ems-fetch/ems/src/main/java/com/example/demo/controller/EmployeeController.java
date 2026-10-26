package com.example.demo.controller;

import com.example.demo.dto.EmployeeDto;
import com.example.demo.entity.Employee;
import com.example.demo.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    private EmployeeService employeeService;

    @PostMapping()
    public ResponseEntity<Employee>save(@RequestBody Employee employee)
    {
        return ResponseEntity.ok(employeeService.save(employee));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee>update(@PathVariable int id,@RequestBody Employee employee)
    {
        return ResponseEntity.ok(employeeService.update(id,employee));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee>read(@PathVariable int id)
    {
        return ResponseEntity.ok(employeeService.read(id));
    }

    @GetMapping()
    public ResponseEntity<EmployeeDto>readAll()
    {
        return ResponseEntity.ok(employeeService.readAll());
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Employee>delete(@PathVariable int id)
    {
        return ResponseEntity.ok(employeeService.delete(id));
    }


}
