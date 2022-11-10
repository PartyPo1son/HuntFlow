import React from 'react';
import OneStatus from './OneStatus';

export default function NavStatus({ allStatus }) {
  return (
    <ul className="nav nav-tabs">
      {allStatus.map((el) => <OneStatus key={el.id} onestatus={el} />)}
    </ul>

  );
}
