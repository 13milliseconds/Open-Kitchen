import React, { useState } from 'react'
import Link from 'next/link'
import type  { Recipe, IngredientLine } from '@/interfaces'

export default function App() {
  const [ingredients, setIngredients] = useState<IngredientLine[]>([])

  return <div className="App p-6">
  <header className="App-header">
    <h1 className='text-3xl font-bold'>Add Recipe</h1>
    <Link href="/" className='bg-blue-600 text-white p-2 rounded'>Back</Link>
    <section className='bg-gray-100 rounded p-6 mb-6'>
      <h2>Ingredients</h2>
      {ingredients.map(line => <li>{ line.ingredient }</li>)}
      <button onClick={() => setIngredients(cur => [...cur, {ingredient: 'A new one'}])}>Add Ingredient</button>
    </section>
    <section className='bg-gray-100 rounded p-6 mb-6'>
      <h2>Steps</h2>
    </section>
  </header>
</div>
}
