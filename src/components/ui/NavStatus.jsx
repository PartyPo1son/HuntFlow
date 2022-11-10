import React from 'react';
import OneStatus from '../OneStatus';

export default function NavStatus({ allStatus, statusHandler }) {
  return (
    <ul className="nav nav-tabs">
      {allStatus.map((el) => (
        <li className="nav-item" key={el.id}>
          <button type="button" onClick={() => statusHandler(el.id)} className="nav-link">
            {el.title}
            {' '}
          </button>
        </li>
      ))}
    </ul>

  );
}
