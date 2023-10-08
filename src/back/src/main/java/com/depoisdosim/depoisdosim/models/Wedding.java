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
import java.util.Objects;
// import java.util.Objects;

@Entity
@Table(name = Wedding.TABLE_NAME)
public class Wedding {
    private static final String TABLE_NAME = "wedding";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Long id;

    @OneToMany(mappedBy = "wedding")
    @Column(name = "users")
    private List<User> users = new ArrayList<User>();

    @OneToMany(mappedBy = "wedding")
    @Column(name = "guests")
    private List<Guest> guests = new ArrayList<Guest>();

    @OneToMany(mappedBy = "wedding")
    @Column(name = "gifts")
    private List<Gift> gifts = new ArrayList<Gift>();

    public Wedding() {
    }

    public Wedding(Long id, List<User> users, List<Guest> guests, List<Gift> gifts) {
        this.id = id;
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
        return Objects.equals(id, wedding.id) && Objects.equals(users, wedding.users) && Objects.equals(guests, wedding.guests) && Objects.equals(gifts, wedding.gifts);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, users, guests, gifts);
    }

}
