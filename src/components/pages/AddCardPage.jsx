import React, { useState } from 'react';

export default function cardPage({ groupInput, inputHandler }) {
  return (
    <div className="container">
      <div className="row mt-5">
        <h4>Добавить кандидата</h4>
        <div className="col-6">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <input onChange={inputHandler} value={groupInput.first_name} name="first_name" type="text" className="form-control" placeholder="Имя" />
            </div>
            <div className="mb-3">
              <input onChange={inputHandler} value={groupInput.last_name} name="last_name" type="text" className="form-control" placeholder="Фамилия" />
            </div>
            <div className="mb-3">
              <input onChange={inputHandler} value={groupInput.age} name="age" type="number" className="form-control" placeholder="Возраст" />
            </div>
            <div className="mb-3">
              <input onChange={inputHandler} value={groupInput.city} name="city" type="text" className="form-control" placeholder="Город" />
            </div>
            <button type="submit" className="btn btn-success">Добавить</button>
          </form>
        </div>
      </div>
    </div>
  );
}
