import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

import Modal from '../komponen/Modal';

import { useKonteksGlobal } from '../konteks/konteks';

const HalamanPenulisan = () => {
  const { simpanTulisan } = useKonteksGlobal();

  const [isiJudul, setIsiJudul] = useState('');
  const [isiTulisan, setIsiTulisan] = useState('');
  const [kesalahan, setKesalahan] = useState(false);
  const [tunjukkanModal, setTunjukkanModal] = useState(false);
  const [statusModal, setStatusModal] = useState('');

  const penangananSubmit = async (e) => {
    e.preventDefault();
    if (isiJudul === '' || isiTulisan === '') {
      setKesalahan(true);
      return;
    }
    setKesalahan(false);
    const tulisan = {
      judulTulisan: isiJudul,
      isiTulisan: isiTulisan,
    };
    // response seharusnya berisi data mengenai status dan isi data dari rekues post API
    // dalam bentuk { status: number (201 atau 500), data: object jika sukses; string kesalahan jika
    // terjadi kesalahan di API }
    const response = await simpanTulisan(tulisan);
    const { status, data } = response;
    // TODO: if status 201 lakukan sesuatu:
    if (status === 201) {
      // - kembalikan input judul dan tulisan ke ''
      setIsiJudul('');
      setIsiTulisan('');
      console.log(data);
      // - tampilkan modal pesan sukses posting
      setStatusModal('TULISAN_SUKSES');
      setTunjukkanModal(true);
    }

    // - saat modal ditutup, navigasikan ke halaman depan
    // if (status === 201) {
    //   console.log('sukses');
    //   console.log(data);
    // }
    // TODO: if status 500 lakukan sesuatu:
    // - tunjukkan modal kegagalan
    // - saat modal ditutup, pengguna tetap di halaman penulisan
    // - nilai dari judul dan isi tetap tidak berubah sesuai dengan nilai terakhir
    if (status === 500) {
      console.log('kesalahan');
    }
  };

  return (
    <>
      <div className='container mx-auto p-8'>
        <form
          onSubmit={penangananSubmit}
          className='bg-dark rounded px-8 py-6 mb-4'
        >
          <div className='mb-4'>
            <label className='block text-white text-sm font-bold mb-2'>
              Judul
            </label>
            <input
              type='text'
              value={isiJudul}
              onChange={(e) => setIsiJudul(e.target.value)}
              className={`shadow apprearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-dark ${
                isiJudul === '' && kesalahan ? 'border-red' : null
              }`}
            />
          </div>
          <div className='mb-6'>
            <label className='block text-white text-sm font-bold mb-2'>
              Isi Tulisan
            </label>
            <div data-color-mode='light'>
              <MDEditor value={isiTulisan} onChange={setIsiTulisan} />
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Publikasi
            </button>
          </div>
        </form>
      </div>
      {tunjukkanModal && (
        <Modal
          tunjukkanModal={tunjukkanModal}
          setTunjukkanModal={setTunjukkanModal}
          statusModal={statusModal}
        />
      )}
    </>
  );
};

export default HalamanPenulisan;
