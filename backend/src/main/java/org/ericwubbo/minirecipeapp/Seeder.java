package org.ericwubbo.minirecipeapp;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class Seeder implements CommandLineRunner {
    private final RecipeRepository recipeRepository;

    private final IngredientRepository ingredientRepository;

    @Override
    public void run(String... args) throws Exception {
        if (recipeRepository.count() == 0) {
            recipeRepository.saveAll(List.of(new Recipe("Pancakes"), new Recipe("Waffles")));
        }
        if (ingredientRepository.count() == 0) {
            ingredientRepository.saveAll(List.of(new Ingredient("flour"), new Ingredient("milk")));
        }
    }
}
