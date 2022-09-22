import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useKonteksGlobal } from '../konteks/konteks';

import Modal from '../komponen/Modal';

const Tulisan = () => {
  const [satuTulisan, setSatuTulisan] = useState([]);
  const { id } = useParams();
  const { sedangMemuat, ambilSatuTulisan } = useKonteksGlobal();
  // menggunakan reducer pada react menyebabkan situs tidak akan menampilkan apa - apa ketika user melakukan navigasi secara langsung ke halaman tulisan menggunakan NavLink yang tidak akan merender halaman untuk kedua kalinya.
  // Alternatifnya adalah dengan melakukan fetch kembali ke mongodb server untuk menampilkan halaman yang dimaksud

  useEffect(() => {
    async function fetchDanSetSatuTulisan(id) {
      const tulisan = await ambilSatuTulisan(id);
      setSatuTulisan(tulisan);
    }
    fetchDanSetSatuTulisan(id);
  }, []);

  const { judulTulisan, isiTulisan, tanggalTulisan } = satuTulisan;
  const tanggalTerformat = new Date(tanggalTulisan).toLocaleDateString('id-ID');

  return (
    <>
      {sedangMemuat ? (
        <Modal statusModal={'MEMUAT'} />
      ) : (
        <div className='container mx-auto p-8'>
          <article key={id} className='text-white p-4'>
            {/* Buat judul tulisan sebagai navigasi ke halaman /tulisan/id */}
            <h1 className='text-2xl font-bold'>{judulTulisan}</h1>
            <p>{tanggalTerformat}</p>
            <p>{isiTulisan}</p>
          </article>
        </div>
      )}
    </>
  );
};

export default Tulisan;
