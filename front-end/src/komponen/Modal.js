import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as SVGMuatTulisan } from '../aset/SVGMuatTulisan.svg';
import { ReactComponent as SVGPublikasiBerhasil } from '../aset/SVGPublikasiBerhasil.svg';

const Modal = ({ tunjukkanModal, setTunjukkanModal, statusModal }) => {
  const navigasi = useNavigate();
  const tutupModal = () => {
    setTunjukkanModal(false);
    navigasi('/');
  };

  switch (statusModal) {
    case 'MEMUAT':
      return (
        <div className='w-full h-full bg-dark bg-opacity-90 top-0 fixed sticky-0'>
          <div className='2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center'>
            <div className='w-96 md:w-auto relative flex flex-col justify-center items-center bg-navy py-16 px-4 md:px-24 xl:py-24 xl:px-36'>
              <div>
                <SVGMuatTulisan />
              </div>
              <div className='mt-12'>
                <h1
                  role='main'
                  className='text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800'
                >
                  Memuat Tulisan
                </h1>
              </div>
              <div className='mt'>
                <p className='mt-6 sm:w-80 text-base dark:text-white leading-7 text-center text-gray-800'>
                  Mohon tunggu sebentar, tulisan saat ini sedang dimuat...
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    case 'TULISAN_SUKSES':
      return (
        <div className='w-full h-full bg-dark bg-opacity-90 top-0 fixed sticky-0'>
          <div className='2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center'>
            <div className='w-96 md:w-auto bg-navy relative flex flex-col justify-center items-center bg-navy py-16 px-4 md:px-24 xl:py-24 xl:px-36'>
              <div>
                <SVGPublikasiBerhasil />
              </div>
              <div className='mt-12'>
                <h1
                  role='main'
                  className='text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800'
                >
                  Sukses
                </h1>
              </div>
              <div className='mt'>
                <p className='mt-6 sm:w-80 text-base dark:text-white leading-7 text-center text-gray-800'>
                  Tulisan telah disimpan di database dan dipublikasikan.
                </p>
              </div>
              <button
                className='w-full bg-red hover:bg-dark bg-red sm:w-auto mt-14 text-base leading-4 text-center text-white py-6 px-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black'
                onClick={tutupModal}
              >
                Kembali ke Halaman Depan
              </button>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className='w-full h-full bg-dark bg-opacity-90 top-0 fixed sticky-0'>
          <div className='2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center'>
            <div className='w-96 md:w-auto bg-navy relative flex flex-col justify-center items-center bg-navy py-16 px-4 md:px-24 xl:py-24 xl:px-36'>
              <div>SVG Modal</div>
              <div className='mt-12'>
                <h1
                  role='main'
                  className='text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800'
                >
                  Status
                </h1>
              </div>
              <div className='mt'>
                <p className='mt-6 sm:w-80 text-base dark:text-white leading-7 text-center text-gray-800'>
                  Paragraf deskripsi tambahan
                </p>
              </div>
              <button
                className='w-full bg-red hover:bg-dark bg-red sm:w-auto mt-14 text-base leading-4 text-center text-white py-6 px-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black'
                onClick={tutupModal}
              >
                Tombol jika ada
              </button>
            </div>
          </div>
        </div>
      );
  }
};

export default Modal;
