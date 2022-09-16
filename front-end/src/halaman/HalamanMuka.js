import React from 'react';
import { useKonteksGlobal } from '../konteks/konteks';

const HalamanMuka = () => {
  const { sedangMemuat, dataTulisan } = useKonteksGlobal();

  return (
    <div className='container mx-auto p-8'>
      {sedangMemuat ? (
        <center>
          <h2 className='text-white'>sedang memuat</h2>
        </center>
      ) : (
        dataTulisan.map((tulisan) => {
          const { _id, isiTulisan, judulTulisan, tanggalTulisan } = tulisan;
          const tanggalTerformat = new Date(tanggalTulisan).toLocaleDateString(
            'id-ID',
          );
          return (
            <article key={_id} className='text-white p-4'>
              <h1>{judulTulisan}</h1>
              <h4>{_id}</h4>
              <p>{tanggalTerformat}</p>
              <p>{isiTulisan}</p>
            </article>
          );
        })
      )}
    </div>
  );
};

export default HalamanMuka;
