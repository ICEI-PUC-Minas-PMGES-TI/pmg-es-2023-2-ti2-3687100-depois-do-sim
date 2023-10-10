package com.depoisdosim.depoisdosim.controllers;

import java.net.URI;

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

import com.depoisdosim.depoisdosim.models.Wedding;
import com.depoisdosim.depoisdosim.services.WeddingService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/wedding")    
public class WeddingController {
    
    @Autowired
    private WeddingService weddingService;

    @GetMapping("/{id}")
    public ResponseEntity<Wedding> findById(@PathVariable Long id) {
        Wedding obj = this.weddingService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody Wedding obj) {
        this.weddingService.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody Wedding obj, @PathVariable Long id) {
        obj.setId(id);
        this.weddingService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.weddingService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
