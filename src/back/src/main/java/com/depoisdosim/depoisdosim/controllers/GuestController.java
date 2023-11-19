package com.depoisdosim.depoisdosim.controllers;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

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

import com.depoisdosim.depoisdosim.domain.others.GuestDTO;
import com.depoisdosim.depoisdosim.models.Guest;
import com.depoisdosim.depoisdosim.services.GuestService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/guest")
public class GuestController {
    
    @Autowired
    private GuestService guestService;

    @GetMapping("/{id}")
    public ResponseEntity<Guest> findById(@PathVariable Long id) {
        Guest obj = this.guestService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping("/wedding/{weddingId}")
    public ResponseEntity<List<GuestDTO>> findAllByWeddingId(@PathVariable Long weddingId) {
        List<Guest> guests = this.guestService.findAllByWeddingId(weddingId);

        List<GuestDTO> guestDTOs = guests.stream()
                .map(guest -> {
                    GuestDTO dto = new GuestDTO();
                    dto.setId(guest.getId());
                    dto.setName(guest.getName());
                    dto.setEmail(guest.getEmail());
                    dto.setNumPeople(guest.getNumPeople());
                    dto.setNamePeople(guest.getNamePeople());
                    dto.setWeddingId(guest.getWedding().getId());
                    return dto;
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok().body(guestDTOs);
    }

    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody Guest obj) {
        this.guestService.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody Guest obj, @PathVariable Long id) {
        obj.setId(id);
        this.guestService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.guestService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
