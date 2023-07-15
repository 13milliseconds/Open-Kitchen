import { Recipe } from '@/interfaces'
import Link from 'next/link'

export default function RecipeCard ({recipe}:{recipe: Recipe}){
    return <div className='border rounded p-6 m-2'>
        <h4>{recipe.title}</h4>
        <Link href='/recipes/a_link' className='text-blue-500'>Read More</Link>
    </div>
}