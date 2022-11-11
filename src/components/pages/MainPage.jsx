import React, { useState } from 'react';
import CandidatCards from '../CandidatCards';
import CandidateList from '../CandidateList';
import NavStatus from '../ui/NavStatus';
import VakList from '../ui/VakList';

export default function MainPage({
  allStatus, allCandidates, vacansy, setOneCand,
}) {
  const [cands, setCands] = useState(allCandidates || []);
  const [filter, setFilter] = useState({ vacancy_id: null, stage_id: null });
  const vacansyHandler = (vak) => {
    fetch(`/candidates/${vak}`)
      .then((res) => res.json())
      .then((data) => {
        setFilter({ vacancy_id: vak });
        setCands(data);
        // console.log(cands);
      });
  };
  const statusHandler = (stage) => {
    fetch(`/candidates/vacancy/${filter.vacancy_id}/${stage}`)
      .then((res) => res.json())
      .then((data) => setCands(data));
  };

  //= ================
  const [candidat, setCandidat] = useState();
  const candidatHandler = (id) => {
    console.log('hell');
    setCandidat(cands.find((el) => el.id === id));
  };
    //= ==================
  const delitCardHandler = (id) => {
    console.log('DELETE');
    fetch(`/delete/${id}`, { method: 'DELETE' })
      .then(() => setCands((prev) => prev.filter((el) => el.id != id)))
      .catch(console.log);
  };

  //= ====================
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <VakList vacansy={vacansy} vacansyHandler={vacansyHandler} />
        </div>
        <div className="col-10">
          <NavStatus cands={cands} allStatus={allStatus} statusHandler={statusHandler} />
        </div>
      </div>
      <div className="col-10">

        <div>
          <CandidateList candidatHandler={candidatHandler} allCandidates={cands} />
        </div>
        <div>
          <CandidatCards delitCardHandler={delitCardHandler} candidat={candidat} />
        </div>
      </div>

    </div>
  );
}
