// package com.depoisdosim.depoisdosim.models;

// import java.util.ArrayList;
// import java.util.List;

// import com.fasterxml.jackson.annotation.JsonIgnore;
// import com.fasterxml.jackson.annotation.JsonProperty;

// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
// import jakarta.persistence.OneToMany;
// import jakarta.persistence.Table;
// import jakarta.validation.constraints.Email;
// import jakarta.validation.constraints.NotBlank;
// import jakarta.validation.constraints.Size;
// import lombok.AllArgsConstructor;
// import lombok.EqualsAndHashCode;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// @Entity
// @Table(name = Supplier.TABLE_NAME)
// @AllArgsConstructor
// @NoArgsConstructor
// @Getter
// @Setter
// @EqualsAndHashCode
// public class Supplier {
//     private static final String TABLE_NAME = "supplier";

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     @Column(name = "id", unique = true)
//     private Long id;

//     @Column(name = "username", length = 100, nullable = false, unique = true)
//     @NotBlank
//     @Size(min = 2, max = 100)
//     private String username;

//     @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
//     @Column(name = "password", length = 60, nullable = false)
//     @NotBlank
//     @Size(min = 8, max = 60)
//     private String password;

//     @Email
//     @Column(name = "email", length = 100, nullable = false, unique = true)
//     @NotBlank
//     @Size(min = 2, max = 100)
//     private String email;

//     @ManyToOne
//     @JoinColumn(name = "wedding_id", nullable = true)
//     private Wedding wedding;

//     @JsonIgnore
//     @OneToMany(mappedBy = "supplier")
//     private List<Task> tasks = new ArrayList<Task>();
// }
