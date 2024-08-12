import axios from "axios"
import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../schemas/recipe-schema"
import { Drink, SearchFilter } from "../types"

// Función para obtener las categorías
export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    const { data } = await axios.get(url); // Uso correcto de axios.get
    const result = CategoriesAPIResponseSchema.safeParse(data); // Validación de la respuesta

    if (result.success) { // Si la validación es exitosa, retornar los datos
        console.log(result.data)
        return result.data;
    } else {
        throw new Error("Error al obtener categorías"); // Manejo de error si la validación falla
    }
}

// Función para obtener las recetas según los filtros
export async function getRecipes(filters: SearchFilter) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
    const { data } = await axios.get(url);
    const result = DrinksAPIResponse.safeParse(data);

    if (result.success) {
        console.log(result.data)
        return result.data;
    } else {
        throw new Error("Error al obtener recetas"); // Manejo de error si la validación falla
    }
}

// Función para obtener una receta por ID
export async function getRecipeById(id: Drink['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const { data } = await axios.get(url);
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);

    if (result.success) {
        console.log(result.data); // Log de la receta obtenida
        return result.data;
    } else {
        throw new Error("Error al obtener la receta por ID"); // Manejo de error si la validación falla
    }
}