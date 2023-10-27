package com.depoisdosim.depoisdosim.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = PhotoAlbum.TABLE_NAME)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class PhotoAlbum {
    public interface CreatePhotoAlbum {}
    public interface UpdatePhotoAlbum {}

    public static final String TABLE_NAME = "photo_album";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Long id;

    @Column(name = "name", length = 100, nullable = false, unique = false)
    @NotBlank(groups = {CreatePhotoAlbum.class, UpdatePhotoAlbum.class})
    @Size(groups = {CreatePhotoAlbum.class, UpdatePhotoAlbum.class}, min = 2, max = 100)
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "photoAlbum")
    private List<Photo> Photos = new ArrayList<Photo>();

    @ManyToOne
    @JoinColumn(name = "wedding_id", nullable = false)
    private Wedding wedding;
}