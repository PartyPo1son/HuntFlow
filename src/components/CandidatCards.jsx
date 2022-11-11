import React, { useState, useEffect } from 'react';

export default function CandidatCards({
  candidat, editHandler, delitCardHandler, setCands,
}) {
  const [edit, setEdit] = useState(false);
  const [candidateState, setCandidateState] = useState({});
  const [input, setInput] = useState({
    first_name: '',
    age: '',
    city: '',
  });
  console.log(input);
  const nextHandler = (id) => {
    fetch(`/stage/candidate/${id}`)
      .then();
  };
  useEffect(() => {
    setCandidateState(candidat);
  }, [candidat]);
  const candidatHandler = (e) => {
    setCandidateState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // const saveTitle = () => {
  //   editHandler();
  //   setEditing(false);
  // };
  const candidatSubmit = (e) => {
    e.preventDefault();
    console.log(candidateState);
    fetch(`/stage/candidate/edit/${candidateState?.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(candidateState),
    })
      .then(() => {
        setCands((prev) => prev.map((el) => {
          if (el.id === candidateState?.id) {
            return candidateState;
          } return el;
        }));
        setEdit(false);
      });
  };
  return (

    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="card card-inverse p-2">
            <div className="card-block">
              <div className="row">
                <div className="col-md-8 col-sm-8">

                  {!edit ? (
                    <h2 className="card-title">
                      Имя
                      {' '}
                      {candidateState?.first_name}
                    </h2>
                  ) : (
                    <form onSubmit={candidatSubmit}>
                      <input
                        name="first_name"
                        onChange={candidatHandler}
                        value={candidateState.first_name || ''}
                        type=""
                        placeholder="введи имя"
                      />
                      <input
                        name="age"
                        onChange={candidatHandler}
                        value={candidateState.age || ''}
                        type=""
                        placeholder="введи имя"
                      />
                      <input
                        name="city"
                        onChange={candidatHandler}
                        value={candidateState.city || ''}
                        type=""
                        placeholder="введи имя"
                      />
                      <button className="btn btn-outline-success btn-sm" type="submit">save</button>

                    </form>
                  )}

                  {!edit ? (
                    <p className="card-text">
                      <strong>Возраст:</strong>
                      {' '}
                      {candidat?.age}
                      {' '}
                    </p>
                  ) : (
                    <>

                    </>
                  )}

                  {!edit ? (
                    <p className="card-text">
                      <strong>Город</strong>
                      {' '}
                      {candidat?.city}
                      {' '}
                    </p>
                  ) : (
                    <>

                    </>
                  )}

                  <p className="card-text">
                    <strong>Вакансия:</strong>
                    {' '}
                    Web Developer
                    {' '}
                  </p>

                  <p>
                    <strong>Этап</strong>

                    <span className="badge bg-info ml-3">{candidat?.stage_id}</span>

                  </p>
                </div>
                <div className="col-md-4 col-sm-4 text-center">
                  <img className="btn-md" src="https://cdn-icons-png.flaticon.com/512/3048/3048122.png" alt="" style={{ width: '50%', borderRadius: '50%' }} />
                </div>
                <div className="row">
                  <div className="col-3">
                    {!edit ? <button onClick={() => setEdit(true)} type="button" className="btn btn-outline-secondary">Edit</button> : <button onClick={() => { setEdit(false); setTitle(candidat?.age); }} type="button" className="btn btn-outline-secondary">close</button>}

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
