import React from 'react';
import OneStatus from '../OneStatus';

export default function NavStatus({ allStatus, statusHandler }) {
  return (
    <ul className="nav nav-tabs">

      {allStatus.map((el) => (
        <li className="nav-item ">
          <button key={el.id} type="button" onClick={() => statusHandler(el.id)} className="nav-link ">
            {el.title}
            {' '}
          </button>
        </li>
      ))}

    </ul>

  );
}
