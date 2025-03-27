package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api")  
public class UserController {
    @Autowired
    private final UserService userService;

   
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value="/getUser")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping(value = "/addUser")
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }
}
