import React, { useState } from 'react';

export default function CandidatCards({ candidat, editHandler, delitCardHandler }) {
  const [edit, setEdit] = useState(false);
  const [candidateState, setCandidateState] = useState(candidat);
  const nextHandler = (id) => {
    fetch(`/stage/candidate/${id}`)
      .then();
  };
  console.log(candidat);
  return (

    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="card card-inverse p-2">
            <div className="card-block">
              <div className="row">
                <div className="col-md-8 col-sm-8">
                  <h2 className="card-title">
                    Имя
                    {' '}
                    {candidateState?.first_name}
                    {!edit ? <button onClick={() => setEdit(true)} type="button" className="btn btn-outline-secondary">Edit</button> : <button onClick={() => { setEdit(false); setTitle(candidat?.age); }} type="button" className="btn btn-outline-secondary">close</button>}
                  </h2>

                  {!edit ? }
                  <p className="card-text">
                    <strong>Возраст:</strong>
                    {' '}
                    {candidat?.age}
                    {' '}
                  </p>
                  <p className="card-text">
                    <strong>Город</strong>
                    {' '}
                    {candidat?.city}
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
                    {!edit ? 'span' : 'input'}
                    <span className="badge bg-info ml-3">{candidat?.stage_id}</span>

                  </p>
                </div>
                <div className="col-md-4 col-sm-4 text-center">
                  <img className="btn-md" src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png" alt="" style={{ width: '50%', borderRadius: '50%' }} />
                </div>
                <div className="row">
                  <div className="col-3">
                    <button onClick={() => editHandler(candidat?.id)} type="button" className="btn btn-outline-secondary">Edit</button>

                    <button onClick={() => nextHandler(candidat?.id)} type="button" className="btn btn-outline-secondary">На следующий этап</button>
                    <button onClick={() => delitCardHandler(candidat?.id)} type="button" className="btn btn-outline-danger">Х</button>
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
