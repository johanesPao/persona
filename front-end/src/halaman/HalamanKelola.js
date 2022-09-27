import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../komponen/Modal';

import { useKonteksGlobal } from '../konteks/konteks';

const HalamanKelola = () => {
  const { sedangMemuat, muatTulisan, hapusTulisan } = useKonteksGlobal();
  const [dataTulisan, setDataTulisan] = useState([]);
  const [id, setID] = useState('');
  const [tunjukkanModal, setTunjukkanModal] = useState(false);
  const [statusModal, setStatusModal] = useState('');

  const penangananEdit = (id) => {
    console.log(`Edit ${id}`);
  };

  const penangananHapus = async (id) => {
    console.log(`Hapus ${id}`);
    const response = await hapusTulisan(id);
    const { status, data } = response;
    if (status === 200) {
      console.log(status, data);
      setStatusModal('HAPUS_SUKSES');
      setTunjukkanModal(true);
      setID(id);
    }
    if (status === 500) {
      console.log('kesalahan');
    }
  };

  useEffect(() => {
    async function fetchDanSetDataTulisan() {
      const koleksiTulisan = await muatTulisan();
      setDataTulisan(koleksiTulisan);
    }
    fetchDanSetDataTulisan();
  }, [muatTulisan]);

  useEffect(() => {
    async function fetchDanSetDataTulisan() {
      const koleksiTulisan = await muatTulisan();
      setDataTulisan(koleksiTulisan);
    }
    fetchDanSetDataTulisan();
  }, [id, muatTulisan]);

  return (
    <>
      {sedangMemuat ? (
        <Modal statusModal={'MEMUAT_DAFTAR_TULISAN'} />
      ) : (
        <>
          <div className='container mx-auto p-8'>
            <div className='w-full flex'>
              <div className='flex-grow text-white text-lg font-semibold py-2 px-2'>
                Daftar Tulisan
              </div>
              <div className='tracking-wide py-2 pr-2'>
                <Link
                  to='/kelola/buat-tulisan'
                  className='flex justify-end no-underline'
                >
                  Buat Tulisan
                  <svg
                    className='w-6 h-6 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className='flex items-center bg-navy rounded-md mb-2'>
              <div className='pl-2'>
                <svg
                  className='fill-current text-red w-6 h-6'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path
                    className='heroicon-ui'
                    d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'
                  />
                </svg>
              </div>
              <input
                className='w-full rounded-md bg-navy text-red leading-tight focus:outline-none py-2 px-2'
                id='search'
                type='text'
                placeholder='Cari tulisan...'
              />
            </div>
            <ul>
              {dataTulisan.map((tulisan) => {
                const { _id, judulTulisan, tanggalTulisan } = tulisan;
                const tanggalTerformat = new Date(
                  tanggalTulisan,
                ).toLocaleDateString('id-ID');
                return (
                  <li key={_id}>
                    <div className='w-full flex justify-start cursor-pointer'>
                      <div className='pl-2'>{tanggalTerformat}</div>
                      <div className='flex-grow pl-2'>{judulTulisan}</div>
                      <div className='tracking-wide pr-2'>
                        <button type='text' onClick={() => penangananEdit(_id)}>
                          <svg
                            className='w-6 h-6 hover:text-green'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                            />
                          </svg>
                        </button>
                        <button
                          type='text'
                          className='ml-2'
                          onClick={() => penangananHapus(_id)}
                        >
                          <svg
                            className='w-6 h-6 hover:text-red'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {tunjukkanModal && (
            <Modal
              tunjukkanModal={tunjukkanModal}
              setTunjukkanModal={setTunjukkanModal}
              statusModal={statusModal}
            />
          )}
        </>
      )}
    </>
  );
};

export default HalamanKelola;
