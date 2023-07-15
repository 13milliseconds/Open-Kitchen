import React, { useState } from 'react'
import Link from 'next/link'
import type  { Recipe, IngredientLine } from '@/interfaces'
import TextInput from '@/components/TextInput'
import IngredientsRender from '@/components/IngredientsRender'

export default function App() {
  const [ingredients, setIngredients] = useState<IngredientLine[]>([])
  const [newIngredient, setNewIngredient] = useState("")

  const addIngredient = () => {
    setIngredients(cur => [...cur, {ingredient: newIngredient}])
    setNewIngredient("")
  }

  return <div className="App p-6">
  <header className="App-header">
    <h1 className='text-3xl font-bold'>Add Recipe</h1>
    <Link href="/" className='bg-blue-600 text-white p-2 rounded'>Back</Link>

    <section className='bg-gray-100 rounded p-6 mb-6'>
      <h2 className='font-bold'>Ingredients</h2>
      <IngredientsRender ingredients={ingredients} />
      <TextInput text={newIngredient} setText={setNewIngredient} />
      <button  
        className="bg-blue-500 text-white font-bold rounded ml-2 p-2 disabled:opacity-50 transition-opacity" 
        disabled={!newIngredient} 
        onClick={addIngredient}
        >Add Ingredient</button>
    </section>

    <section className='bg-gray-100 rounded p-6 mb-6'>
      <h2>Steps</h2>
    </section>
  </header>
</div>
}
