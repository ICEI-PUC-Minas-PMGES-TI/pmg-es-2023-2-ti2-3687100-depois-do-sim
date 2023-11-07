package com.depoisdosim.depoisdosim.models;

import java.sql.Date;
import java.sql.Time;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = Task.TABLE_NAME)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class Task {
    public static final String TABLE_NAME = "task";

    @Id
    @Column(name = "id", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "date", length = 100, nullable = false)
    private Date date;

    @Column(name = "time", length = 100, nullable = false)
    private Time time;

    @Column(name = "description", length = 100, nullable = false)
    private String description;

    @Column(name = "done", nullable = false)
    private boolean done = false;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
