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
public class RecipeController {
    private final RecipeRepository recipeRepository;

    @GetMapping
    public List<Recipe> getAll() {
        return recipeRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Recipe> getById(@PathVariable long id) {
        return recipeRepository.findById(id);
    }

    @PostMapping
    public ResponseEntity<Recipe> create(@RequestBody Recipe recipe, UriComponentsBuilder ucb){
        recipeRepository.save(recipe);
        var uri = ucb.path("api/v1/recipes/{id}").buildAndExpand(recipe.getId()).toUri();
        return ResponseEntity.created(uri).body(recipe);

    }
}
