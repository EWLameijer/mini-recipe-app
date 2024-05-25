package org.ericwubbo.minirecipeapp;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Getter
public class Recipe {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    public Recipe(String title) {
        this.title = title;
    }
}
