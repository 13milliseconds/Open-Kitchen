import { useState } from "react";
import { IngredientLine } from "@/interfaces";
import IngredientsRender from "../IngredientsRender";
import TextInput from "../TextInput";

interface Props{
    ingredients: IngredientLine[],
    addIngredient: (n: IngredientLine) => void
}

const resetIngredient = {
    ingredient: "",
}

export default function IngredientsSelector(props: Props) {
    const [newIngredient, setNewIngredient] = useState<IngredientLine>(resetIngredient)
    const {ingredients, addIngredient} = props

    const handleAddIngredient = () => {
        addIngredient(newIngredient)
        setNewIngredient(resetIngredient)
    }

    const handleSetText = (value: string) => {
        setNewIngredient(prevState => Object.assign({}, prevState,  {ingredient: value}))
    }

    return <section className='bg-gray-100 rounded p-6 mb-6'>
      <h2 className='font-bold'>Ingredients</h2>
      <IngredientsRender 
        ingredients={ingredients} 
      />
      <div className='flex'>
      <TextInput 
        text={newIngredient.ingredient} 
        type='input'
        placeholder="Type an ingredient"
        setText={handleSetText} 
      />
      <button  
        className="bg-blue-500 text-white font-bold rounded ml-2 p-2 disabled:opacity-50 transition-opacity" 
        disabled={!newIngredient} 
        onClick={handleAddIngredient}
        >Add Ingredient</button>
        </div>
    </section>
}