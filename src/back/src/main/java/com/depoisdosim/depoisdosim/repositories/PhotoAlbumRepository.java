package com.depoisdosim.depoisdosim.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.depoisdosim.depoisdosim.models.PhotoAlbum;

@Repository
public interface PhotoAlbumRepository extends JpaRepository<PhotoAlbum, Long> {
    
    @Query(value = "SELECT * FROM gift g WHERE g.wedding_id = :id", nativeQuery = true)
    List<PhotoAlbum> findAllByWeddingId(@Param("id") Long id);

}