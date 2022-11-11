import React from 'react';
import OneStatus from '../OneStatus';

export default function NavStatus({ allStatus, statusHandler, cands }) {
  // console.log('NAVSTATUS', cands);
  // console.log('AAAAAAAAAAAAAAAAA', cands[0].Stage);
  return (
    <ul className="nav nav-tabs">
      {allStatus.map((el) => (
        <li className="nav-item" key={el.id}>
          <button type="button" onClick={() => statusHandler(el.id)} className="nav-link">
            {el.title}
            {' '}
            {/* <span className="badge text-bg-primary">{cands[0]?.Stage?.length}</span> */}
            <span className="badge text-bg-primary">{cands?.reduce((acc, cur) => cur.stage + acc, 0)}</span>
          </button>
        </li>
      ))}
    </ul>

  );
}
