import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import VendingMachine from './VendingMachine';
import Sardines from './Sardines';
import Chips from './Chips';
import Soda from './Soda';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/sardines" element={<Sardines />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/soda" element={<Soda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
