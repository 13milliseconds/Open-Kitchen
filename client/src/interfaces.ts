interface Step {
  text: string
}

interface IngredientLine{
  ingredient: string
}

interface Recipe {
    title: string
    blurb: string
    notes: string
    ingredients: IngredientLine[]
    steps: Step[]
  }

  export type {
    Recipe,
    Step,
    IngredientLine
  }