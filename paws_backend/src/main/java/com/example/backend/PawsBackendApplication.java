package com.example.backend;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EntityScan(basePackages = "com.example.backend.model")  
public class PawsBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(PawsBackendApplication.class, args);
    }
} 