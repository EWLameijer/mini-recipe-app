package org.ericwubbo.minirecipeapp;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/recipes")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:5173")
public class RecipeController {
    private final RecipeRepository recipeRepository;

    private final IngredientRepository ingredientRepository;

    @GetMapping
    public List<RecipeDto> getAll() {
        return recipeRepository.findAll().stream().map(RecipeDto::from).toList();
    }

    @GetMapping("{id}")
    public Optional<RecipeDto> getById(@PathVariable long id) {
        return recipeRepository.findById(id).map(RecipeDto::from);
    }

    @PostMapping
    public ResponseEntity<RecipeDto> create(@RequestBody RecipeDto recipeDto, UriComponentsBuilder ucb) {
        Recipe recipe = new Recipe(recipeDto.title());

        List<RecipeIngredient> recipeIngredients = recipeDto.ingredients().stream().map(
                recipeIngredientDto -> {
                    Ingredient ingredient = ingredientRepository.findById(recipeIngredientDto.id()).orElseThrow();
                    return new RecipeIngredient(recipe, ingredient, recipeIngredientDto.quantity(),
                            recipeIngredientDto.unit());
                }
        ).toList();
        recipe.addIngredients(recipeIngredients);
        recipeRepository.save(recipe);
        var uri = ucb.path("api/v1/recipes/{id}").buildAndExpand(recipe.getId()).toUri();
        return ResponseEntity.created(uri).body(RecipeDto.from(recipe));
    }
}
