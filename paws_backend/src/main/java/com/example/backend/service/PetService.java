package com.example.backend.service;

import com.example.backend.model.PetEntity;
import com.example.backend.model.PetImage;
import com.example.backend.repository.PetImageRepository;
import com.example.backend.repository.PetRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class PetService {

    private final PetRepository petRepository;
    private final PetImageRepository petImageRepository;

    public PetService(PetRepository petRepository, PetImageRepository petImageRepository) {
        this.petRepository = petRepository;
        this.petImageRepository = petImageRepository;
    }

    public List<PetEntity> getAllPets() {
        return petRepository.findAll();
    }

    public PetEntity savePet(PetEntity pet) {
        return petRepository.save(pet);
    }

    public PetImage savePetImage(Integer petId, MultipartFile file) throws IOException {
        Optional<PetEntity> petEntityOptional = petRepository.findById(petId);
        if (petEntityOptional.isEmpty()) {
            throw new RuntimeException("Pet not found");
        }

        PetImage petImage = new PetImage();
        petImage.setPet(petEntityOptional.get());
        petImage.setImageData(file.getBytes());  
        return petImageRepository.save(petImage);
    }

    public byte[] getPetImage(Integer imageId) {
        PetImage petImage = petImageRepository.findById(imageId)
                .orElseThrow(() -> new RuntimeException("Image not found"));
        return petImage.getImageData();
    }
}
