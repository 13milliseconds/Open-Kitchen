import React, { useState } from 'react'
import Link from 'next/link'
import type  { Recipe, IngredientLine } from '@/interfaces'
import TextInput from '@/components/TextInput'
import Head from 'next/head'
import IngredientsSelector from '@/components/IngredientsSelector/IngredientsSelector'
import { useSaveRecipe } from '@/utils/hooks'
import slugify from 'slugify'

export default function App() {
  const [loading, error, saveRecipe] = useSaveRecipe()
  const [recipe, setRecipe] = useState<Recipe>({
    _id: null,
    title: "",
    slug: "",
    servings: 4,
    ingredients: [], 
    steps: []
  })

  const addIngredient = (newIngredient: IngredientLine) => {
    setRecipe(prevState => Object.assign({}, prevState, {ingredients: [...prevState.ingredients, newIngredient]}))
  }
  
  const handleSetTitle = (value: string) => {
    setRecipe(prevState => Object.assign({}, prevState, {title: value}))
  }
  
  const handleSetBlurb = (value: string) => {
    setRecipe(prevState => Object.assign({}, prevState, {blurb: value}))
  }

  const handleSaveRecipe = async () => {
    if(!recipe.slug) setRecipe(prevState => Object.assign({}, prevState, {slug: slugify(recipe.title)}))
    const data = await saveRecipe(recipe)
    const newId = data.insertedId
    if(data.insertedId) setRecipe(prevState => Object.assign({}, prevState, {_id: newId}))
  }

  const handleValidation = () => {
    if(!recipe.title) return false
    return true
  }

  return <div className="App p-6">
    <Head>
      <title>New Recipe</title>
    </Head>

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
        text={recipe.blurb || ''} 
        type='textarea'
        placeholder="Blurb"
        setText={handleSetBlurb} 
      />
      </h4>
    </section>
    
    <IngredientsSelector ingredients={recipe.ingredients} addIngredient={addIngredient} /> 

    <section className='bg-gray-100 rounded p-6 mb-6'>
      <h2>Steps</h2>
    </section>
    <footer>
      <button 
        onClick={handleSaveRecipe} 
        disabled={!handleValidation()}
        className='p-2 bg-blue-500 text-white rounded'>{loading? 'Saving...' : 'Save Recipe'}</button>
    </footer>
    <pre>
      {JSON.stringify(recipe, null, '\t')}
    </pre>
</div>
}
