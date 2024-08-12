import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'; // para inyectar contenido que comparte o es común
import Header from '../Header';
import Modal from '../Modal';
import { useAppStore } from '../../stores/useAppStore';
import Notification from '../Notification';



export const Layouts = () => {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage);

  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <>
      <Header />
      <main className='container mx-auto py-16'> {/* centra el contenido */}
        <Outlet />
      </main>
      <Modal />
      <Notification/>
     
    
    </>
  );
};
