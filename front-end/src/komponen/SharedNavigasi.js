import { Outlet } from 'react-router-dom';
import Navigasi from '../komponen/Navigasi';

const SharedNavigasi = () => {
  return (
    <>
      <Navigasi />
      <Outlet />
    </>
  );
};

export default SharedNavigasi;
