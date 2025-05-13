package com.portfolio.portfolio;

import jakarta.persistence.*;

@Entity
        @Table(name = "users")
public class User {

    @Id  // 기본키
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동 증가
    private Long id;

    private String name;
    private String major;

    // 기본 생성자 (필수)
    public User() {}

    // 생성자
    public User(String name, String major) {
        this.name = name;
        this.major = major;
    }

    // Getter, Setter
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }
}

