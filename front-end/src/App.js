import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HalamanMuka from './halaman/HalamanMuka';
import HalamanPenulisan from './halaman/HalamanPenulisan';
import HalamanTentang from './halaman/HalamanTentang';
import HalamanTidakDitemukan from './halaman/HalamanTidakDitemukan';
import SharedNavigasi from './komponen/SharedNavigasi';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedNavigasi />}>
          <Route index element={<HalamanMuka />} />
          <Route path='buat-tulisan' element={<HalamanPenulisan />} />
          <Route path='tentang' element={<HalamanTentang />} />
          <Route path='*' element={<HalamanTidakDitemukan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
