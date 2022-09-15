import React from 'react';
import { useKonteksGlobal } from '../konteks/konteks';

const HalamanMuka = () => {
  const { sedangMemuat, dataTulisan } = useKonteksGlobal();

  return (
    <div className='container mx-auto py-8'>
      {sedangMemuat ? (
        <center>
          <h2>sedang memuat</h2>
        </center>
      ) : (
        dataTulisan.map((tulisan) => {
          const { idTulisan, isiTulisan, judulTulisan } = tulisan;
          return (
            <article key={idTulisan}>
              <h4>{judulTulisan}</h4>
              <p>{isiTulisan}</p>
            </article>
          );
        })
      )}
    </div>
  );
};

export default HalamanMuka;
