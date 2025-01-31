package com.example.deploybe.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api")
public class TestController {

    private static final Logger logger = LoggerFactory.getLogger(TestController.class);

    @GetMapping
    public String hello(HttpServletRequest request) {
        logger.info("HELLO Request URL: {}", request.getRequestURL());
        return "Hello World";
    }

    @GetMapping("/test")
    public String test(HttpServletRequest request) {
        logger.info("TEST Request URL: {}", request.getRequestURL());
        return "Test Success!!!!";
    }
}
