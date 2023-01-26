package com.asy.fullstacktest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.asy.fullstacktest.model.User;
import com.asy.fullstacktest.model.UserType;
import com.asy.fullstacktest.service.EntityService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EntityController {
    
    
    private final EntityService entityService;
    
    @Autowired
    public EntityController(EntityService userService) {
        this.entityService = userService;
    }

    @GetMapping("/users")
    
    public Iterable<User> getUsers() {
        return entityService.findAll();
    }

    @GetMapping("/types")
    
    public List<UserType> getTypes() {
        return entityService.findAllUserTypes();
    }

    @PostMapping("/userForm")
    
    public void saveUser(@RequestBody User user) {
        entityService.save(user);
    }

    @PostMapping("/typeForm")
    
    public void saveType(@RequestBody UserType type) {
        entityService.save(type);
    }

    @DeleteMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable int id){
        User toDelete = entityService.findById(id);
        entityService.delete(toDelete);
    }

    @DeleteMapping("/deleteType/{name}")
    public void deleteType(@PathVariable String name){
        UserType toDelete = entityService.findTypeByName(name);
        entityService.delete(toDelete);
    }

    @PutMapping("/updateUser/{id}")
    public void updateUser(@PathVariable int id, @RequestBody User user){        
        entityService.update(id, user);
    }

    @PutMapping("/updateType/{name}")
    public void updateType(@PathVariable String name, @RequestBody UserType type){        
        entityService.update(name, type);
    }
}


// TODO : FOR BEAN USAGE AND OTHER NEW SPRING STUFF