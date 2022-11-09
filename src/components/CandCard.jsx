import React from 'react';

export default function CandCard() {
  return (
    <div className="card mb-3" style={{ 'max-width': '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Имя Фамилия</h5>
            <p className="card-text">Кандидат на вакансию Повара</p>
            <p className="card-text"><small className="text-muted">Последнее обновление 3 мин. назад</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
