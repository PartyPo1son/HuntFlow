import React from 'react';

export default function CandidatCards() {
  return (

    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="card card-inverse p-2">
            <div className="card-block">
              <div className="row">
                <div className="col-md-8 col-sm-8">
                  <h2 className="card-title">ФИО: Иван Иванов</h2>
                  <p className="card-text">
                    <strong>Возраст:</strong>
                    {' '}
                    29
                    {' '}
                  </p>
                  <p className="card-text">
                    <strong>Город</strong>
                    {' '}
                    Москва
                    {' '}
                  </p>
                  <p className="card-text">
                    <strong>Вакансия:</strong>
                    {' '}
                    Web Developer
                    {' '}
                  </p>

                  <p>
                    <strong>Этап</strong>

                    <span className="badge bg-info ml-3">Интервью</span>

                  </p>
                </div>
                <div className="col-md-4 col-sm-4 text-center">
                  <img className="btn-md" src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png" alt="" style={{ width: '50%', borderRadius: '50%' }} />
                </div>
                <div className="row">
                  <div className="col-3">
                    <button type="button" className="btn btn-outline-secondary">Edit</button>
                    <button type="button" className="btn btn-outline-danger">Х</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
