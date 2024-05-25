package org.ericwubbo.minirecipeapp;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
