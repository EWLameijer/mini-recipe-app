package org.ericwubbo.minirecipeapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/recipes")
public class RecipeController {
    @GetMapping
    public String get() {
        return "hello recipes!";
    }
}
