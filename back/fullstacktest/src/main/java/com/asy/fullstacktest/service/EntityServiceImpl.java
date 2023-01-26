package com.asy.fullstacktest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asy.fullstacktest.dao.UserDAO;
import com.asy.fullstacktest.dao.UserTypeDAO;
import com.asy.fullstacktest.model.User;
import com.asy.fullstacktest.model.UserType;

import jakarta.transaction.Transactional;

@Service
public class EntityServiceImpl implements EntityService{
    
    private final UserDAO userDAO;
    private final UserTypeDAO userTypeDAO;
    
    @Autowired
    public EntityServiceImpl(UserDAO userDAO, UserTypeDAO userTypeDAO) {
        this.userDAO = userDAO;
        this.userTypeDAO = userTypeDAO;
    }
    
    //utiliser userdao.fonctiondao
    @Transactional
    @Override
    public User findByEmail(String email) {
        return userDAO.findByEmail(email);
    }
    
    @Transactional
    @Override
    public User findByName(String name) {
        return userDAO.findByName(name);
    }
    
    @Transactional
    @Override
    public User findByFirstName(String firstName) {
        return userDAO.findByFirstName(firstName);
    }
    
    @Transactional
    @Override
    public User findByType(UserType userType) {
        return userDAO.findByType(userType);
    }
    
    @Transactional
    @Override
    public User save(User user) {
        return userDAO.save(user);
    }
    
    @Transactional
    @Override
    public void delete(User user) {
        userDAO.delete(user);
    }
    
    @Transactional
    @Override
    public void deleteById(int id) {
        userDAO.deleteById(id);
    }
    
    @Transactional
    @Override
    public User findById(int id) {
        return userDAO.findById(id).get();
    }
    
    @Transactional
    @Override
    public Iterable<User> findAll() {
        return userDAO.findAll();
    }
    
    @Transactional
    @Override
    public long count() {
        return userDAO.count();
    }
    
    @Transactional
    @Override
    public boolean existsById(int id) {
        return userDAO.existsById(id);
    }
    
    @Override
    public List<UserType> findAllUserTypes() {
        return userTypeDAO.findAll();
    }
    
    @Override
    public UserType save(UserType type) {
        return userTypeDAO.save(type);
    }
    
    @Override
    public void delete(UserType type) {
        userTypeDAO.delete(type); 
    }
    
    @Override
    public UserType findTypeByName(String name) {
        return userTypeDAO.findByName(name);
    }
    
    @Override
    public void update(int id, User user) {
        Optional<User> oldUser = userDAO.findById(id);
        if(oldUser.isPresent()) {
            User u = oldUser.get();
            u.setFirstName(user.getFirstName());
            u.setName(user.getName());
            u.setEmail(user.getEmail());
            u.setName(user.getName());
            u.setType(user.getType());
            userDAO.save(u);
        }
        
    }
    
    @Override
    public void update(String name, UserType type) {
        UserType oldType = userTypeDAO.findByName(name);
        UserType newType = new UserType();
        newType.setDescription(type.getDescription());
        newType.setName(type.getName());

        userTypeDAO.save(newType);
        List<User> users = userDAO.findAllByType(oldType);
        for(User u : users) {
            u.setType(newType);
            userDAO.save(u);
        }
        userTypeDAO.delete(oldType);
    }

    


//To create a new record with the updated primary key and related data, you can follow these steps:

// Create a new object with the updated primary key and related data.
// Persist the new object to the database.
// Retrieve all the related records of the old object.
// Update the foreign key of the related records to point to the new object.
// Delete the old object from the database.
    
}

