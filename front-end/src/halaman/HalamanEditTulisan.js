import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';

import Modal from '../komponen/Modal';

import { useKonteksGlobal } from '../konteks/konteks';

const HalamanEditTulisan = () => {
  const navigasi = useNavigate();
  const {
    editTulisan,
    idEditTulisan,
    ambilSatuTulisan,
    akhiriModeEdit,
    editPenulisan,
  } = useKonteksGlobal();

  const [tulisan, setTulisan] = useState([]);
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
    const dataTulisanBaru = {
      ...tulisan,
      judulTulisan: isiJudul,
      isiTulisan: isiTulisan,
    };
    const response = await editPenulisan(dataTulisanBaru);
    const { status, data } = response;
    if (status === 200) {
      // - non-aktifkan mode edit
      akhiriModeEdit();
      // - kembalikan input judul dan tulisan ke ''
      setIsiJudul('');
      setIsiTulisan('');
      console.log(status, data);
      // - tampilkan modal pesan sukses posting
      setStatusModal('EDIT_TULISAN_SUKSES');
      setTunjukkanModal(true);
    }
    if (status === 500) {
      console.log('kesalahan');
    }
  };

  // MUAT DATA TULISAN DENGAN ID PADA KONTEKS
  useEffect(() => {
    if (!editTulisan) {
      setKesalahan(true);
      navigasi('/kelola');
      return;
    }

    async function fetchDanSetTulisan(id) {
      const tulisan = await ambilSatuTulisan(id);
      setTulisan(tulisan);
      const { _id, judulTulisan, tanggalTulisan, isiTulisan } = tulisan;
      setIsiJudul(judulTulisan);
      setIsiTulisan(isiTulisan);
    }
    fetchDanSetTulisan(idEditTulisan);
  }, []);

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
              <MDEditor
                value={isiTulisan}
                onChange={setIsiTulisan}
                height={500}
              />
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-purple text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Edit
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

export default HalamanEditTulisan;
