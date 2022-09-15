import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useKonteksGlobal } from './konteks/konteks'

import HalamanMuka from './halaman/HalamanMuka';
import HalamanTidakDitemukan from './halaman/HalamanTidakDitemukan';

const App = () => {
  // const {} = useKonteksGlobal()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HalamanMuka />} />
        <Route path='*' element={<HalamanTidakDitemukan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
