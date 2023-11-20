// package com.depoisdosim.depoisdosim.services;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import org.springframework.transaction.annotation.Transactional;

// import com.depoisdosim.depoisdosim.models.Supplier;
// import com.depoisdosim.depoisdosim.repositories.SupplierRepository;

// @Service
// public class SupplierService {

//     @Autowired
//     private SupplierRepository supplierRepository;

//     public Supplier findById(Long id) {
//         Optional<Supplier> supplier = this.supplierRepository.findById(id);
//         return supplier.orElseThrow(() -> new RuntimeException("Fornecedor não encontrado! Id: " + id + ", Tipo: " + Supplier.class.getName()));
//     }

//     public Supplier findByEmail(String email) {
//         Optional<Supplier> supplier = supplierRepository.findByEmail(email);
//         return supplier.orElseThrow(() -> new RuntimeException("Fornecedor não encontrado! Email: " + email + ", Tipo: " + Supplier.class.getName()));
//     }

//     public List<Supplier> findAllFornecedores() {
//         return supplierRepository.findAll();
//     }

//     @Transactional
//     public Supplier create(Supplier obj) {
//         obj.setId(null);
//         obj = this.supplierRepository.save(obj);
//         return obj;
//     }

//     @Transactional
//     public Supplier update(Supplier obj) {
//         Supplier newObj = this.findById(obj.getId());
//         newObj.setUsername(obj.getUsername());
//         newObj.setEmail(obj.getEmail());
//         return this.supplierRepository.save(newObj);
//     }

//     public void delete(Long id) {
//         this.findById(id);
//         try {
//             this.supplierRepository.deleteById(id);
//         } catch(Exception e) {
//             throw new RuntimeException("Não é possível excluir o fornecedor!");
//         }
//     }
// }
