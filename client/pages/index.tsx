import React from 'react'
import type  { Recipe } from '@/interfaces'
import RecipeCard from '@/components/RecipeCard'
import Link from 'next/link'

let recipes: Recipe[] = [
  { 
    title: 'Caccio e Pepe', 
    notes: '', 
    ingredients: [], 
    steps: []
  },
  { 
    title: 'The best puree', 
    notes: '', 
    ingredients: [], 
    steps: []
  },
  { 
    title: 'Pain de Campagne', 
    notes: '', 
    ingredients: [], 
    steps: []
  },
]

export default function App() {
  return <div className="App p-6">
  <header className="App-header">
    <h1 className='text-3xl font-bold'>All Recipes</h1>
  </header>
  <div className='recipes flex p-6'>
    { recipes.map(recipe => <RecipeCard key={recipe.title} recipe={recipe} />) }
  </div>
  <Link href="/add" className='bg-blue-600 text-white p-2 rounded'>Add Recipe</Link>
</div>
}
