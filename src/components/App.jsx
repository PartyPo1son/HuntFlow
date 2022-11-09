import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './ui/Navbar';

import AddCardPage from './pages/AddCardPage';
import MainPage from './pages/MainPage';

export default function App() {
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

  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(groupInput),
    });
  };

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
        <Route path="/addCard" element={<AddCardPage groupInput={groupInput} inputHandler={inputHandler} submitHandler={submitHandler} />} />
      </Routes>
    </>
  );
}
