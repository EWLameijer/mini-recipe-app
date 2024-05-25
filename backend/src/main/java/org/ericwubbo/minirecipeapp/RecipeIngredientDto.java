package org.ericwubbo.minirecipeapp;

public record RecipeIngredientDto(String name, double quantity, Unit unit) {
    public static RecipeIngredientDto from(RecipeIngredient recipeIngredient) {
        return new RecipeIngredientDto(recipeIngredient.getIngredient().getName(), recipeIngredient.getQuantity(),
                recipeIngredient.getUnit());
    }
}
