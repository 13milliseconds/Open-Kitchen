import RecipeCard from "@/components/RecipeCard/RecipeCard"
import { Recipe } from "@/interfaces"
import React from "react"

interface Props{
    recipes: Recipe[]
}

const  RecipesPage: React.FC<Props> = ({recipes}) => {
    return <main>
        <h1>All Recipes</h1>
        { recipes.map((recipe) => <RecipeCard key={recipe.title} recipe={recipe} />)}
    </main>
}

export default RecipesPage

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/recipes`)
    const data = await res.json()
    console.log(data)
   
    // Pass data to the page via props
    // return { props: { data } }
    return { props: { recipes: data}}
  }