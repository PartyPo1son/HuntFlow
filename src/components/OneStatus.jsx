import React from 'react';

export default function OneStatus({ onestatus }) {
  return (
    <li className="nav-item">
      <button type="button" onClick={() => statusHandler(ones)} className="nav-link">
        {onestatus.title}
        {' '}
      </button>
    </li>
  );
}
