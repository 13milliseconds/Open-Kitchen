import RecipeCard from "@/components/RecipeCard/RecipeCard"
import { Recipe } from "@/interfaces"
import React from "react"

interface Props{
    recipes: Recipe[]
}

const  RecipesPage: React.FC<Props> = ({recipes}) => {
    return <main className="max-w-4xl m-auto">
        <h1>All Recipes</h1>
        { recipes.length 
            ? recipes.map((recipe) => <RecipeCard key={recipe.title} recipe={recipe} />)
            : <div>No recipes found.</div>
        }
    </main>
}

export default RecipesPage

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/recipes`)
    const data = await res.json()
   
    // Pass data to the page via props
    // return { props: { data } }
    return { props: { recipes: data}}
  }