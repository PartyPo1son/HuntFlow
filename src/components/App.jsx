import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './ui/Navbar';
import AddCardPage from './pages/AddCardPage';
import MainPage from './pages/MainPage';
import ThanksPage from './pages/ThanksPage';
import Reg from './Reg';
import Auth from './Auth';
import CandidatCards from './CandidatCards';

export default function App({
  candidat, allStatus, allCandidates, vacansy, user,
}) {
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
    fetch('/addCard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(groupInput),
    })
      .then((res) => {
        if (res.ok) {
          window.location.href = '/addCard/thanks';
          return res.json();
        }
      })
      .then((data) => {
        window.location.href = `/addCard/${data.id}`;
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Navbar user={user} />

        </div>
      </div>

      <Routes>
        <Route path="/" element={<MainPage vacansy={vacansy} allStatus={allStatus} allCandidates={allCandidates} />} />
        <Route path="/addCard" element={<AddCardPage groupInput={groupInput} inputHandler={inputHandler} submitHandler={submitHandler} />} />
        <Route path="/addCard/:id" element={<ThanksPage candidat={candidat} />} />
        <Route path="/candidat/:id" element={<CandidatCards candidat={candidat} />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}
