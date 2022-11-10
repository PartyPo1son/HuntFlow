import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './ui/Navbar';
import AddCardPage from './pages/AddCardPage';
import MainPage from './pages/MainPage';
import ThanksPage from './pages/ThanksPage';
import Reg from './Reg';
import Auth from './Auth';

export default function App({ allStatus, allCandidates, vacansy }) {
// РАБОТА С ДОБАВЛЕНИЕМ КАНДИДАТА
  const [groupInput, setGroupInput] = useState({
    first_name: '',
    last_name: '',
    age: '',
    city: '',
  });
  const inputHandler = (e) => setGroupInput((prev) => ({
    ...prev, [e.target.name]: e.target.value,
  }));

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/addCard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(groupInput),
    });
    if (response.ok) {
      window.location.href = '/addCard/thanks';
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<MainPage vacansy={vacansy} allStatus={allStatus} allCandidates={allCandidates} />} />
        <Route path="/addCard" element={<AddCardPage groupInput={groupInput} inputHandler={inputHandler} submitHandler={submitHandler} />} />
        <Route path="/addCard/thanks" element={<ThanksPage />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}
