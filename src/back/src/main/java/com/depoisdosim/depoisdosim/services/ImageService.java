package com.depoisdosim.depoisdosim.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.depoisdosim.depoisdosim.models.Image;
import com.depoisdosim.depoisdosim.repositories.ImageRepository;

@Service
public class ImageService {
    
    @Autowired
    private ImageRepository imageRepository;

    @Transactional
    public Image create(Image obj) {
        obj.setId(null);
        obj = this.imageRepository.save(obj);
        return obj;
    }
}
