import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HalamanMuka from './halaman/HalamanMuka';
import HalamanKelola from './halaman/HalamanKelola';
import HalamanPenulisan from './halaman/HalamanPenulisan';
import HalamanEditTulisan from './halaman/HalamanEditTulisan';
import HalamanTentang from './halaman/HalamanTentang';
import HalamanTidakDitemukan from './halaman/HalamanTidakDitemukan';
import Tulisan from './halaman/Tulisan';
import SharedNavigasi from './komponen/SharedNavigasi';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedNavigasi />}>
          <Route index element={<HalamanMuka />} />
          <Route path='kelola'>
            <Route index element={<HalamanKelola />} />
            <Route path='buat-tulisan' element={<HalamanPenulisan />} />
            <Route path='edit-tulisan' element={<HalamanEditTulisan />} />
          </Route>
          <Route path='tentang' element={<HalamanTentang />} />
          <Route path=':id' element={<Tulisan />} />
          <Route path='*' element={<HalamanTidakDitemukan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
