package com.asy.fullstacktest.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asy.fullstacktest.model.User;
import com.asy.fullstacktest.model.UserType;

@Repository
public interface UserDAO extends JpaRepository<User, Integer>{
    User findByEmail(String email);
    User findByName(String name);
    User findByFirstName(String firstName);
    List<User> findAllByType(UserType type);
    User findByType(UserType userType);
}


