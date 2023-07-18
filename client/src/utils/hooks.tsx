import { useState } from "react"
import axios from "axios"
import type { Recipe } from "@/interfaces";

export function useSaveRecipe(): [boolean, any, (recipe: Recipe) => any] {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
  
    async function saveRecipe(recipe: Recipe) {
        setLoading(true);

        return new Promise(function(resolve, reject) {

        axios.post('/api/recipes', recipe)
        .then(function (response) {
            setLoading(false)
            console.log(response);
            resolve(response.data)
        })
        .catch(function (error) {
            setLoading(false)
            reject(error);
            setError(error)
        });
        })
    }

  return [
        loading,
        error,
        saveRecipe,
    ];
}