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

import com.depoisdosim.depoisdosim.domain.others.SupplierDTO;
import com.depoisdosim.depoisdosim.models.Supplier;
import com.depoisdosim.depoisdosim.services.SupplierService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/supplier")
public class SupplierController {

    @Autowired
    private SupplierService supplierService;

    @GetMapping("/{id}")
    public ResponseEntity<Supplier> findById(@PathVariable Long id) {
        Supplier obj = this.supplierService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<SupplierDTO> getSupplierByEmail(@PathVariable String email) {
        Supplier supplier = supplierService.findByEmail(email);
        if (supplier != null) {
            SupplierDTO supplierDTO = new SupplierDTO();
            supplierDTO.setId(supplier.getId());
            supplierDTO.setUsername(supplier.getUsername());
            supplierDTO.setPassword(supplier.getPassword());
            supplierDTO.setEmail(supplier.getEmail());

            return ResponseEntity.ok(supplierDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Supplier>> findAllSuppliers() {
        List<Supplier> suppliers = supplierService.findAllFornecedores();
        return ResponseEntity.ok(suppliers);
    }


    @PostMapping
    public ResponseEntity<Void> create(@Valid @RequestBody Supplier obj) {
        this.supplierService.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody Supplier obj, @PathVariable Long id) {
        obj.setId(id);
        this.supplierService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.supplierService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
