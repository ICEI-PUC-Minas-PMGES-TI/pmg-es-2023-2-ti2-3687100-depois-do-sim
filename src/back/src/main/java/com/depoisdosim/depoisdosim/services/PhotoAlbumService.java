package com.depoisdosim.depoisdosim.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.depoisdosim.depoisdosim.models.PhotoAlbum;
import com.depoisdosim.depoisdosim.repositories.PhotoAlbumRepository;

@Service
public class PhotoAlbumService {
    
    @Autowired
    private PhotoAlbumRepository photoAlbumRepository;

    public PhotoAlbum findById(Long id) {
        Optional<PhotoAlbum> photo_album = this.photoAlbumRepository.findById(id);
        return PhotoAlbum.orElseThrow(() -> new RuntimeException("Foto não encontrada! Id: " + id + ", Tipo: " + PhotoAlbum.class.getName()));
    }

    public List<PhotoAlbum> findAllByWeddingId(Long weddingId) {
        List<PhotoAlbum> photo_album = this.photoAlbumRepository.findAllByWeddingId(weddingId);
        return photo_album;
    }

    @Transactional
    public PhotoAlbum create(PhotoAlbum obj) {
        obj.setId(null);
        obj = this.photoAlbumRepository.save(obj);
        return obj;
    }

    @Transactional
    public PhotoAlbum update(PhotoAlbum obj) {
        PhotoAlbum newObj = this.findById(obj.getId());
        newObj.setName(obj.getName());    
        return this.photoAlbumRepository.save(newObj);
    }

    public void delete(Long id) {
        this.findById(id);
        try {
            this.photoAlbumRepository.deleteById(id);
        } catch(Exception e) {
            throw new RuntimeException("Não é possível excluir uma foto que está sendo utilizada em um casamento!");
        }
    }

}
