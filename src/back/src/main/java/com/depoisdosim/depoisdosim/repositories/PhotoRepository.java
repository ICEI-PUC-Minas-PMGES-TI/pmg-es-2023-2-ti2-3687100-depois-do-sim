package com.depoisdosim.depoisdosim.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.depoisdosim.depoisdosim.models.Photo;

@Repository
public interface PhotoRepository extends JpaRepository<Photo, Long> {

    @Query(value = "SELECT * FROM photo g WHERE g.photo_album_id = :id", nativeQuery = true)
    List<Photo> findAllByPhotoAlbumId(@Param("id") Long id);
    
}
