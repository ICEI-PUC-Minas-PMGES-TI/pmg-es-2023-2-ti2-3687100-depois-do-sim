package com.depoisdosim.depoisdosim.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.depoisdosim.depoisdosim.models.Guest;
import com.depoisdosim.depoisdosim.models.Photo;
import com.depoisdosim.depoisdosim.repositories.PhotoRepository;

@Service
public class PhotoService {

    @Autowired
    private PhotoRepository photoRepository;

    public Photo findById(Long id) {
        Optional<Photo> photo = this.photoRepository.findById(id);
        return photo.orElseThrow(() -> new RuntimeException("Foto não encontrada! Id: " + id + ", Tipo: " + Photo.class.getName()));
    }

    public List<Photo> findAllByPhotoAlbumId(Long weddingId) {
        List<Photo> photos = this.photoRepository.findAllByPhotoAlbumId(weddingId);
        return photos;
    }

    @Transactional
    public Photo create(Photo obj) {
        obj.setId(null);
        obj = this.photoRepository.save(obj);
        return obj;
    }

    @Transactional
    public Photo update(Photo obj) {
        Photo newObj = this.findById(obj.getId());
        newObj.setLink(obj.getLink());
        return this.photoRepository.save(newObj);
    }
    
    public void delete(Long id) {
        this.findById(id);
        try {
            this.photoRepository.deleteById(id);
        } catch(Exception e) {
            throw new RuntimeException("Não é possível excluir a foto!");
        }
    }
}
