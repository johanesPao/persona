import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
              <article
                key={_id}
                className='prose dark:prose-invert text-white pt-0 pb-4 max-w-none'
              >
                {/* Buat judul tulisan sebagai navigasi ke halaman /tulisan/id */}
                <h1 className='leading-tight font-bold text-2xl mt-0 mb-2 px-0'>
                  <Link to={`/${_id}`} className='no-underline'>
                    {judulTulisan}
                  </Link>
                </h1>
                <p className='mt-0 mb-2 px-0'>{tanggalTerformat}</p>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className='mt-0 mb-2 px-0'
                  components={{
                    p: React.Fragment,
                  }}
                >
                  {isiTulisan}
                </ReactMarkdown>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
};

export default HalamanMuka;
