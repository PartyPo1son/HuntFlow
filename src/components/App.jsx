import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CandidateList from './CandidateList';
import Navbar from './Navbar';
import NavStatus from './NavStatus';
import VakList from './VakList';

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <VakList />
        </div>

        <div className="col-10">
          <NavStatus />
          <CandidateList />
        </div>

      </div>
      <Routes>
        {/* <Route path="/" element={<MainPage />} />
        <Route path="/posts" element={<PostsPage allPosts={allPosts} />} /> */}

      </Routes>
    </div>
  );
}
