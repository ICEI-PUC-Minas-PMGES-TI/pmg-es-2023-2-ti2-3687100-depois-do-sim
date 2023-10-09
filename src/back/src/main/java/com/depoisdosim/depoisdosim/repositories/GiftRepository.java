package com.depoisdosim.depoisdosim.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.depoisdosim.depoisdosim.models.Gift;

@Repository
public interface GiftRepository extends JpaRepository<Gift, Long> {
    
}
