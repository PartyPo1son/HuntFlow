import React from 'react';

export default function VakList({ vacansy, vacansyHandler }) {
  return (
    <div className="list-group" >
      <h4>Мои вакансии</h4>
      {vacansy.map((el) => <button key={el.id} onClick={() => vacansyHandler(el.id)} type="button" className="list-group-item list-group-item-action">{el.title}</button>)}
    </div>
  );
}
