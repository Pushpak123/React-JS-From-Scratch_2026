package com.example.demo.controller;

import com.example.demo.entity.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("test")
public class TestController {

    @GetMapping("t1")
    public String test1()
    {
        System.out.println("i am from test1");
        return "hello java world";
    }

    @GetMapping("t2")
    public String test2()
    {
        System.out.println("i am from test2");
        return "hello java world";
    }

    @GetMapping("t3")
    public Test test3()
    {
        System.out.println("i am from test3");
        Test obj=new Test();
        obj.setMessage("hello java world");
        return obj;
    }

    @GetMapping("t4")
    public String[] test4()
    {
        System.out.println("i am from test4");
        String names[] = {"ram","shyam","test"};
        return names;

    }

    @GetMapping("t5")
    public Test1 test5()
    {
        System.out.println("i am from test5");
        Test1 obj=new Test1();
        String names[] = {"ram","shyam","test"};
        obj.setNames(names);
        return obj;
    }

    @GetMapping("t6")
    public Test2 test6()
    {
        System.out.println("i am from test6");
        Test2 obj=new Test2();
        List<Integer>list=new ArrayList<>();
        list.add(100);
        list.add(200);
        list.add(400);
        list.add(600);
        obj.setList(list);
        return obj;
    }

    @GetMapping("t7")
    public Test3 test7()
    {
        System.out.println("i am from test7");
        Test3 obj=new Test3();
        Map<String,String>map=new HashMap<>();
        map.put("ug", "B.Tech");
        map.put("pg", "M.Tech");
        obj.setEducations(map);
        return obj;
    }

    @GetMapping("t8")
    public Person test8()
    {
        System.out.println("i am from test8");
        Person p1=new Person();
        p1.setFirstName("test");
        p1.setLastName("demo");
        p1.setAge(39);
        return p1;
    }

    @GetMapping("t9")
    public Family test9(){
        System.out.println("from test9");
        Person p1 = new Person();
        p1.setFirstName("abc");
        p1.setLastName("xyz");
        p1.setAge(22);

        Person p2 = new Person();
        p2.setFirstName("test1");
        p2.setLastName("hello");
        p2.setAge(24);

        Person p3 = new Person();
        p3.setFirstName("ramu");
        p3.setLastName("rao");
        p3.setAge(23);

        Person [] persons ={p1,p2,p3};
        Family obj=new Family();
        obj.setMembers(persons);
        return obj;
    }

    @GetMapping("t10")
    public SimpleFamily test10()
    {
        System.out.println("i am from test10");
        Person p1=new Person();
        p1.setFirstName("abc");
        p1.setLastName("xyz");
        p1.setAge(22);

        Person p2 = new Person();
        p2.setFirstName("test1");
        p2.setLastName("hello");
        p2.setAge(24);

        Person p3 = new Person();
        p3.setFirstName("ramu");
        p3.setLastName("rao");
        p3.setAge(23);

        Map<String,Person>map=new HashMap<>();
        map.put("husband",p1);
        map.put("wife",p2);
        map.put("child",p3);

        SimpleFamily obj=new SimpleFamily();
        obj.setMembers(map);
        return obj;
    }

    @GetMapping("t11")
    public Community test11()
    {
        System.out.println("i am from test11");
        Map<String, String> map1 = new HashMap<String, String>();
        map1.put("firstName", "Ramu");
        map1.put("lastName", "Rao");
        map1.put("address", "BTM");

        Map<String, String> map2 = new HashMap<String, String>();
        map2.put("firstName", "Kumar");
        map2.put("lastName", "Rao");
        map2.put("address", "JP Nagar");

        Map<String, String> map3 = new HashMap<String, String>();
        map3.put("firstName", "Swathi");
        map3.put("lastName", "Kiran");
        map3.put("address", "Jaya Nagar");

        List<Map<String,String>>list=new ArrayList<>();
        list.add(map1);
        list.add(map2);
        list.add(map3);

        Community obj=new Community();
        obj.setPersons(list);
        return obj;

    }

    @PostMapping("t12")
    public Person test12(@RequestBody Person person)
    {
        System.out.println(person.getFirstName());
        System.out.println(person.getLastName());
        System.out.println(person.getAge());
        return person;
    }

    @PostMapping("t13")
    public AppUser test13(@RequestBody AppUser appUser){
        System.out.println(appUser.getFirstName());
        System.out.println(appUser.getEmail());
        System.out.println(appUser.getPasssword());
        return appUser;
    }

    @PostMapping("t131")
    public String test131(@RequestParam String firstName,
                         @RequestParam String email,
                         @RequestParam String password) throws Exception
    {
        System.out.println(firstName);
        System.out.println(email);
        System.out.println(password);
        return "success";
    }
    @PostMapping("t132")
    public String test132(@RequestParam String firstName,
                          @RequestParam String email,
                          @RequestParam String password,
                          @RequestPart MultipartFile file) throws IOException {
        System.out.println(firstName);
        System.out.println(email);
        System.out.println(password);
        byte [] bytes=file.getBytes();
        FileOutputStream fos=new FileOutputStream(file.getOriginalFilename());
        BufferedOutputStream bos=new BufferedOutputStream(fos);
        bos.write(bytes);
        bos.flush();
        bos.close();
        return "success";
    }

    @PostMapping("t14")
    public String test14(@RequestPart Person person,
                         @RequestParam MultipartFile file) throws IOException {
        System.out.println("i am from test14");
        byte [] bytes = file.getBytes();
        FileOutputStream fos=new FileOutputStream(file.getOriginalFilename());
        BufferedOutputStream bos=new BufferedOutputStream(fos);
        bos.write(bytes);
        bos.flush();
        bos.close();
        System.out.println(person.getFirstName());
        System.out.println(person.getLastName());
        System.out.println(person.getAge());
        return "success";
    }




}

