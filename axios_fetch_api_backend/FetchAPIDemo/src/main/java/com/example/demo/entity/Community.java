package com.example.demo.entity;

import java.util.List;
import java.util.Map;

public class Community {
    private List<Map<String,String>>persons;

    public List<Map<String, String>> getPersons() {
        return persons;
    }

    public void setPersons(List<Map<String, String>> persons) {
        this.persons = persons;
    }
}
