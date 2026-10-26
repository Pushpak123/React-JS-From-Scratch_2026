package com.example.demo.service;

import com.example.demo.dto.EmployeeDto;
import com.example.demo.entity.Employee;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class EmployeeService {
    private EmployeeRepository employeeRepository;

    public Employee save(Employee employee)
    {
        return employeeRepository.save(employee);
    }

    public Employee read(int id)
    {
//        Optional<Employee> optional = employeeRepository.findById(id);
//        if(optional.isPresent())
//        {
//            Employee employee=optional.get();
//            return employee;
//        }
//        return null;
        return employeeRepository.findById(id)
                .orElseThrow(() ->new ResourceNotFoundException("employee not exists with mention id:"+id));


    }

    public EmployeeDto readAll()
    {
        EmployeeDto employeeDto=new EmployeeDto();
        employeeDto.setList(employeeRepository.findAll());
        return employeeDto;
    }

    public Employee update(int id,Employee employee)
    {
        Employee existingEmployee=employeeRepository.findById(id)
                .orElseThrow(() ->new ResourceNotFoundException("employee not exists with mention id:"+id));
        existingEmployee.setFirstName(employee.getFirstName());
        existingEmployee.setLastName(employee.getLastName());
        existingEmployee.setAge(employee.getAge());
        existingEmployee.setEmail(employee.getEmail());

       return employeeRepository.save(existingEmployee);
    }

    public Employee delete(int id)
    {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Employee not found with id: " + id
                        ));
        employeeRepository.delete(employee);
        return employee;
    }

}
