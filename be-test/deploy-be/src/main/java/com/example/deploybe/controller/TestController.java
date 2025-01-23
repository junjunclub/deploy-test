package com.example.deploybe.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {
    @GetMapping
    public String hello() {
        return "Hello World";
    }

    @GetMapping("/test")
    public String test() {
        return "Test Success!!!!";
    }
}
