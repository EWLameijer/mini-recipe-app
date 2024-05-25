package org.ericwubbo.minirecipeapp;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/units")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:5173")
public class UnitController {
    @GetMapping
    public Unit[] getAll() {
        return Unit.values();
    }
}
