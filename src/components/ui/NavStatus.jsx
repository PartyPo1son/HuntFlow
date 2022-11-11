import React from 'react';
import OneStatus from '../OneStatus';

export default function NavStatus({
  allStatus, statusHandler, cands, candsNum,
}) {
  // console.log('NAVSTATUS', cands);
  // console.log('ALLSTATUS', allStatus);
  // console.log('AAAAAAAAAAAAAAAAA', cands[0].Stage);
  return (
    <ul className="nav nav-tabs">

      {allStatus.map((el, index) => (
        <li className="nav-item" key={el.id}>
          <button type="button" onClick={() => statusHandler(el.id)} className="nav-link">
            {el.title}
            {' '}
            {/* <span className="badge text-bg-primary">{cands[0]?.Stage?.length}</span> */}
            <span className="badge text-bg-primary">{(candsNum?.filter((elem) => elem.Stage?.title === allStatus[index].title).length)}</span>
          </button>
        </li>
      ))}

    </ul>

  );
}
