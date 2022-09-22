import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useKonteksGlobal } from '../konteks/konteks';

import Modal from '../komponen/Modal';

const HalamanMuka = () => {
  const [dataTulisan, setDataTulisan] = useState([]);
  const { sedangMemuat, muatTulisan } = useKonteksGlobal();

  useEffect(() => {
    async function fetchDanSetDataTulisan() {
      const koleksiTulisan = await muatTulisan();
      setDataTulisan(koleksiTulisan);
    }
    fetchDanSetDataTulisan();
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
                {/* Buat judul tulisan sebagai navigasi ke halaman /tulisan/id */}
                <h1 className='text-2xl font-bold'>
                  <Link to={`/${_id}`}>{judulTulisan}</Link>
                </h1>
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
