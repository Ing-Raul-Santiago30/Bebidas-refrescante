import { StateCreator } from "zustand";
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";
import { FavoritesSliceType } from "./favoriteSlice";

export type RecipesSliceType = {
    categories: Categories;
    drinks: Drinks;
    selectedRecipe: Recipe;
    modal: boolean;
    fetchCategories: () => Promise<void>;
    searchRecipes: (SearchFilters: SearchFilter) => Promise<void>;
    selectRecipe: (id: Drink['idDrink']) => Promise<void>;
    openModal: () => void;
    closeModal: () => void;
};

// Para conectarme a la API
export const createRecipesSlice: StateCreator<RecipesSliceType & FavoritesSliceType,[],[],RecipesSliceType> = (set) => ({
    categories: {
        drinks: [],
    },
    drinks: {
        drinks: [], // Un arreglo vacío
    },
    selectedRecipe: {} as Recipe,
    modal: false, // Estado inicial del modal
    fetchCategories: async () => {
        const categories = await getCategories();
        set({ categories });
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters);
        set({ drinks });
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id);
        set({
            selectedRecipe, // Actualiza 'selectedRecipe' en el estado
            modal: true, // Abre el modal cuando se selecciona una receta
        });
    },
    openModal: () => set({ modal: true }), // Abre el modal
    closeModal: () => {
        set({
            modal: false, // Cierra el modal
            selectedRecipe: {} as Recipe, // Resetea 'selectedRecipe'
        });
    },
});
