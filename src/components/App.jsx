import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

import CardPage from './pages/CardPage';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Navbar />
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/addCard" element={<CardPage />} />
      </Routes>
    </>
  );
}
