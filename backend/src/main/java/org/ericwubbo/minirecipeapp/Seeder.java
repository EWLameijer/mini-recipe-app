package org.ericwubbo.minirecipeapp;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class Seeder implements CommandLineRunner {
    private final RecipeRepository recipeRepository;

    private final IngredientRepository ingredientRepository;

    private final RecipeIngredientRepository recipeIngredientRepository;

    @Override
    public void run(String... args) throws Exception {
        if (ingredientRepository.count() == 0) {
            ingredientRepository.saveAll(List.of(new Ingredient("flour"), new Ingredient("milk")));
        }
        if (recipeRepository.count() == 0) {
            var flour = ingredientRepository.findByName("flour").orElseThrow();
            var milk = ingredientRepository.findByName("milk").orElseThrow();
            var pancakes = new Recipe("Pancakes");
            var pancakeMilk = new RecipeIngredient(pancakes, milk, 500, Unit.MILLILITRES);
            var pancakeFlour = new RecipeIngredient(pancakes, flour, 100, Unit.GRAMS);
            pancakes.addIngredients(Set.of(pancakeMilk, pancakeFlour));

            var waffles = new Recipe("Waffles");
            var waffleMilk = new RecipeIngredient(waffles, milk, 150, Unit.MILLILITRES);
            var waffleFlour = new RecipeIngredient(waffles, flour, 300, Unit.GRAMS);
            waffles.addIngredients(Set.of(waffleFlour, waffleMilk));

            recipeRepository.saveAll(List.of(pancakes, waffles));
        }

    }
}
