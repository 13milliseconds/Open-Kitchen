import React from "react"
import type { IngredientLine } from '@/interfaces'

interface Props{
    ingredients: IngredientLine[]
}

const IngredientsRender: React.FC<Props> = ({ingredients}) => {
    return <div className="ingredients-render">
        <ul>
            {ingredients.map(line => <li>{ line.ingredient }</li>)}
        </ul>
    </div>
}

export default IngredientsRender