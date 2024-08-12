import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"


export default function Favoritos() {
 const favorites =  useAppStore((state)=>state.favorites)
 const hasFavotites = useMemo(() =>favorites.length, [favorites])
  return (
    <>
   <h1 className=" text-6xl font-extrabold">Favoritos </h1>

   {hasFavotites ? (
    <div className=" grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
    {favorites.map(drink =>(
      <DrinkCard
      key={drink.idDrink} 
      drink={drink}
      
      />
    ))}

   </div>
   ): (
    <p className="my-10 text-center text-2xl">Los Favoritos se mostraran Aqui</p>
   )}

   
    
    </>
  )
}