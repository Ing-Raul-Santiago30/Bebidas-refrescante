// para conectar con el slice
import {create} from 'zustand'
import { devtools} from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice'
import { FavoritesSliceType, createFavoritesSlice } from './favoriteSlice'
import { NotificationSliceType, createNotificationSlice } from './notificationSlice'

export const useAppStore = create<RecipesSliceType &  FavoritesSliceType & NotificationSliceType>()(devtools((...a) =>({ // ...a coge una copia de todos los argumentos todas las funciones de get de set 
    ...createRecipesSlice(...a), // y la pasamos a qui
    ...createFavoritesSlice(...a), // y la pasamos a qui
    ...createNotificationSlice(...a), // y la pasamos a qui
    

})))