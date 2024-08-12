import { Link } from "react-router-dom";





export default function FormularioRegistro() {
    return (
    
      <div className="bg-gray-100 flex items-center justify-center min-h-screen ">
        <div className="bg-white bg-header p-8 rounded-lg shadow-lg w-full max-w-md bg-raul">
          <h2 className="text-2xl font-extrabold mb-6 text-center text-white  ">Formulario Dinámico</h2>
  
          <form id="dynamic-form" className="space-y-4 " >
            <div className="  flex flex-col">
              <label htmlFor="nombre" className="mb-2  text-white font-extrabold">Nombre</label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Ingrese su nombre" 
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="apellido" className="mb-2  text-white font-extrabold">Apellido</label>
              <input 
                type="text" 
                id="apellido" 
                name="apellido" 
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Ingrese su apellido" 
              />
            </div>
      
            <div className="flex flex-col">
              <label htmlFor="barrio" className="mb-2  text-white font-extrabold">Barrio</label>
              <input 
                type="text" 
                id="barrio" 
                name="barrio" 
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Ingrese su barrio" 
              />
            </div>
      
            <button 
            
              type="submit" 
              className="w-full bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Link to="http://localhost:5173">Enviar</Link>
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  
  