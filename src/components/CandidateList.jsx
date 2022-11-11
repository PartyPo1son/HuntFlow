import React from 'react';
import CandCard from './CandCard';

export default function CandidateList({ allCandidates, candidatHandler }) {
  return (
    <div>

      {allCandidates?.map((el) => (
        <CandCard
          key={el.id}
          oneCand={el}
          candidatHandler={candidatHandler}
        />
      ))}

    </div>
  );
}
