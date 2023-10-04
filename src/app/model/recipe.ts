export interface Recipe{
  name: string
  ingredients: string[]
  description: string
  url: string
  createdAt: number
  id?: string
  category: DishType
  rating: number
}

// export enum DishType{
//   antipasto = "apetizer",
//   primo = "first_course",
//   secondo = "second_course",
//   contorno = "side",
//   dessert = "dessert",
//   cocktail = "cocktail"
// }

export enum DishType{
  antipasto,
  primo,
  secondo,
  contorno,
  dessert,
  cocktail
}
