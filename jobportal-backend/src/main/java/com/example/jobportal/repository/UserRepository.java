package com.example.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jobportal.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
