package com.depoisdosim.depoisdosim.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.depoisdosim.depoisdosim.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
}