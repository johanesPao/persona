import React, { useContext, useReducer, useEffect } from 'react';

import logika from './logika';

const VERSI_API = 'v1';
const BACK_END_URL = `http://localhost:8000/${VERSI_API}`;

const KonteksAplikasi = React.createContext();

const keadaanAwal = {
  sedangMemuat: false,
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
    const response = await fetch(`${BACK_END_URL}/tulisan`);
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
      const response = await fetch(
        `${BACK_END_URL}/tulisan`,
        konfigurasiRekues,
      );
      const dataResponse = await response.json();
      return dataResponse;
    } catch (kesalahan) {
      return {
        pesan: kesalahan,
      };
    }
  };

  useEffect(() => {
    muatTulisan();
  }, []);

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
