import { NavLink } from 'react-router-dom';

const Navigasi = () => {
  return (
    // TODO: isi navlink dengan iterasi menu dari konfigurasi menu yg disimpan di database
    // flex justify-center space-x-4
    <nav className='flex bg-navy items-center justify-between flex-wrap p-6'>
      <div className='flex items-center flex-shrink-0 mr-6'>
        <span className='font-semibold text-xl tracking-tight'>Persona</span>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow justify-between'>
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
      <div>
        <NavLink
          to='/'
          className='inline-block text-sm px-4 py-2 leading-none border rounded border-white mt-4 lg:mt-0'
        >
          Masuk
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigasi;
