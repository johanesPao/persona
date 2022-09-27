import React, { useContext, useReducer, useCallback } from 'react';

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
  adalahAdmin: true,
  isiJudul: '',
  isiTulisan: '',
  editTulisan: false,
  idEditTulisan: '',
};

const PenyediaAplikasi = ({ children }) => {
  const [keadaan, eksekusi] = useReducer(logika, keadaanAwal);

  // FUNGSI FETCH SEMUA TULISAN
  const muatTulisan = useCallback(async () => {
    eksekusi({
      tipe: 'MEMUAT',
    });
    const response = await fetch(`${BACKEND_API}/tulisan`);
    const dataTulisan = await response.json();
    eksekusi({
      tipe: 'SELESAI_MEMUAT',
    });
    return dataTulisan;
  }, []);

  // FUNGSI FETCH SATU TULISAN
  const ambilSatuTulisan = async (id) => {
    eksekusi({
      tipe: 'MEMUAT',
    });
    const response = await fetch(`${BACKEND_API}/tulisan/${id}`);
    const satuTulisan = await response.json();
    eksekusi({
      tipe: 'SELESAI_MEMUAT',
    });
    return satuTulisan;
  };

  // FUNGSI POST TULISAN
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

  // FUNGSI HAPUS TULISAN
  const hapusTulisan = async (id) => {
    try {
      const konfigurasiRekues = {
        method: 'DELETE',
        body: id,
      };
      const response = await fetch(
        `${BACKEND_API}/tulisan/${id}`,
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

  // FUNGSI MODE EDIT
  const mulaiModeEdit = (id) => {
    eksekusi({
      tipe: 'MULAI_MODE_EDIT',
      muatan: id,
    });
  };

  // FUNGSI AKHIRI MODE EDIT
  const akhiriModeEdit = () => {
    eksekusi({
      tipe: 'AKHIRI_MODE_EDIT',
    });
  };

  // FUNGSI EDIT TULISAN
  const editPenulisan = async (tulisan) => {
    try {
      const konfigurasiRekues = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tulisan),
      };
      const response = await fetch(
        `${BACKEND_API}/tulisan/${tulisan._id}`,
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

  return (
    <KonteksAplikasi.Provider
      value={{
        ...keadaan,
        muatTulisan,
        simpanTulisan,
        ambilSatuTulisan,
        hapusTulisan,
        mulaiModeEdit,
        akhiriModeEdit,
        editPenulisan,
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
