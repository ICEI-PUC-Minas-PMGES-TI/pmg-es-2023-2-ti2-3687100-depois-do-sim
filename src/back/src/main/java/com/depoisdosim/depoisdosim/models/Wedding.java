package com.depoisdosim.depoisdosim.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = Wedding.TABLE_NAME)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class Wedding {

    public static final String TABLE_NAME = "wedding";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Long id;

    @NotBlank
    @Size(min = 2, max = 100)
    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "date", length = 100, nullable = false)
    private String date;

    @Column(name = "time", length = 100, nullable = false)
    private String time;

    @Column(name = "location", length = 100, nullable = false)
    private String local;

    @Column(name = "budget", nullable = false)
    private Long budget;

    // @OneToOne(mappedBy = "wedding")
    // private User user;

    @JsonIgnore
    @OneToMany(mappedBy = "wedding")
    private List<Guest> guests = new ArrayList<Guest>();

    @JsonIgnore
    @OneToMany(mappedBy = "wedding")
    private List<Gift> gifts = new ArrayList<Gift>();

    @JsonIgnore
    @OneToMany(mappedBy = "wedding")
    private List<Photo> photos = new ArrayList<Photo>();

    @JsonIgnore
    @OneToMany(mappedBy = "wedding")
    private List<GiftMessage> giftMessages = new ArrayList<GiftMessage>();

    @OneToOne
    @JoinColumn(name = "user_id", nullable = true)
    private User user = null;


    // @JsonIgnore
    // @OneToMany(mappedBy = "wedding")
    // private List<User> suppliers = new ArrayList<User>();


}
