import React from 'react';

export default function OneStatus({ onestatus }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">
        {onestatus.title}
        {' '}
      </a>
    </li>
  );
}
