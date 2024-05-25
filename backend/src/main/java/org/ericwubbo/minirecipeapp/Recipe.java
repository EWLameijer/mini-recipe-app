package org.ericwubbo.minirecipeapp;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
public class Recipe {
    @Id
    @GeneratedValue
    private Long id;

    private String title;
}
