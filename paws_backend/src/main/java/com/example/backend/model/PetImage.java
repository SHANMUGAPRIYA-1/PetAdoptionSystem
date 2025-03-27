package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "pet_images")
public class PetImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Lob
    @Column(name = "image_data", columnDefinition = "LONGBLOB", nullable = false)  // Maps Java field to DB column
    private byte[] imageData;

    @ManyToOne
    @JoinColumn(name = "pet_id", nullable = false)
    private PetEntity pet;
}
