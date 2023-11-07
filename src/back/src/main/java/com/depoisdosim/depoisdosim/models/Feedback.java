package com.depoisdosim.depoisdosim.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = Feedback.TABLE_NAME)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class Feedback {
    public interface CreateFeedback {}
    public interface UpdateFeedback {}

    public static final String TABLE_NAME = "feedback";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Long id;

    @Column(name = "nome", length = 100, nullable = false)
    @NotBlank(groups = {CreateFeedback.class, UpdateFeedback.class})
    @Size(groups = {CreateFeedback.class, UpdateFeedback.class}, min = 2, max = 100)
    private String nome;

    @Column(name = "comentario", length = 2000, nullable = false)
    @NotBlank(groups = {CreateFeedback.class, UpdateFeedback.class})
    @Size(groups = {CreateFeedback.class, UpdateFeedback.class}, min = 1, max = 255)
    private String comentario;

    @Column(name = "avaliacao", nullable = false)
    @DecimalMin(groups = {CreateFeedback.class, UpdateFeedback.class}, value = "0.0")
    private Double avaliacao;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "supplier_id", nullable = false)
    private Supplier supplier;



}
