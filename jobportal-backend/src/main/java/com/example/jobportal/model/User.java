package com.example.jobportal.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "userdata")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "User_Name")
	private String username;
	
	@Column(name = "Email_Id")
	private String email;
	
	@Column(name = "Mobile_Number")
	private String mobile;
	
	@Column(name = "Password")
	private String password;
	
	
	public User() {}
	
	public User(String username, String email, String mobile, String password) {
		super();
		this.username = username;
		this.email = email;
		this.mobile = mobile;
		this.password = password;
	}
	//Getter and Setter Methods
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

	

}
