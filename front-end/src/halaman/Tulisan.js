import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import 'katex/dist/katex.min.css';

import { useKonteksGlobal } from '../konteks/konteks';

import Modal from '../komponen/Modal';
import RenderKomp from '../komponen/RenderKomp';

const Tulisan = () => {
  const [satuTulisan, setSatuTulisan] = useState([]);
  const { id } = useParams();
  const { sedangMemuat, ambilSatuTulisan } = useKonteksGlobal();

  useEffect(() => {
    async function fetchDanSetSatuTulisan(id) {
      const tulisan = await ambilSatuTulisan(id);
      setSatuTulisan(tulisan);
    }
    fetchDanSetSatuTulisan(id);
  }, [id, ambilSatuTulisan]);

  const { judulTulisan, isiTulisan, tanggalTulisan } = satuTulisan;
  const tanggalTerformat = new Date(tanggalTulisan).toLocaleDateString('id-ID');

  return (
    <>
      {sedangMemuat ? (
        <Modal statusModal={'MEMUAT'} />
      ) : (
        <div className='container mx-auto p-8'>
          <article
            key={id}
            className='prose dark:prose-invert text-white pt-0 pb-4 max-w-none'
          >
            <h1 className='font-bold text-2xl'>{judulTulisan}</h1>
            <p className='mt-0 mb-2 px-0'>{tanggalTerformat}</p>
            <RenderKomp anakKomponen={isiTulisan} />
          </article>
        </div>
      )}
    </>
  );
};

export default Tulisan;
