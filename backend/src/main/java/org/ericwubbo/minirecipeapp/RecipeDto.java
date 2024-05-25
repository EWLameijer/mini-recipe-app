package org.ericwubbo.minirecipeapp;

import java.util.List;

public record RecipeDto(Long id, String title, List<RecipeIngredientDto> ingredients) {
    public static RecipeDto from(Recipe recipe) {
        var ingredients = recipe.getIngredients().stream().map(RecipeIngredientDto::from).toList();
        return new RecipeDto(recipe.getId(), recipe.getTitle(), ingredients);
    }
}
