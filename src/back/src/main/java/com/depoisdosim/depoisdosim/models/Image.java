package com.depoisdosim.depoisdosim.models;

import java.sql.Blob;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = Image.TABLE_NAME)
public class Image {

    public static final String TABLE_NAME = "image";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private Blob image;

    public Image() {
    }

    public Image(Long id, Blob image) {
        this.id = id;
        this.image = image;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Blob getImage() {
        return this.image;
    }

    public void setImage(Blob image) {
        this.image = image;
    }

    public Image id(Long id) {
        setId(id);
        return this;
    }

    public Image image(Blob image) {
        setImage(image);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Image)) {
            return false;
        }
        Image image = (Image) o;
        return Objects.equals(id, image.id) && Objects.equals(image, image.image);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, image);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", image='" + getImage() + "'" +
            "}";
    }

}
