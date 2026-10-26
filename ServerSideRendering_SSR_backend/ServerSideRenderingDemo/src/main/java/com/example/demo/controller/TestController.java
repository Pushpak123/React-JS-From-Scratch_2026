package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/test")
public class TestController {

    @GetMapping("/t1")
    public String test1()
    {
        System.out.println("i am from test1");
        return "hello java world";
    }
}
