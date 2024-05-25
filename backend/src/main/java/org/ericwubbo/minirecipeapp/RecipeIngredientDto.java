package org.ericwubbo.minirecipeapp;

public record RecipeIngredientDto(String name, double quantity, Unit unit, Long id) {
    public static RecipeIngredientDto from(RecipeIngredient recipeIngredient) {
        var ingredient = recipeIngredient.getIngredient();
        return new RecipeIngredientDto(ingredient.getName(), recipeIngredient.getQuantity(),
                recipeIngredient.getUnit(), ingredient.getId());
    }
}
