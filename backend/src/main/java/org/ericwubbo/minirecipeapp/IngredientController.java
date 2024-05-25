package org.ericwubbo.minirecipeapp;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/ingredients")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:5173")
public class IngredientController {
    private final IngredientRepository ingredientRepository;

    @GetMapping
    public List<Ingredient> getAll() {
        return ingredientRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Ingredient> getById(@PathVariable long id) {
        return ingredientRepository.findById(id);
    }

    @PostMapping
    public ResponseEntity<Ingredient> create(@RequestBody Ingredient ingredient, UriComponentsBuilder ucb) {
        ingredientRepository.save(ingredient);
        var uri = ucb.path("api/v1/ingredients/{id}").buildAndExpand(ingredient.getId()).toUri();
        return ResponseEntity.created(uri).body(ingredient);
    }
}
