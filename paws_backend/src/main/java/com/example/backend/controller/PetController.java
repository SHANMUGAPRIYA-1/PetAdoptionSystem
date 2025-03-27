package com.example.backend.controller;

import com.example.backend.model.PetEntity;
import com.example.backend.service.PetService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/pets")  
public class PetController {

    private final PetService petService;

    public PetController(PetService petService) {
        this.petService = petService;
    }

    @GetMapping
    public List<PetEntity> getAllPets() {
        return petService.getAllPets();
    }

    @PostMapping
    public PetEntity addPet(@RequestBody PetEntity pet) {
        return petService.savePet(pet);
    }

    @PostMapping("/{petId}/uploadImage")
    public ResponseEntity<String> uploadPetImage(@PathVariable Integer petId,
                                                 @RequestParam("file") MultipartFile file) {
        try {
            petService.savePetImage(petId, file);
            return ResponseEntity.ok("Image uploaded successfully");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error uploading image: " + e.getMessage());
        }
    }

    @GetMapping("/image/{imageId}")
    public ResponseEntity<byte[]> getPetImage(@PathVariable Integer imageId) {
        byte[] imageData = petService.getPetImage(imageId);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);  // Change based on image type

        return new ResponseEntity<>(imageData, headers, HttpStatus.OK);
    }
}
