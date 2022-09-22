import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { ReactComponent as SVGMenu } from '../aset/SVGMenu.svg';
import { ReactComponent as SVGTutup } from '../aset/SVGTutup.svg';

const Navigasi = () => {
  const [tunjukkanMenu, setTunjukkanMenu] = useState(false);

  const bukaTutupMenu = () => {
    setTunjukkanMenu(!tunjukkanMenu);
  };

  return (
    <>
      {/* // TODO: buat event handler untuk window.innerWidth yang akan memonitor ukuran window dan juga state dari mobile menu untuk menutup jika window size lebih dari 768 px*/}
      {/* // TODO: isi navlink dengan iterasi menu dari konfigurasi menu yg disimpan
      di database // flex justify-center space-x-4 */}
      <nav className='flex bg-navy items-center justify-between flex-wrap p-6'>
        <div className='flex items-center flex-shrink-0 mr-6'>
          <span className='font-semibold text-xl tracking-tight'>
            jPao Persona
          </span>
        </div>
        {/* <div className='w-full block md:flex hidden flex-grow md:items-center md:w-auto'>
        <div className='text-sm md:flex-grow justify-between'> */}
        <div className='w-full block md:flex hidden flex-grow md:items-center md:w-auto'>
          <div className='text-sm md:flex-grow justify-between'>
            <NavLink to='/' className='px-2'>
              Halaman Depan
            </NavLink>
            <NavLink to='/buat-tulisan' className='px-2'>
              Penulisan
            </NavLink>
            <NavLink to='/tentang' className='px-2'>
              Tentang
            </NavLink>
          </div>
        </div>
        <div className='md:flex hidden md:w-auto'>
          <NavLink
            to='/'
            className='text-sm px-4 py-2 leading-none border rounded border-white'
          >
            Masuk
          </NavLink>
        </div>
        <div className='flex md:hidden absolute top-0 right-0 p-4'>
          <button onClick={bukaTutupMenu}>
            {tunjukkanMenu ? <SVGTutup /> : <SVGMenu />}
          </button>
        </div>
      </nav>
      <div
        className={`w-full h-screen transition-all ease-out duration-500 bg-navy ${
          !tunjukkanMenu && 'hidden'
        }`}
      >
        <center>Belum ada Menu 0_0</center>
      </div>
    </>
  );
};

export default Navigasi;
