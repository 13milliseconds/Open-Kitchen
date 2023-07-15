import React, { useState } from 'react'
import Link from 'next/link'
import type  { Recipe, IngredientLine } from '@/interfaces'
import TextInput from '@/components/TextInput'
import IngredientsRender from '@/components/IngredientsRender'

export default function App() {
  const [recipe, setRecipe] = useState<Recipe>({
    title: "",
    blurb: "",
    notes: "", 
    ingredients: [], 
    steps: []
  })
  const [newIngredient, setNewIngredient] = useState("")

  const addIngredient = () => {
    setRecipe(prevState => Object.assign({}, prevState, {ingredients: [...prevState.ingredients, {ingredient: newIngredient}]}))
    setNewIngredient("")
  }

  const handleSetNewIngredient = (value: string) => {
    setNewIngredient(value)
  }
  
  const handleSetTitle = (value: string) => {
    setRecipe(prevState => Object.assign({}, prevState, {title: value}))
  }
  
  const handleSetBlurb = (value: string) => {
    setRecipe(prevState => Object.assign({}, prevState, {blurb: value}))
  }

  return <div className="App p-6">
  <header className="App-header">
    <h1 className='text-3xl font-bold'>Add Recipe</h1>
    <Link href="/" className='bg-blue-600 text-white p-2 rounded'>Back</Link>
  </header>

    <section className='p-6 mb-6'>
      <h2>
      <TextInput 
        text={recipe.title} 
        placeholder="Title"
        type="input"
        setText={handleSetTitle} 
      />
      </h2>
      <h4>
      <TextInput 
        text={recipe.blurb} 
        type='textarea'
        placeholder="Blurb"
        setText={handleSetBlurb} 
      />
      </h4>
    </section>
    <section className='bg-gray-100 rounded p-6 mb-6'>
      <h2 className='font-bold'>Ingredients</h2>
      <IngredientsRender 
        ingredients={recipe.ingredients} 
      />
      <div className='flex'>
      <TextInput 
        text={newIngredient} 
        type='input'
        placeholder="Type an ingredient"
        setText={handleSetNewIngredient} 
      />
      <button  
        className="bg-blue-500 text-white font-bold rounded ml-2 p-2 disabled:opacity-50 transition-opacity" 
        disabled={!newIngredient} 
        onClick={addIngredient}
        >Add Ingredient</button>
        </div>
    </section>

    <section className='bg-gray-100 rounded p-6 mb-6'>
      <h2>Steps</h2>
    </section>
    <pre>
      {JSON.stringify(recipe, null, '\t')}
    </pre>
</div>
}
