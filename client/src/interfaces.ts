
interface Step {
  text: string
}

interface IngredientLine{
  ingredient: string
}

interface Recipe {
    _id: string | null
    title: string
    blurb?: string
    servings: number
    ingredients: IngredientLine[]
    steps: Step[]
    notes?: string
  }

  export type {
    Recipe,
    Step,
    IngredientLine
  }