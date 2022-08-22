package com.example.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jobportal.model.Jobs;

@Repository
public interface JobsRepository extends JpaRepository<Jobs, Long> {

}
