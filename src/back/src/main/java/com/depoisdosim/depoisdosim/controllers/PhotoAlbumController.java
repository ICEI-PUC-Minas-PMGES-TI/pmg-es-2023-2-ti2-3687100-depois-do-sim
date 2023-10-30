package com.depoisdosim.depoisdosim.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.depoisdosim.depoisdosim.models.PhotoAlbum;
import com.depoisdosim.depoisdosim.models.PhotoAlbum.CreatePhotoAlbum;
import com.depoisdosim.depoisdosim.services.PhotoAlbumService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/photo_album")
@Validated
public class PhotoAlbumController {
    
    @Autowired
    private PhotoAlbumService photoAlbumService;

    @GetMapping("/{id}")
    public ResponseEntity<PhotoAlbum> findById(@PathVariable Long id) {
        PhotoAlbum obj = this.photoAlbumService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping("/wedding/{weddingId}")
    public ResponseEntity<List<PhotoAlbum>> findAllByWeddingId(@PathVariable Long weddingId) {
        List<PhotoAlbum> objs = this.photoAlbumService.findAllByWeddingId(weddingId);
        return ResponseEntity.ok().body(objs);
    }

    @PostMapping
    @Validated(CreatePhotoAlbum.class)
    public ResponseEntity<Void> create(@Valid @RequestBody PhotoAlbum obj) {
        this.photoAlbumService.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    @Validated(CreatePhotoAlbum.class)
    public ResponseEntity<Void> update(@Valid @RequestBody PhotoAlbum obj, @PathVariable Long id) {
        obj.setId(id);
        this.photoAlbumService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.photoAlbumService.delete(id);
        return ResponseEntity.noContent().build();
    }
}