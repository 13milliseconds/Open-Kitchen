import React from 'react'
import { Recipe } from '@/interfaces'
import Link from 'next/link'

interface Props{
    recipe: Recipe
}

const RecipeCard: React.FC<Props> = ({recipe}) => {
    return <div className='border rounded p-6 m-2'>
        <h4 className='font-bold'>{recipe.title}</h4>
        <p>{recipe.blurb}</p>
        <Link href='/recipes/a_link' className='text-blue-500'>Read More</Link>
    </div>
}

export default RecipeCard