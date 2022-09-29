import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useKonteksGlobal } from '../konteks/konteks';

import Modal from '../komponen/Modal';
import RenderKomp from '../komponen/RenderKomp';

const HalamanMuka = () => {
  const [dataTulisan, setDataTulisan] = useState([]);
  const { sedangMemuat, muatTulisan } = useKonteksGlobal();

  useEffect(() => {
    async function fetchDanSetDataTulisan() {
      const koleksiTulisan = await muatTulisan();
      setDataTulisan(koleksiTulisan);
    }
    fetchDanSetDataTulisan();
  }, [muatTulisan]);

  return (
    <>
      {sedangMemuat ? (
        <Modal statusModal={'MEMUAT'} />
      ) : (
        <div className='container mx-auto p-8'>
          {dataTulisan.map((tulisan) => {
            const { _id, isiTulisan, judulTulisan, tanggalTulisan } = tulisan;
            const tanggalTerformat = new Date(
              tanggalTulisan,
            ).toLocaleDateString('id-ID');
            return (
              <article
                key={_id}
                className='prose dark:prose-invert text-white pt-0 pb-4 max-w-none'
              >
                <h1 className='leading-tight font-bold text-2xl mt-0 mb-2 px-0'>
                  <Link to={`/${_id}`} className='no-underline'>
                    {judulTulisan}
                  </Link>
                </h1>
                <p className='mt-0 mb-2 px-0'>{tanggalTerformat}</p>
                <RenderKomp anakKomponen={isiTulisan} />
              </article>
            );
          })}
        </div>
      )}
    </>
  );
};

export default HalamanMuka;
