import {lazy, Suspense} from 'react'
import {BrowserRouter, Routes,Route,} from 'react-router-dom'

import { Layouts } from './components/layouts/Layouts'



const  IndexPage = lazy(()=>import('./pages/IndexPage'))
const  Favoritos = lazy(()=>import('./pages/Favoritos'))


export default function AppRouter() {
  return (
   <BrowserRouter>
   <Routes>
  
   <Route element={<Layouts/>}>
        
        <Route path='/'element={
          <Suspense fallback="Cargando...">
          <IndexPage/>
        </Suspense>
        } index/>
        <Route path='/favoritos'element={
          <Suspense fallback="Cargando...">
            <Favoritos/>

          </Suspense>
        }/>
        
        </Route> 
   </Routes>
   
   
   </BrowserRouter>
  )
}
