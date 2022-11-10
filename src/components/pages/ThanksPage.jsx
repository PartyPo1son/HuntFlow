import React from 'react';
import CandidatCards from '../CandidatCards';

export default function ThanksPage() {
  return (
    <div>
      <div className="container">
        <h4>Кандидат успешно добавлен!</h4>

        <CandidatCards />
        <a href="/" type="button" className="btn btn-outline-info">на главную</a>
      </div>

      {/* <CandidatCards /> */}
    </div>
  );
}
