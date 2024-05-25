package org.ericwubbo.minirecipeapp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Getter
public class RecipeIngredient {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Recipe recipe;

    @ManyToOne
    private Ingredient ingredient;

    private double quantity;

    private Unit unit;

    public RecipeIngredient(Recipe recipe, Ingredient ingredient, double quantity, Unit unit) {
        this.recipe = recipe;
        this.ingredient = ingredient;
        this.quantity = quantity;
        this.unit = unit;
    }
}
