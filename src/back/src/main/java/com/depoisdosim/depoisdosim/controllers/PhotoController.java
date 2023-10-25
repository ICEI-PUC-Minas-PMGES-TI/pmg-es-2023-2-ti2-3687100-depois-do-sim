package com.depoisdosim.depoisdosim.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.depoisdosim.depoisdosim.models.Guest;
import com.depoisdosim.depoisdosim.models.Photo;
import com.depoisdosim.depoisdosim.services.PhotoService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/photo")
public class PhotoController {

    @Autowired
    private PhotoService photoService;

    @GetMapping("/{id}")
    public ResponseEntity<Photo> findById(@PathVariable Long id) {
        Photo obj = this.photoService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping("/photo_album/{photoAlbumId}")
    public ResponseEntity<List<Photo>> findAllByPhotoAlbumId(@PathVariable Long photoAlbumId) {
        List<Photo> objs = this.photoService.findAllByPhotoAlbumId(photoAlbumId);
        return ResponseEntity.ok().body(objs);
    }

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody Photo obj) {
        this.photoService.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody Photo obj, @PathVariable Long id) {
        obj.setId(id);
        this.photoService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.photoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
