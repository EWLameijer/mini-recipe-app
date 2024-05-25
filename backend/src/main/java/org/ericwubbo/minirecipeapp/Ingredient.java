package org.ericwubbo.minirecipeapp;

import jakarta.persistence.*;
import lombok.Generated;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Getter
public class Ingredient {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    public Ingredient(String name) {
        this.name = name;
    }
}
