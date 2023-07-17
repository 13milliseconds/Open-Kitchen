interface Step {
  text: string
}

interface IngredientLine{
  ingredient: string
}

interface Recipe {
    _id: string
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