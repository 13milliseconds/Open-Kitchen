import React from "react";
import type { Recipe } from "@/interfaces";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import RecipeCard from "./RecipeCard";

describe('A Recipe Card', () => {
    let recipe:Recipe = {
        title: "Test Title",
        blurb: "Test Blurb", 
        notes: "", 
        ingredients: [], 
        steps: []
    }
    beforeEach(() => {
        render(<RecipeCard  recipe={ recipe } />)
    })

    
    it('should display the data', async () => {
        expect(screen.getByText(recipe.blurb))
        .toBeVisible()
        
        expect(screen.getByText(recipe.title))
        .toBeVisible()
    })
})