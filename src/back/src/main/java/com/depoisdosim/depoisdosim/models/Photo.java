package com.depoisdosim.depoisdosim.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = Photo.TABLE_NAME)
public class Photo {
    
    public static final String TABLE_NAME = "photo";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Long id;

    @Column(name = "link", length = 400, nullable = false)
    private String link;

    @ManyToOne
    @JoinColumn(name = "photo_album_id", nullable = true)
    private PhotoAlbum photoAlbum;


    public Photo() {
    }

    public Photo(Long id, String link, PhotoAlbum photoAlbum) {
        this.id = id;
        this.link = link;
        this.photoAlbum = photoAlbum;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLink() {
        return this.link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public PhotoAlbum getPhotoAlbum() {
        return this.photoAlbum;
    }

    public void setPhotoAlbum(PhotoAlbum photoAlbum) {
        this.photoAlbum = photoAlbum;
    }

    public Photo id(Long id) {
        setId(id);
        return this;
    }

    public Photo link(String link) {
        setLink(link);
        return this;
    }

    public Photo photoAlbum(PhotoAlbum photoAlbum) {
        setPhotoAlbum(photoAlbum);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Photo)) {
            return false;
        }
        Photo photo = (Photo) o;
        return Objects.equals(id, photo.id) && Objects.equals(link, photo.link) && Objects.equals(photoAlbum, photo.photoAlbum);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, link, photoAlbum);
    }
    
}
