package com.example.demo.entity;

import java.util.Map;

public class SimpleFamily {
    private Map<String,Person>members;

    public Map<String, Person> getMembers() {
        return members;
    }

    public void setMembers(Map<String, Person> members) {
        this.members = members;
    }
}
