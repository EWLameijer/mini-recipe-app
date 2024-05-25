package org.ericwubbo.minirecipeapp;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/recipe-ingredients")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:5173")
public class RecipeIngredientController {
    private final RecipeIngredientRepository recipeIngredientRepository;

    @GetMapping
    public List<RecipeIngredient> getAll() {
        return recipeIngredientRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<RecipeIngredient> getById(@PathVariable long id) {
        return recipeIngredientRepository.findById(id);
    }

    @PostMapping
    public ResponseEntity<RecipeIngredient> create(@RequestBody RecipeIngredient ingredient, UriComponentsBuilder ucb) {
        recipeIngredientRepository.save(ingredient);
        var uri = ucb.path("api/v1/recipe-ingredients/{id}").buildAndExpand(ingredient.getId()).toUri();
        return ResponseEntity.created(uri).body(ingredient);
    }
}
