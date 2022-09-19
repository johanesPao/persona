import React, { useContext, useReducer } from 'react';

import logika from './logika';

const VERSI_API = 'v1';
const DEV = 'http://localhost:8000/';
const PRO = 'https://jpao.live/';
const BACKEND_API =
  process.env.NODE_ENV === 'development'
    ? `${DEV}${VERSI_API}`
    : `${PRO}${VERSI_API}`;

const KonteksAplikasi = React.createContext();

const keadaanAwal = {
  sedangMemuat: true,
  dataTulisan: [],
  isiJudul: '',
  isiTulisan: '',
};

const PenyediaAplikasi = ({ children }) => {
  const [keadaan, eksekusi] = useReducer(logika, keadaanAwal);

  const muatTulisan = async () => {
    eksekusi({
      tipe: 'MEMUAT',
    });
    const response = await fetch(`${BACKEND_API}/tulisan`);
    const dataTulisan = await response.json();
    eksekusi({
      tipe: 'TAMPILKAN_TULISAN',
      muatan: dataTulisan,
    });
  };

  const simpanTulisan = async (tulisan) => {
    try {
      const konfigurasiRekues = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tulisan),
      };
      const response = await fetch(`${BACKEND_API}/tulisan`, konfigurasiRekues);
      const dataResponse = await response.json();
      return dataResponse;
    } catch (kesalahan) {
      return {
        pesan: kesalahan,
      };
    }
  };

  return (
    <KonteksAplikasi.Provider
      value={{
        ...keadaan,
        muatTulisan,
        simpanTulisan,
      }}
    >
      {children}
    </KonteksAplikasi.Provider>
  );
};

export const useKonteksGlobal = () => {
  return useContext(KonteksAplikasi);
};

export { KonteksAplikasi, PenyediaAplikasi };
