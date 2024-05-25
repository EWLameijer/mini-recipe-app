package org.ericwubbo.minirecipeapp;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
@Getter
public class Recipe {
    @Id
    @GeneratedValue
    private Long id;

    private String title;

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL)
    private final Set<RecipeIngredient> ingredients = new HashSet<>();

    public Recipe(String title) {
        this.title = title;
    }

    public void addIngredients(Collection<RecipeIngredient> recipeIngredients) {
        ingredients.addAll(recipeIngredients);
    }
}
