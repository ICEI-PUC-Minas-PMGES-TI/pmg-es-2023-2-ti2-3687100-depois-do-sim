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
import java.util.Objects;

@Entity
@Table(name = PhotoAlbum.TABLE_NAME)
public class PhotoAlbum {
    public interface CreatePhotoAlbum {}
    public interface UpdatePhotoAlbum {}

    public static final String TABLE_NAME = "photo-album";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Long id;

    @Column(name = "name", length = 100, nullable = false, unique = false)
    @NotBlank(groups = {CreatePhotoAlbum.class, UpdatePhotoAlbum.class})
    @Size(groups = {CreatePhotoAlbum.class, UpdatePhotoAlbum.class}, min = 2, max = 100)
    private String name;

    // @Column(name = "description", length = 255, nullable = false)
    // @NotBlank(groups = {CreateGift.class, UpdateGift.class})
    // @Size(groups = {CreateGift.class, UpdateGift.class}, min = 1, max = 255)
    // private String description;

    // @Column(name = "available")
    // private Boolean available = true;

    // @Column(name = "price", nullable = false)
    // @DecimalMin(groups = {CreateGift.class, UpdateGift.class}, value = "0.0")
    // private Double price;

    // @Column(name = "image", nullable = false)
    // private String image;

    @ManyToOne
    @JoinColumn(name = "wedding_id", nullable = false)
    private Wedding wedding;


    public PhotoAlbum() {
    }

    public PhotoAlbum(Long id, String name, Wedding wedding) {
        this.id = id;
        this.name = name;
        this.wedding = wedding;
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


    public Wedding getWedding() {
        return this.wedding;
    }

    public void setWedding(Wedding wedding) {
        this.wedding = wedding;
    }


    public PhotoAlbum id(Long id) {
        setId(id);
        return this;
    }

    public PhotoAlbum name(String name) {
        setName(name);
        return this;
    }

    public PhotoAlbum wedding(Wedding wedding) {
        setWedding(wedding);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof PhotoAlbum)) {
            return false;
        }
        PhotoAlbum photo_album = (PhotoAlbum) o;
        return Objects.equals(id, photo_album.id) && Objects.equals(name, photo_album.name) && Objects.equals(wedding, photo_album.wedding);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, wedding);
    }
    
}