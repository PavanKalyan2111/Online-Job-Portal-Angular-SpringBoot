package com.example.jobportal.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "JobsData")
public class Jobs {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "Job_Position")
	private String position;
	
	@Column(name = "Company_Name")
	private String companyname;
	
	@Column(name = "Job_Role")
	private String role;
	
	@Column(name = "Salary")
	private String salary;
	
	@Column(name = "Location")
	private String location;
	
	@Column(name ="Skills_Required")
	private String skillsrequired;
	
	@Column(name = "Job_Criteria")
	private String criteria;
	
	
	//default constructor
	public Jobs() {}
	
	//constructor
	public Jobs(String position, String companyname, String role, String salary, String location, String skillsrequired,
			String criteria) {
		super();
		this.position = position;
		this.companyname = companyname;
		this.role = role;
		this.salary = salary;
		this.location = location;
		this.skillsrequired = skillsrequired;
		this.criteria = criteria;
	}
	//Getters and Setters
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public String getCompanyname() {
		return companyname;
	}
	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getSkillsrequired() {
		return skillsrequired;
	}
	public void setSkillsrequired(String skillsrequired) {
		this.skillsrequired = skillsrequired;
	}
	public String getCriteria() {
		return criteria;
	}
	public void setCriteria(String criteria) {
		this.criteria = criteria;
	}
	
	
	

}
