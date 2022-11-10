import React, { useState } from 'react';
import CandidateList from '../CandidateList';
import NavStatus from '../ui/NavStatus';
import VakList from '../ui/VakList';

export default function MainPage({ allStatus, allCandidates, vacansy }) {
  const [cands, setCands] = useState(allCandidates || []);
  const vacansyHandler = (vak) => {
    fetch(`/candidates/${vak}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCands(data);
      });
  };
  const statusHandler = (stage) => {
    fetch('/candidates/');
  };
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <VakList vacansy={vacansy} vacansyHandler={vacansyHandler} />
        </div>

        <div className="col-10">
          <NavStatus allStatus={allStatus} statusHandler={statusHandler} />
          <CandidateList allCandidates={cands} />

        </div>

      </div>
    </div>
  );
}
