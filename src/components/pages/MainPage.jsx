import React from 'react';
import CandidateList from '../CandidateList';
import NavStatus from '../ui/NavStatus';
import VakList from '../ui/VakList';

export default function MainPage({ allStatus }) {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <VakList />
        </div>

        <div className="col-10">
          <NavStatus allStatus={allStatus} />
          <CandidateList />

        </div>

      </div>
    </div>
  );
}
