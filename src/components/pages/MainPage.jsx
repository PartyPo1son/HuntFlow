import React from 'react';
import CandidateList from '../CandidateList';
import NavStatus from '../NavStatus';
import VakList from '../VakList';

export default function MainPage() {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <VakList />
        </div>

        <div className="col-10">
          <NavStatus />
          <CandidateList />

        </div>

      </div>
    </div>
  );
}
