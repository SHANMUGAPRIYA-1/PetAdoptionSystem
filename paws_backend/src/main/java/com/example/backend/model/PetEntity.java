package com.example.backend.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "pets")
public class PetEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer petId;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(length = 100)
    private String breed;

    private Integer age;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Gender gender;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Species species;

    @Lob
    private String description;

    @Column(nullable = false)
    private Double price;

    @Enumerated(EnumType.STRING)
    private Size size;

    private String color;

    private String address;

    @Column(name = "vacination_details")
    private String vaccinationDetails;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;  

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @OneToMany(mappedBy = "pet", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<PetImage> images;  // Relationship with PetImage

    // Enums
    public enum Gender { Male, Female }
    public enum Species { Dog, Cat, Bird, Other }
    public enum Size { small, medium, large }
}

