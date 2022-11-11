import React, { useEffect } from 'react';
import CandidatCards from '../CandidatCards';

export default function ThanksPage({ candidat }) {
  console.log(candidat);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h4>Кандидат успешно добавлен!</h4>
            {' '}
          </div>
        </div>
        <div className="row ">
          <div className="col-10">
            {/* <CandidatCards candidat={candidat} /> */}
            {' '}

          </div>
        </div>

        <div className="row ">
          <div className="col-10">
            <a href="/" type="button" className="btn btn-outline-info ">на главную</a>
          </div>
        </div>
      </div>

      {/* <CandidatCards /> */}
    </div>
  );
}
