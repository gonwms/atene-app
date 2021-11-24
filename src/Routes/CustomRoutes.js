import React from 'react';

import {Routes, Route} from 'react-router-dom';

/*pages*/
import Home from '../pages/Home';
import Integraciones from '../pages/Integraciones';
import About from '../pages/About';
import Mercadolibre from '../pages/Mercadolibre';

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/integraciones" element={<Integraciones />} />
      <Route path="/about" element={<About />} />
      <Route path="/mercadolibre" element={<Mercadolibre />} />
    </Routes>
  );
}
