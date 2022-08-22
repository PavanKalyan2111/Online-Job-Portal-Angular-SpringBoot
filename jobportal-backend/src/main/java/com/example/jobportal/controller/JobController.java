package com.example.jobportal.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jobportal.exception.ResourceNotFoundException;
import com.example.jobportal.model.Jobs;
import com.example.jobportal.repository.JobsRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class JobController {
	
	@Autowired
	public JobsRepository jobsRepository;
	
	@GetMapping("/jobs")
	public List<Jobs> getAllJobs() {
		return this.jobsRepository.findAll();
	}
	
	@PostMapping("/job")
	public Jobs postJob(@RequestBody Jobs job) {
		return this.jobsRepository.save(job);
	}
	
	@GetMapping("/jobs/{id}")
	public ResponseEntity<Jobs> getJobById(@PathVariable Long id){
		
	Jobs job = jobsRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("job not found with job id :" + id));
	return ResponseEntity.ok(job);
		
	}
	
	@PutMapping("/updatejob/{id}")
	public ResponseEntity<Jobs> updateJob(@PathVariable Long id, @RequestBody Jobs jobs){
		
		Jobs job = jobsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("job not found with job id :" + id));
		
		job.setCompanyname(jobs.getCompanyname());
		job.setCriteria(jobs.getCriteria());
		job.setLocation(jobs.getLocation());
		job.setPosition(jobs.getPosition());
		job.setRole(jobs.getRole());
		job.setSalary(jobs.getSalary());
		job.setSkillsrequired(jobs.getSkillsrequired());
		
		Jobs jobupdated = jobsRepository.save(job);
	return ResponseEntity.ok(job);
		
	}
	
	@DeleteMapping("/deletejob/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteJob(@PathVariable Long id){
		
		Jobs job = jobsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("job not found with job id :" + id));
	 jobsRepository.delete(job);
	 Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
