package com.depoisdosim.depoisdosim.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Objects;

@Entity
@Table(name = Wedding.TABLE_NAME)
public class Wedding {
    private static final String TABLE_NAME = "wedding";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Long id;

    @NotBlank
    @Size(min = 2, max = 100)
    @Column(name = "name", length = 100, nullable = false)
    private String name;

    // @Column(name = "users", nullable = false)
    @OneToMany(mappedBy = "wedding")
    private List<User> users = new ArrayList<User>();

    // @Column(name = "guests")
    @OneToMany(mappedBy = "wedding")
    private List<Guest> guests = new ArrayList<Guest>();

    // @Column(name = "gifts")
    @OneToMany(mappedBy = "wedding")
    private List<Gift> gifts = new ArrayList<Gift>();

    public Wedding() {
    }

    public Wedding(Long id, String name, List<User> users, List<Guest> guests, List<Gift> gifts) {
        this.id = id;
        this.name = name;
        this.users = users;
        this.guests = guests;
        this.gifts = gifts;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public List<User> getUsers() {
        return this.users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public List<Guest> getGuests() {
        return this.guests;
    }

    public void setGuests(List<Guest> guests) {
        this.guests = guests;
    }

    public List<Gift> getGifts() {
        return this.gifts;
    }

    public void setGifts(List<Gift> gifts) {
        this.gifts = gifts;
    }

    public Wedding id(Long id) {
        setId(id);
        return this;
    }

    public Wedding users(List<User> users) {
        setUsers(users);
        return this;
    }

    public Wedding guests(List<Guest> guests) {
        setGuests(guests);
        return this;
    }

    public Wedding gifts(List<Gift> gifts) {
        setGifts(gifts);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Wedding)) {
            return false;
        }
        Wedding wedding = (Wedding) o;
        return Objects.equals(id, wedding.id) && Objects.equals(guests, wedding.guests) && Objects.equals(gifts, wedding.gifts);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, guests, gifts);
    }

    public Wedding name(String name) {
        setName(name);
        return this;
    }

}
