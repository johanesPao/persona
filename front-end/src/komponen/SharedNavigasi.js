import { Outlet } from 'react-router-dom';
import Navigasi from '../komponen/Navigasi';

const SharedNavigasi = () => {
  return (
    <>
      <div className='relative'>
        <div className='sticky top-0 left-0 right-0 w-full z-50'>
          <Navigasi />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SharedNavigasi;
