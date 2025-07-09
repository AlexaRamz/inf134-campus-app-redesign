export type DietHighlight = 'vegan' | 'vegetarian' | 'gluten free' | 'eat well' | 'low carbon' | 'whole grains';

export interface FoodItem {
  name: string;
  calories: number;
  description: string;
  dietHighlights?: DietHighlight[];
}

export interface MenuSection {
  heading: string;
  foodItems: FoodItem[];
}

export interface MealTimeMenu {
  [mealTime: string]: MenuSection[];
}

export interface DiningHallMenu {
  [diningHallName: string]: MealTimeMenu;
}
