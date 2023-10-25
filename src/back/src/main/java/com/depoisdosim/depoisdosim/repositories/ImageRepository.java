package com.depoisdosim.depoisdosim.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.depoisdosim.depoisdosim.models.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

}
