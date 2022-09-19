import React, { useEffect } from 'react';
import { useKonteksGlobal } from '../konteks/konteks';

import Modal from '../komponen/Modal';

const HalamanMuka = () => {
  const { sedangMemuat, muatTulisan, dataTulisan } = useKonteksGlobal();

  useEffect(() => {
    muatTulisan();
  }, []);

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
              <article key={_id} className='text-white p-4'>
                <h1 className='text-2xl font-bold'>{judulTulisan}</h1>
                <h4>{_id}</h4>
                <p>{tanggalTerformat}</p>
                <p>{isiTulisan}</p>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
};

export default HalamanMuka;
