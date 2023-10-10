package com.depoisdosim.depoisdosim.models;

import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = User.TABLE_NAME)
public class User {
    public interface CreateUser {}
    public interface UpdateUser {}

    public static final String TABLE_NAME = "user";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Long id;

    @Column(name = "username", length = 100, nullable = false, unique = true)
    @NotBlank(groups = CreateUser.class)
    @Size(groups = CreateUser.class, min = 2, max = 100)
    private String username;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(name = "password", length = 60, nullable = false)
    @NotBlank(groups = {CreateUser.class, UpdateUser.class})
    @Size(groups = {CreateUser.class, UpdateUser.class}, min = 8, max = 60)
    private String password;

    @ManyToOne
    @JoinColumn(name = "wedding_id", nullable = true)
    private Wedding wedding;

    public User() {
    }

    public User(Long id, String username, String password, Wedding wedding) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.wedding = wedding;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Wedding getWedding() {
        return this.wedding;
    }

    public void setWedding(Wedding wedding) {
        this.wedding = wedding;
    }

    public User id(Long id) {
        setId(id);
        return this;
    }

    public User username(String username) {
        setUsername(username);
        return this;
    }

    public User password(String password) {
        setPassword(password);
        return this;
    }

    public User wedding(Wedding wedding) {
        setWedding(wedding);
        return this;
    }
    
    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof User)) {
            return false;
        }
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(username, user.username) && Objects.equals(password, user.password) && Objects.equals(wedding, user.wedding);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, password, wedding);
    }

}



    // HashCode and Equals
    // public boolean equals(Object obj) {
    //     if(obj == this) 
    //         return true;
    //     if(obj == null) 
    //         return false;
    //     if(!(obj instanceof User)) 
    //         return false;
    //     User other = (User) obj;

    //     if(this.id == null)
    //         if(other.id != null) 
    //             return false;
    //         else if(!this.id.equals(other.id)) 
    //             return false;
    //     return Objects.equals(this.id, other.id) && Objects.equals(this.username, other.username) && Objects.equals(this.password, other.password);
    // }

    // @Override
    // public int hashCode() {
    //     final int prime = 31;
    //     int result = 1;
    //     result = (prime * result) + ((this.id == null) ? 0 : this.id.hashCode());
    //     return result;
    // }