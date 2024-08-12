import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore'


export default function Header() {

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    })
    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])// desctar para saber si es la pagina de inicio
    
    const FetchCategories = useAppStore((state)=> state.fetchCategories)
    const categories = useAppStore((state)=> state.categories)
    const searchRecipes = useAppStore((state)=> state.searchRecipes)
    const showNotification= useAppStore((state)=> state.showNotification)
    
    
    useEffect(()=>{
        FetchCategories() // aqui la mandamos a llamar 

    }, [])// cuando este listo esto queremos mandar a llamar la funcion 
    
    const handleChange = (e:ChangeEvent<HTMLInputElement>| ChangeEvent<HTMLSelectElement>) =>{
        setSearchFilters ({
            ...searchFilters,
            [e.target.name] : e.target.value
        
        })
    }

    const handleSubmit =(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        
        //validar todos los campos 
        if(Object.values(searchFilters).includes('')){
            showNotification({
                text:'Todos los campos son obligatorio',
                error:true
            })
         
            return // para que no ejecute el siguiente codigo

        }
        // consultar la receta
        searchRecipes(searchFilters)
    }
   
    return (
        <header className={isHome ?  ' bg-header bg-center bg-cover' : ' bg-slate-800'}> {/*bg del header*/}
            <div className=" mx-auto container px-5 py-16"> {/*centrar el contenido del Header*/}
                <div className=" flex justify-between items-center"> {/*vamos a tener contido del lado iz y dh alineacdo*/}
                    {/*aqui va el logo tipo*/}
                    <div>
                        <img className=" w-32" src="/logo.svg" alt="logotipo" /> {/* renderizar el logo A la pagina */}

                    </div>
                    {/*La Navegacion aqui*/}
                    <nav className=' flex gap-4'> {/*para separar inicio y favoritos */}
                        <NavLink to="/"
                            className={({ isActive }) => // para darle color a la letra cuando presionamos
                                isActive ? ' text-orange-500 uppercase font-bold' : ' text-white uppercase font-bold'

                            }>Inicio</NavLink>
                        <NavLink to="/Favoritos"
                            className={({ isActive })  =>
                                isActive ? ' text-orange-500 uppercase font-bold' : ' text-white uppercase font-bold'
                            }>Favoritos</NavLink>

                            

                    </nav>

                </div>

                {isHome && ( // si estamos en la pagina de inicio entonces ejecutamos todo este codigo
                    <form
                        className=' bg-form md:w-1/2 2xl:w-1/3  bg-blue-900 my-32 p-10 rounded-lg shadow space-y-6' 
                        onSubmit={handleSubmit}
                        >
                        <div className=' space-y-4'> {/* para separar un poco */}
                            <label
                               
                                htmlFor="ingredient"
                                className=' block text-stone-950 uppercase font-extrabold text-lg'
                            >Nombre o Ingredientes</label>

                            <input
                                id='ingredient'
                                type='text'
                                name='ingredient'
                                className=' p-3 w-full rounded-lg focus:outline-none '
                                placeholder=' Nombre o Ingrediente. ej. vodka, Tequila, Cafe'
                                onChange={handleChange}
                                value={searchFilters.ingredient}

                            />
                        </div>
                        <div className=' space-y-4'> {/* para separar un poco */}
                            <label
                            
                                htmlFor="category"
                                className=' block text-slate-900 uppercase font-extrabold text-lg'
                            >Categoria</label>

                            <select
                                id='category'
                                name='category'
                                className=' p-3 w-full rounded-lg focus:outline-none '
                                onChange={handleChange}
                                value={searchFilters.category}

                            >
                                <option value="">-- Seleccione --</option>
                                {categories.drinks.map( category =>(
                                    <option 
                                    value={category.strCategory}
                                    key={category.strCategory}
                                    >{category.strCategory}</option>
                                ))} {/* iteramos*/}
                            </select>     
                        </div>
                        <input
                        type='submit'
                        value='Buscar Recetas'
                        className=' cursor-pointer bg-blue-950 hover:bg-blue-900
                         text-white font-extrabold w-full p-2 rounded-lg uppercase'
                        
                        />
                        
                    </form>

                )}

            </div>
        </header>
    )
}
